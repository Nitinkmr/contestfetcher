var xmlhttp = new XMLHttpRequest();
var url = "http://clist.by/api/v1/json/contest/?username=nitin&api_key=b1361c1467e8bfe2d4a2b181aa95c1bfa1e9577d?end__year=2016";
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(data) {
    console.log(data);
    data = JSON.parse(data);
    
    data = data.objects;
  
     $('#contestList').append(
      '<a target="_blank" href='+ data[0].href  + '><div class="thecard"><div class="card-img"><img src="img/codeforces.png">' + 
    '</div><div class="card-caption"><i id="like-btn" class="fa fa-thumbs-o-up"></i><span class="date">Thursday, July 16, 2015</span>' + 
      '<h1>The nice sample title of this card.</h1><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>' + 
    '</div><div class="card-outmore"><h5>Read more</h5><i id="outmore-icon" class="fa fa-angle-right"></i></div></div></a>' );


}