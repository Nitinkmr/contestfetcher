var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var limit = 100;
//console.log(year);

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
var url = "http://clist.by:80/api/v1/contest/?limit=" + limit + "&start__year=" + year + "&start__month=" + month;
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
var temp;
function myFunction(data) {
    console.log(data);
    data = JSON.parse(data);
    data = data.objects
    
  
    for(var i=0;i<data.length;i++)
    {
       if(data[i].resource.name==platforms[0])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codeforces.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[1])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codechef.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[2])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerrank.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[3])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackerearth.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[4])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/codejam.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[5])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/hackercup.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[6])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/spoj.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }

       if(data[i].resource.name==platforms[7])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/topcoder.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }


       if(data[i].resource.name==platforms[8])
       {
         $('#contestList').append(
          '<a target="_blank" href='+ data[i].href  + '><div class="thecard"><div class="card-img"><img src="img/uva.png">' + 
        '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
          '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
        '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );
       }
}
}