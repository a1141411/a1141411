var obj={
    hi:function(){
    console.log(this); 
    return()=>{
    console.log(this);
    }
},
sayHi:function(){
    return function(){
        console.log(this); 
        return ()=>{
            console.log(this);
        }
    }
},
say:()=>{
    console.log(this);
    }
}
let sayHi =obj.sayHi(); 
let fun1=sayHi();
 fun1(); 
 let fun2=sayHi.bind(obj)();
 fun2(); 
 