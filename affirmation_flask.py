## Country information server
#   curl http://localhost:5000/countries?lookup_name=France
#   Returns the population of country
#   France, Paris, 64933400

from flask import Flask, request, render_template
import pg8000
import os

app = Flask(__name__)
conn = pg8000.connect(database="affirmations", user="monica")


@app.route("/")
def author_info():
    # author_info = None
    author_info = list()
    all_author_info = list()
    #default value for lookup_name is None
    cname = request.args.get('author_name', None)

    cursor = conn.cursor()
    cursor.execute(
    "SELECT DISTINCT author_original FROM quotes ORDER BY author_original ASC"
    )
    all_responses = cursor.fetchall()
    print("all_responses", all_responses)
    for response in all_responses:
        author_dict = {'author':response[0]}
        all_author_info.append(author_dict)

    #perform database lookup if a country name is specified
    if cname:
        cname = cname.lower()
        cursor = conn.cursor()
        #converts cname to lowercase and looks at author_downcase
        # so that SELECT/search is caseinsensitive
        cursor.execute(
        "SELECT author_original, words FROM quotes WHERE author_downcase = %s", [cname]
        )
        responses = cursor.fetchall()
        #print(response)

        for response in responses:
            # author_info = {'name': response[0], 'words': response[1]}
            a_dict = {'name':response[0], 'words':response[1]}
            author_info.append(a_dict)

        print("author_info IS", author_info)
    print("info for all authors is", all_author_info)
    #perform a database search
    # format the rresults as text (html)
    # return that text

    return render_template("author_lookup.html", author=author_info, authors=all_author_info)

app.run(debug=True)
