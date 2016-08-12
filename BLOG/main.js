//script code of the html file
var i=0;
//sharing the all social networks.
function gmail(){
		window.open("http://www.gmail.com");
}
function facebook(){
		window.open("http://www.facebook.com");
}
function twitter(){
		window.open("http://www.twitter.com");
}
function linkedin(){
		window.open("http://www.linkedin.com");
}
function google(){
		window.open("http://www.google.com");
}
//searching the search bar
function sidesearch(){
	var text=document.getElementById("sidesearchtext").value;
	window.open("http://www."+text+".com");
	document.getElementById("sidesearchtext").value="";
}
//subscribe the user
function subscribe(){
	if((document.getElementById("subscribemail").value)!=""){
		alert("Thank you for subscribe:-)");
		document.getElementById("subscribemail").value="";
	}
	else{
		alert("Enter correct mail id");
	}
}
//add the max 4 user comments and delete the user comments
function addcomment()
{
		var name=document.getElementById("name").value;
      	var email=document.getElementById("Email").value;
      	var textarea=document.getElementById("textarea").value;
      	if(i<4){
     	if(name!="" && email!=""&& textarea!="" )
     	{
     		var x=0;//(false)
				var atpos = email.indexOf("@");
 			   	var dotpos = email.lastIndexOf(".");
  				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  				{
        				x=false;
        		} 
        		else{
        				x=true;
        		}
        		if(x==true){  

        				 var com= "<div id=buttonall> <button id="+"hello"+i+" ><img src=cross.png id=crossimage ALIGN=center></div></button>"
        				switch(i){
        					case 0:
        							var q  = $('#textarea').val(),
        							name=$('#name').val(),
        							$name=$('<p id="name0" style="color:blue;font-size:15px" >').html(name),	
        							$comment=$('<p id="comment0" style="font-size:15px">').html(q);
        							$('#comments').append(com).append($name).append($comment);
        							
        							document.getElementById("name").value="";
  								  	document.getElementById("Email").value="";
  									  document.getElementById("textarea").value="";
        							$("#hello0").click(function() {
  										$("#comment0").remove();
  										$("#name0").remove();
  										$("#hello0").remove();
  										i--;	
									});
									break;

							case 1:var q  = $('#textarea').val(),
        							name=$('#name').val(),
        							
        							$name=$('<p id="name1" style="color:blue;font-size:15px" >').html(name),
        							
        							$comment=$('<p id="comment1" style="font-size:15px">').html(q);
        							$('#comments').append(com).append($name).append($comment);
        							
        							document.getElementById("name").value="";
  										document.getElementById("Email").value="";
  										document.getElementById("textarea").value="";
        							$("#hello1").click(function() {
  										$("#comment1").remove();
  										$("#name1").remove();
  										
  										$("#hello1").remove();
  										i--;
  										
									});
									break;
							case 2:var q  = $('#textarea').val(),
        							name=$('#name').val(),					
        							$name=$('<p id="name2" style="color:blue;font-size:15px" >').html(name),
        							$comment=$('<p id="comment2" style="font-size:15px">').html(q);
        							$('#comments').append(com).append($name).append($comment);
        							
								    	document.getElementById("name").value="";
  										document.getElementById("Email").value="";
  										document.getElementById("textarea").value="";        							

        							$("#hello2").click(function() {
  										$("#comment2").remove();
  										$("#name2").remove();
  										
  										$("#hello2").remove();
  										i--;
  										
									});
									break;
									case 3:var q  = $('#textarea').val(),
        							name=$('#name').val(),
        							
        							$name=$('<p id="name3" style="color:blue;font-size:15px;" >').html(name),
        							
        							$comment=$('<p id="comment3" style="font-size:15px">').html(q);
        							$('#comments').append(com).append($name).append($comment);
        							
									    document.getElementById("name").value="";
  										document.getElementById("Email").value="";
  										document.getElementById("textarea").value="";        							

        							$("#hello3").click(function() {
  										$("#comment3").remove();
  										$("#name3").remove();
  										
  										$("#hello3").remove();
  										i--;
  										
									});
									break;

        				}//Switch case complted
        				
        				i++;
						
        		}
        		else{
        			alert("Not a valid e-mail address");
        		}
      	}
      	else{
      		alert("Enter the proper data");
      	}
      }
      else{
      		alert("thanks for choosing");
      }

}

