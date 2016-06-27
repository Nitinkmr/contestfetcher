var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
var day = date.getDate();
console.log(day);
var limit = 1000;
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
    function myFunction(data) {
      data = JSON.parse(data);
      data = data.objects;
      temp = data;
      
      for(var i=0;i<data.length;i++)
      {
        
        
        objectMonth = data[i].end[8] + data[i].end[9];
        if(objectMonth<(month) || objectMonth>(month+2))
          continue;
   
        var name = data[i].resource.name;
       
         if(name==platforms[0])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codeforces.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;

         }else if(name==platforms[1])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codechef.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[2])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerrank.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
            '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[3])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerearth.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[4])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codejam.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[5])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackercup.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[6])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/spoj.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[7])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/topcoder.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
          resultCount++;
         }else if(name==platforms[8])
         {
           $('#contestList').append(
            '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/uva.png">' + 
          '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
            '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
          '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
         resultCount++;
         }
  }

}