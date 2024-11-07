{

    //2-7 Constraint using key of

    //generic constraint using keyof operator

    type Vehicle = {
        bike:string;
        car:string;
        ship:string
    }

    type Owner = "bike" | "car" | "shop";
    type Owner2 = keyof Vehicle;
    
    // const person1 = ""; 
    // const person1:Owner = ""; 
    
    const person1:Owner = "bike"; 

    // const getPropertyValue =<x,y extends keyof(x)> (obj:x,key:y)=>{
    //     // return obj;
    //     // return obj[key];
    //     return obj[key];
    // }


    const user={
        name:"sohel",
        age:35,
        email:"sohelshahid09@gmail.com",
        married:true,
        address:"ctg"
    }

    // const getPropertyValue = (obj:object,key:string)=>{
    // const getPropertyValue =<x,y> (obj:x,key:y)=>{
    // const getPropertyValue =<x,y extends "name" | "age" | "email" | "married" | "address"> (obj:x,key:y)=>{

    const getPropertyValue =<x,y extends keyof(x)> (obj:x,key:y)=>{
        // return obj;
        // return obj[key];
        return obj[key];
    }
    

    const car = {
        model:"tata",
        year:2016
    }

    const result1 = getPropertyValue(user,'name');
    const result2 = getPropertyValue(car,'model');




}