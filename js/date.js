var d = new Date();

var month=new Array("Jan","Feb","Mar","Apr","May","Jun",
"Jul","Aug","Sep","Oct","Nov","Dec");

document.getElementById('date').innerHTML = (d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear());
