## Country information server
#   curl http://localhost:5000/countries?lookup_name=France
#   Returns the population of country
#   France, Paris, 64933400

from flask import Flask, request, render_template
import pg8000

app = Flask(__name__)
conn = pg8000.connect(database="affirmations", user="Monica")

@app.route("/author")
def author_info():
    ainfo = None
    allinfo = list()
    #default value for lookup_name is None
    cname = request.args.get('lookup_name', None)

    cursor = conn.cursor()
    cursor.execute(
    "SELECT author FROM quotes"
    )
    all_responses = cursor.fetchall()
    print("all_responses", all_responses)
    for response in all_responses:
        author_dict = {'author':response[0]}
        allinfo.append(author_dict)

    #perform database lookup if a country name is specified
    if cname:
        cursor = conn.cursor()
        cursor.execute(
        "SELECT author, words FROM quotes WHERE author = %s", [cname]
        )
        response = cursor.fetchone()
        print(response)

        if response:
            ainfo = {'name': response[0], 'words': response[1]}

        print("AINFO IS", ainfo)
    print("info for all authors is", allinfo)
    #perform a database search
    # format the rresults as text (html)
    # return that text
    return render_template("author_lookup.html", author=ainfo, authors=allinfo)

app.run(debug=True)
