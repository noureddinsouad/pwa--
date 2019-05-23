site = function(data) {
    var slides = document.getElementsByClassName("h5 mb-0 text-black");
    var resultat = document.getElementsByClassName("resultat");
   /// var x = document.getElementsByClassName("example");
   var img=document.getElementsByClassName("img-fluid");
   var j=0;
for(var i =0; i < slides.length; i++)
{

slides[i].innerHTML=data[j].match_hometeam_name;
img[i].src="logo/"+data[j].match_hometeam_name+".png";;

slides[i+1].innerHTML=data[j].match_awayteam_name;
img[i+1].src="logo/"+data[j].match_awayteam_name+".png";;
i=i+1;
j++;

} 
for(var k=0; k< resultat.length; k++)
{
resultat[k].innerHTML=data[k].match_hometeam_score+":"+data[k].match_awayteam_score;
}     
}
///////////////////
sitenews = function(data) {
    var news = document.getElementsByClassName("news-h2");
    var img=document.getElementsByClassName("img-fluid");
    var a=document.getElementsByClassName("url article");
    var p=document.getElementsByClassName("mb-0");
   
for(var i =0; i < news.length; i++)
{
 news[i].innerHTML=data.articles[i].description;
 img[i+20].src=data.articles[i].urlToImage;
 a[i].href=data.articles[i].url;
 p[i+20].innerHTML=data.articles[i].title;
} 
}
/////////////////
function match() {
    
    var url = 'https://apifootball.com/api/?action=get_events&from=2019-05-11&to=2019-05-20&league_id=62&APIkey=1eb95f31a998e4849a427c9d4e7ae86653045400fc3f637fa3facbeadfdf6315';
    // TODO add cache logic here
    if ('caches' in window) {
      /*
       * Check if the service worker has already cached this city's weather
       * data. If the service worker has the data, then display the cached
       * data while the app fetches the latest data.
       */
      caches.match(url).then(function(response) {
        if (response) {
          response.json().then(function updateFromCache(json) {
            var results = json;
            console.log(results.length);
            site(results);
          });
        }
      });
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.responseText);
          
          site(response);
        }
      } else {
        // Return the initial weather forecast since no data is available.
        console.log("no data ")
      }
    };
    request.open('GET', url);
    request.send();
  };

  function news() {
    
    var url = 'https://newsapi.org/v2/everything?q=premier%20league&from=2019-04-00&sortBy=popularity&apiKey=81958183635c47bfa263904788fbe45b';
    // TODO add cache logic here
    if ('caches' in window) {
      /*
       * Check if the service worker has already cached this city's weather
       * data. If the service worker has the data, then display the cached
       * data while the app fetches the latest data.
       */
      caches.match(url).then(function(response) {
        if (response) {
          response.json().then(function updateFromCache(json) {
            var results = json;
            sitenews(results);
          });
        }
      });
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.responseText);
          
          sitenews(response);
        }
      } else {
        // Return the initial weather forecast since no data is available.
        console.log("no data ")
      }
    };
    request.open('GET', url);
    request.send();
  };
