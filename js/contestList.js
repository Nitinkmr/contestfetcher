var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
console.log(month);
var day = date.getDate();
console.log(day);
var limit = 1000;
var temp;
var ongoing = 0;
var upcoming = 0;
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
    var objectEndHour;
    var objectEndMin;
    var found = false;
    var objectStartDate;
    var objectStartDateItem;

    function myFunction(data) {
      data = JSON.parse(data);
      data = data.objects;
      temp = data;
      
      for(var i=0;i<data.length;i++)
      {
        
        found = false;
        objectMonth = (data[i].end[5] + data[i].end[6]) ;
        objectEndHour = data[i].end[11] + data[i].end[12];
        objectEndMin = data[i].end[14] + data[i].end[15];
        if(objectMonth<(month+1) )// those which have finished 
          {
            continue;
          }

        objectDate = (data[i].end[8] + data[i].end[9]);

        if((objectDate<day && objectMonth==(month+1) ) ||  ( objectDate<=day && objectMonth==(month+1) && objectEndHour <= date.getHours() )) // skip those which ended in the current month
        {
          if(objectEndHour == date.getHours()  && objectEndMin>=date.getMinutes())
          {
            continue;
          }
          continue;
        }


        var endDate = "";
        var startDate = "";
        for(var j=0;j<18;j++)
        {
          if(j==10)
              {
                endDate+=" at ";
                startDate +=" at ";
                continue;
              }
            endDate +=data[i].end[j]; 
            startDate +=data[i].start[j];
        }

        var name = data[i].resource.name;
        var imgLink; 
          
        objectStartDateItem = new Date(data[i].start[0] + data[i].start[1] + data[i].start[2] + data[i].start[3],data[i].start[5] + data[i].start[6], data[i].start[8] + data[i].start[9]);
        objectStartDateItem.setHours(data[i].start[11] + data[i].start[12]);
        if(objectStartDateItem.getFullYear()>date.getFullYear())
            continue;

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
         //console.log(objectStartDateItem);
         if(found==true && (objectStartDateItem.getFullYear()<date.getFullYear() || (objectStartDateItem.getMonth() <= (date.getMonth() + 1) && objectStartDateItem.getDate()<= date.getDate() )  ))
         {

            if(objectStartDateItem.getFullYear()==date.getFullYear() && objectStartDateItem.getMonth() == (date.getMonth() + 1) &&  objectStartDateItem.getDate()== date.getDate() && objectStartDateItem.getHours()>date.getHours())
              {
                if(objectStartDateItem.getHours()==date.getHours() && objectStartDateItem.getMinutes()>date.getMinutes())
                    {
                         $('#upcoming').append(
              
                            '<p> <h1>upcoming</h1></p><div class="thecard"><div class="card-img"><img src="img/' + imgLink + '.png">'+
                              '</div><div class="card-caption"><h1><span class="date">Starts on ' + startDate + '</span></h1>' + '<h1><span class="date"> ends on ' + endDate + '</span></h1>'+
                                '<h1>' + data[i].event + '</h1></div>'+
                              '<a href=" ' + data[i].href + '"class="u' + upcoming + '"><div class="card-outmore"><h5>Go to challenge page</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
                              '</div></a></div>'
                                      );
                                      urls.push(data[i].href.toString());
                                  
                                      upcoming++; 
                          continue;
                    }
                


                   $('#upcoming').append(
              
                      '<p><h1>upcoming</h1></p><div class="thecard"><div class="card-img"><img src="img/' + imgLink + '.png">'+
                        '</div><div class="card-caption"><h1><span class="date">Starts on ' + startDate + '</span></h1>' + '<h1><span class="date"> ends on ' + endDate + '</span></h1>'+
                          '<h1>' + data[i].event + '</h1></div>'+
                        '<a href=" ' + data[i].href + '"class="u' + upcoming + '"><div class="card-outmore"><h5>Go to challenge page</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
                        '</div></a></div>'
                                );
                                urls.push(data[i].href.toString());
                            
                                upcoming++;   
                                continue;

                }
     console.log("day " + objectStartDateItem.getDate() + "year" + objectStartDateItem.getFullYear() + "month" + objectStartDateItem.getMonth() + "start hours " + objectStartDateItem.getHours() + "present hours" + date.getHours() + data[i].href) ;
   //     console.log(objectEndHour + " " + objectEndMin + " " + date.getHours() + " " + date.getMinutes());

            $('#ongoing').append(
              
  '<p> <h1>ongoing</h1></p><div class="thecard"><div class="card-img"><img src="img/' + imgLink + '.png">'+
    '</div><div class="card-caption"><h1><span class="date">Starts on ' + startDate + '</span></h1>' + '<h1><span class="date"> ends on ' + endDate + '</span></h1>'+
      '<h1>' + data[i].event + '</h1></div>'+
    '<a href=" ' + data[i].href + '"class="o' + ongoing + '"><div class="card-outmore"><h5>Go to challenge page</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
    '</div></a></div>'
            );
            urls.push(data[i].href.toString());
        
            ongoing++;
            
          }else
          {

            if(found==false)
              continue;
                        $('#upcoming').append(
              
  '<p> <h1>upcoming</h1></p><div class="thecard"><div class="card-img"><img src="img/' + imgLink + '.png">'+
    '</div><div class="card-caption"><h1><span class="date">Starts on ' + startDate + '</span></h1>' + '<h1><span class="date"> ends on ' + endDate + '</span></h1>'+
      '<h1>' + data[i].event + '</h1></div>'+
    '<a href=" ' + data[i].href + '"class="u' + upcoming + '"><div class="card-outmore"><h5>Go to challenge page</h5><i id="outmore-icon" class="fa fa-angle-right"></i>'+
    '</div></a></div>'
            );
            urls.push(data[i].href.toString());
        
            upcoming++;

          }


console.log(resultCount);

  }
  createEventListeners();
}

function createEventListeners()
{
    var div = document.getElementById("ongoing");
    for(var i=0;i<ongoing;i++)
    {
     var element = div.getElementsByClassName("o" + i)[0];
      element.addEventListener("click",function(){
          //opentab(document.getElementById(i).href);
          var a = this.className.substring(1,2);
          
           chrome.tabs.create({ url: urls[a] });

         // opentab(a);
      });

    }

    div = document.getElementById("upcoming");
    for(var i=0;i<upcoming;i++)
    {
     var element = div.getElementsByClassName("u" + i)[0];
      element.addEventListener("click",function(){
          //opentab(document.getElementById(i).href);
          var a = this.className.substring(1,2);
          
           chrome.tabs.create({ url: urls[a] });

         // opentab(a);
      });

    }
}

