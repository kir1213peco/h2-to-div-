$(document).ready(function(){
//anonymous function
   $("div").click(function(){
      $(this).css("color","purple");    
   
   });
   $("div").mousedown(function(){
      $(this).css("background-color","pink");    
   
   });

   $("hdiv").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("div").mouseenter(function(){
      $(this).css("color","green");    
   
   });

   $("hdiv").mouseleave(function(){
      $(this).css("color","red");
          
   
   });

 $("#stop").click(function(){   
      $("*").unbind("mouseleave");    
   
   });




});
