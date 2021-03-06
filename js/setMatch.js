  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  //const ul = document.getElementById('pills-home');
  //const url = 'https://apifootball.com/api/?action=get_events&from=2019-05-00&to=2019-05-10&league_id=62&APIkey=1d708a5a4b2ed8afe829e1e774e2644e801fe6d5ad8a578ba50f24f04248eee4';*/
  function setMatch(ul,url){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data;
    return authors.map(function(author) {
      let div0 = createNode('div'),
      
      div1 = createNode('div'),
      
      div2 = createNode('div'),
      div3 = createNode('div'),
      div4 = createNode('div'),
      div5 = createNode('div'),
      div6 = createNode('div'),
      div7 = createNode('div'),
      div8 = createNode('div'),
      div9 = createNode('div'),
      div10 = createNode('div'),
      div11 = createNode('div'),
      div12 = createNode('div'),
      div13 = createNode('div'),
      div14 = createNode('div'),
      div15 = createNode('div'),
      div16 = createNode('div'),
      img = createNode('img'),
      img2 = createNode('img'),
      h5=createNode('h5'),
      h3=createNode('h3'),
      h33=createNode('h3'),
      h7=createNode('h7'),
      span = createNode('span');
      span2 = createNode('span');
      var a="logo/"+`${author.match_hometeam_name}`+".png";
      var b="logo/"+`${author.match_awayteam_name}`+".png";
      img.src = a;
      img2.src=b;
      span.innerHTML=`${author.match_date}`
      span2.innerHTML=`${author.match_time}`
      div0.setAttribute('class', 'row align-items-center');
      div1.setAttribute('class', 'col-md-12');
      div2.setAttribute('class', 'row bg-white align-items-center ml-0 mr-0 py-4 match-entry');
      div3.setAttribute('class', 'col-md-4 col-lg-4 mb-4 mb-lg-0');
      div4.setAttribute('class', 'text-center text-lg-left');
      div5.setAttribute('class', 'd-block d-lg-flex align-items-center');
      div6.setAttribute('class', 'image image-small text-center mb-3 mb-lg-0 mr-lg-3');
      div7.setAttribute('class', 'text');
      div8.setAttribute('class', 'col-md-4 col-lg-4 text-center mb-4 mb-lg-0');
      div9.setAttribute('class', 'd-inline-block');
      div10.setAttribute('class', 'bg-black py-2 px-4 mb-2 text-white d-inline-block rounded');
      div11.setAttribute('class', 'col-md-4 col-lg-4 text-center text-lg-right');
      div12.setAttribute('class', '');
      div13.setAttribute('class', 'd-block d-lg-flex align-items-center');
      div14.setAttribute('class', 'image image-small ml-lg-3 mb-3 mb-lg-0 order-2');
      div15.setAttribute('class', 'text order-1 w-100');
      h3.setAttribute('class', 'h5 mb-0 text-black');
      h33.setAttribute('class', 'h5 mb-0 text-black');
      img.setAttribute('class', 'img-fluid');
      img2.setAttribute('class', 'img-fluid');
      h5.setAttribute('class', 'resultat');
     h3.innerHTML = `${author.match_hometeam_name}`;
     h33.innerHTML=`${author.match_awayteam_name}`;
     h5.innerHTML=`${author.match_hometeam_score}`+":"+`${author.match_awayteam_score}`;
     var count = 0;
while (`${author.goalscorer}`[count]) {
  var c=`${author.goalscorer}`[count];
      h7.innerHTML=c.time;
   // h7.innerHTML="jj";
    count++;
}
      append(div6, img);
      append(div7,h3);
      append(div5, div6);
      append(div5, div7);
      append(div4, div5);
      append(div3, div4);
      append(div2,div3);
      append(div10,span)
      append(div10,h5);
      append(div10,span2);
      append(div9,div10);
      append(div8,div9);
      append(div2,div8);

      append(div14,img2);
      //append(div14,h7);
      append(div15,h33);
      append(div13,div14);
      append(div13,div15);
      append(div12,div13);
      append(div11,div12);
      append(div2,div11);

      append(div1, div2);
      append(div0, div1);
      append(ul, div0);
    })
  })
  .catch(function(error) {
    console.log(error);
  });}
  function formatDate(a1) {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()+a1*7,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
  function formatDate2(a2) {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()+a2*14,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
/////////////////
//////////////////
function load()  
{  
  // var url = "https://apifootball.com/api/?action=get_events&from=2019-04-15&to=2019-05-03&league_id=62&APIkey=1d708a5a4b2ed8afe829e1e774e2644e801fe6d5ad8a578ba50f24f04248eee4";//use any url that have json data  
   var url="https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=1d708a5a4b2ed8afe829e1e774e2644e801fe6d5ad8a578ba50f24f04248eee4";
   var request;  
  
   if(window.XMLHttpRequest){    
    request=new XMLHttpRequest();//for Chrome, mozilla etc  
   }  
   else if(window.ActiveXObject){    
    request=new ActiveXObject("Microsoft.XMLHTTP");//for IE only  
   }    
   request.onreadystatechange  = function(){  
      if (request.readyState == 4  )  
      {  
        var jsonObj = JSON.parse(request.responseText);//JSON.parse() returns JSON object  
        var stand = document.getElementsByClassName("text");
        var resultat = document.getElementsByClassName("standing-table__cell-value standing-table__cell-value--main");
       /// var x = document.getElementsByClassName("example");
       

       ////////////
for(var i =0; i < 20; i++)
{
var j=0;
while(i!=jsonObj[i].overall_league_position)
  {j++;
}
stand[i]=jsonObj[i].overall_league_position;

} 
/*for(var k=0; k< resultat.length; k++)
{
   resultat[k].innerHTML=jsonObj[k].match_hometeam_score+":"+jsonObj[k].match_awayteam_score;
} */
       // document.getElementById("3").innerHTML = jsonObj[0].country_id;  
        //document.getElementById("2").innerHTML = jsonObj[1].country_id;  
      }  
   }  
   request.open("GET", url, true);  
   request.send();  
}
load();
