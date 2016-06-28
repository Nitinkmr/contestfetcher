while(upcoming ==0)
{
	console.log("inside loading" + upcoming);
}
console.log("inside loading" + upcoming);

var loadingDiv = document.getElementById("loading");

for(var i=0;i<1000;i++)
{
	console.log("loading");
}

loadingDiv.innerHTML = "";