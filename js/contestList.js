var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
var day = date.getDate();
console.log(day);
var limit = 100;
var temp;
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
  
  
    if(day>7)
    {
      url = "http://clist.by:80/api/v1/json/contest/?limit=" + limit + "&end__year=" + year + "&start__month=" + (month+1) + "&start__day=" + (day-7 + dateIncrement);
    }else
    {
      url = "http://clist.by:80/api/v1/json/contest/?limit=" + limit + "&end__year=" + year + "&start__month=" + (month) + "&start__day=" + (tempDate + dateIncrement);
   
    }

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
    function myFunction(data) {
    //  console.log(data);
      data = JSON.parse(data);
      data = data.objects;
      temp = data;
      console.log('herer');
      
      for(var i=0;i<data.length;i++)
      {
         //console.log(data[i].end[3]);
         var objectDate = new Date();
         //var objectDate.setFullYear("2016");
         //console.log(objectDate.getFullYear);
        var name = data[i].resource.name;
         if(name==platforms[0])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codeforces.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;

         }  

         if(name==platforms[1])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codechef.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }

         if(name==platforms[2])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerrank.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
            '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          console.log("hello");
          resultCount++;
         }

         if(name==platforms[3])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerearth.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }

         if(name==platforms[4])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codejam.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }

         if(name==platforms[5])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackercup.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }

         if(name==platforms[6])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/spoj.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }

         if(name==platforms[7])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/topcoder.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }


         if(name==platforms[8])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/uva.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
         resultCount++;
         }
  }

  console.log(resultCount);
   // break;

  //break;
}