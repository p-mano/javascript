printtype= function(){

    var itemarray= [];
    var stringarray=[];
    var booleanarray=[];
    var funarray=[];
    var objarray=[];   

    for(var i=0;i<arguments.length;i++){
        if(typeof(arguments[i]) == 'number'){
            itemarray.push(arguments[i]);
        }
        else if(typeof(arguments[i]) == 'string'){
            stringarray.push(arguments[i]);
    }
      else if(typeof(arguments[i]) == 'boolean'){
        booleanarray.push(arguments[i]);
      }

   else if(typeof(arguments[i]) == 'function'){
    funarray.push(arguments[i]);
     }
   else if(typeof(arguments[i]) == 'object'){
    objarray.push(arguments[i]);
      }
    }
    console.log("string :" + stringarray.length + ":" + stringarray);
    console.log("number :" + itemarray.length + ":" + itemarray);
    console.log("boolean :" + booleanarray.length + ":" + booleanarray);
     console.log("function :" + funarray.length + ":" + funarray);
     console.log("object :" + objarray.length + ":" + objarray);
}