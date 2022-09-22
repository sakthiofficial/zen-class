// to compare to jason have the same property without order
var obj1 = { 
    name:"person 1",
    age : 5
}
var obj2 = {
    age:5,
    name:"person 1"
}
JSON.stringify(obj1)==JSON.stringify(obj2)

// displaying all country flag in console


var request = new XMLHttpRequest();
request. open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var res =JSON.parse(request.response);
    for(var i =0; i<res.length; i++){
        console.log(res[i].flag);
    }
    // console.log(res)
};
// displaying the countries name,region,subregion,population.
var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");


request.send();


request.onload=function(){
    
    var res=JSON.parse(request.response);
    for(var i=0; i<res.length; i++){
        console.log("coutry name:"+" "+res[i].name,"region:"+" "+res[i].region," "+"subregion:"+" "+res[i].subregion,"population:"+" "+res[i].population);
    }
    

   
};