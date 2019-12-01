
function valid()
{
	var obj=document.getElementById('name');
	if (obj == "") {
    document.getElementsById('name').innerHTML="Name must be filled out";
    return false;
  }
	 if(obj.value.match(RegExCodeForMin2Words) === null){
          document.getElementsById('name').innerHTML="Name valid";
    }

 var letter = /[a-zA-Z.-]/;
 if(obj.value==letter) 
  {
   return true;
  }
else
  { 
     document.getElementsById('name').innerHTML="Name must contain letters"; 
   return false; 
  }

  }

  function validEmail() 
{
  var obj=document.getElementById('email').pattern;
	if (obj == "") {
      document.getElementsById('email').innerHTML="email must be filled out";
    return true;
  }
  else{
      document.getElementsById('email').innerHTML="invalid email address!";
    return false;
}
}

function validDate()
{
var dd=document.getElementById('d');
var a = /[0-31]/;
var mm=document.getElementById('m');
var b = /[1-12]/;
var yy=document.getElementById('y');
var c= /[1900-2016]/;
if(dd.value===a && mm.value===b && yy.value===c) 
  {
   return true;
  }
else{
	alert("invalid date of birth!")
    return false;
}


}
  
