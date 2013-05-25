var AjaxQueue = function() { 
    // copy this to self 
    var self = this; 
    //initiating an empty queue 
    self.queue = []; 
    //initiating an empty object for to keep the last json data fetched by ajax 
    self.lastData = null; 
 
    // this methods add a function to the queue 
    self.next = function(func) { 
        //inserting the function as value to the queue 
        self.queue.push(func); 
        //returning this to enable chaining 
        return self; 
    }; 
    // this methods run the next function in the queue 
    self.callback = function() { 
        // removing the first function in the queue. because it is already executed 
        self.queue.shift(); 
        // if there are still more function to execute, execute the first function. 
        //this is recursive function 
        if (self.queue.length > 0) { 
            _runArray(self.queue[0]); 
        } 
    } 
    // this function turns a function to string and identifies its parameters dynamically 
    var _getParamNames = function(func) { 
        var funStr = func.toString(); 
        var arr = funStr.slice(funStr.indexOf('(') + 1, funStr.indexOf(')')).match(/([^s,]+)/g); 
        // return true if the function has no parameter 
        return (arr == null); 
    } 
    // this function execute a function in and pass self.callback as its parameter. 
    // this one is a bit complex. need a lot of thinking :) 
    var _runArray = function(func) { 
        //if has no callback parameter, then it is a plugin. 
        //if there is callback parameter, then it is manually writting after object creating. 
        _getParamNames(func) ? func() : func(self.callback); 
    } 
    // this method run the queuse from 0..N 
    self.run = function() { 
        if (self.queue.length > 0) { 
            _runArray(self.queue[0]); 
        } 
    }; 
}; 
