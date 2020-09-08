let names = ["Yaakov","John", "Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
function person(){
    for(let name of names){
        if(name[0] !== ("J"||"j")){
            console.log("Hello",name);
        }
        if(name[0] === ("J"||"j")){
            console.log("Good Bye",name);
        }
    }
}



person();
