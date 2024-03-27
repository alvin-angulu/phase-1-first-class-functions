function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const add = (x,y) => x+y;
    return add;

    
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello World!")
    };
   
}