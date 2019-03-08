

sum = function (){

    var value=0;
    
    for(var i=0;i<arguments.length;i++){
        if(typeof(arguments[i])  == 'number'){
            value=value+arguments[i];
        
    
        }
                
    }
    return value;
}

