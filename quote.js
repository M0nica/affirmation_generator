  <script type= "text/javascript">
  $(document).ready(function(){

    //array of quotes
    var quotes = [
       {words: "there is you and you.\nthis is a relationship.\nthis is the most important relationship.", source: "home", author: "nayyirah waheed", shownAlready: false},
        {words:  "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", source: "unknown" , author: "Audre Lorde", shownAlready: false},
        {words: "The sunlight isn't the only thing that makes me happy anymore now that I can endure my storms." ,source: "Words from a Wanderer" , author: "Alex Elle", shownAlready: false},
         {words: "Life is so amazing and ridiculous. It just makes you want to laugh out loud at all the things you thought would destroy you." ,source: "twitter" , author: "Alysia Harris", shownAlready: false}
         ];

       //quote stats
         var quoteStats = "We currently only have "+ quotes.length + " quotes and are " + (365-quotes.length) + " quotes short of our goal of 365!";
         //motivate people to contribute with quoteStats
          $("#contribute").text(quoteStats);
        

       
//console.log("before sort: " + quotes);
//shuffle quotes 
quotes.sort(function() {return 0.5 - Math.random()});

//console.log("after sort: " + quotes);
//show the last quote of the shuffled array 
          $('blockquote').text(quotes[quotes.length-1].words);



          $('cite').text(quotes[quotes.length-1].author);

//remove the last quote from  array
          quotes.pop();
      

     $('.next').click(function(){
          
       )

         if (quotes.length > 0 ) {
            $('blockquote').text(quotes[quotes.length-1].words);



          $('cite').text(quotes[quotes.length-1].author);

          quotes.pop();
         }

         else {
          //when there are no more quotes display this message
           $('blockquote').text("You have reached the last quote. If you would like to see more quotes then please submit some via our submission form." + "\n" + quoteStats );



          $('cite').text("Thank you for visiting");
          $('.next').remove();


         }




       

            })



});
  </script>