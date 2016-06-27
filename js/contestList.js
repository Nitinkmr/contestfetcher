var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
console.log("month" + (month+1));
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
        objectMonth = (data[i].end[5] + data[i].end[6]) ;
       
        if(objectMonth<(month+1) )// those which have finished 
          {
            console.log(objectMonth + "skipped");
            continue;
          }

        objectDate = (data[i].end[8] + data[i].end[9]);

        if(objectDate<day && objectMonth==(month+1))
        {
          continue;
        }
        var endDate = "";
        for(var j=0;j<18;j++)
        {
          if(j==10)
              endDate+=" ";
           if(j==11)
            continue;
            endDate +=data[i].end[j]; 
        }
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
    '</div><div class="card-caption"><span class="date">' + endDate + '</span>'+
      '<h1>' + data[i].event + '</h1></div>'+
    '<a href=" ' + data[i].href + '"class="' +resultCount + '"><div class="card-outmore"><h5>Go to challenge page</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
    '</div></a></div>'
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

