$.ajax({
  type:"GET",
  url:"http://clist.by/api/v1/jsonp/contest/?username=nitin&api_key=b1361c1467e8bfe2d4a2b181aa95c1bfa1e9577d?end__year=2016",
  dataType: "jsonp",
  success: function(data){
    console.log(data);
  }
});

