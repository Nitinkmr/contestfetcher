var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
var day = date.getDate();
console.log(day);
var limit = 1000;
var temp;
var urls = [];//new Array();
var platforms = [
  "codeforces.com",
  "codechef.com",
  "hackerrank.com",
  "hackerearth.com",
  "google.com/codejam",
  "facebook.com/hackercup",
  "spoj.pl",
  "topcoder.com",
  "uva.onlinejudge.org"  
];
var resultCount = 0;
var xmlhttp = new XMLHttpRequest();
var url;  
var dateIncrement = 0;
var tempDate = 28;
  
     url = "http://clist.by:80/api/v1/json/contest/?limit=" + limit  + "&end__year=" + year + "&start__year=" + year ;
   
    dateIncrement++;  
    xmlhttp.onreadystatechange=function()
     {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
        }
     }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    var temp;
    console.log(url);
    var objectDate;
    var objectMonth;
    var objectYear;
    var found = false;
    function myFunction(data) {
      data = JSON.parse(data);
      data = data.objects;
      temp = data;
      
      for(var i=0;i<data.length;i++)
      {
        
        found = false;
        objectMonth = data[i].end[8] + data[i].end[9];
        if(objectMonth<(month) || objectMonth>(month+2))
          continue;
   
        var name = data[i].resource.name;
        var imgLink; 
          
         if(name==platforms[0])
         {
            imgLink = 0;
            found = true;
         }else if(name==platforms[1])
         {
            imgLink = 1;
             found = true;
         }else if(name==platforms[2])
         {
            imgLink = 2;
             found = true;
         }else if(name==platforms[3])
         {
            imgLink = 3;
             found = true;
         }else if(name==platforms[4])
         {
            imgLink = 4;
             found = true;
         }else if(name==platforms[5])
         {
            imgLink = 5;
             found = true;
         }else if(name==platforms[6])
         {
            imgLink = 6;
             found = true;
         }else if(name==platforms[7])
         {
            imgLink = 7;
             found = true;
         }else if(name==platforms[8])
         {
            imgLink = 8;
             found = true;
         }

         if(found==true)
         {


            $('#contestList').append(
              
  '<div class="thecard"><div class="card-img"><img src="img/' + imgLink + '.png">'+
    '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>'+
      '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p></div>'+
    '<a href="http://codepen.io/anon/pen/NqBPOj"><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
    '</div></a></div> <a href="' + data[i].href + '" class="' + resultCount + '">click here</a>'

            );
            urls.push(data[i].href.toString());
              //console.log(urls[resultCount] + "pushed");
            resultCount++;
            
          }




  }
  createEventListeners();
}

function createEventListeners()
{
    var div = document.getElementById("contestList");
    for(var i=0;i<resultCount;i++)
    {
      console.log("addEventListener");
      var element = div.getElementsByClassName(i)[0];
      element.addEventListener("click",function(){
          //opentab(document.getElementById(i).href);
          var a = urls[this.className];
          console.log(a.toString());
          chrome.tabs.create({ url: a });

         // opentab(a);
      });

    }
}

