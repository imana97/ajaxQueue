ajaxQueue
=========

Ajax Queue is a queuing tool for handling ordered and step by step asynchronous communication.   

How to use
==========



var demo=new AjaxQueue();
   demo.next(function(callback){
       $.getJSON('/echo/json/',function(data){
       
          // here will run the next function in the queue
          callback();
       });
    });
    
    // another function to the queue
    demo.next(function(callback){
       $.getJSON('/echo/json/',function(data){
       
          // here will run the next function in the queue
          callback();
       });
    })
    
    // and another function !!!
    .next(function(callback){
          
          // your code here
          
          //when you want to call the next function in the queue add callback();
          callback();
       });
    });
   
   
   // NOW EXECUTE THE FUNCTIONS IN THE QUEUE IN ORDER WITH ".run()"
   
   demo.run();
   
   
   
   
