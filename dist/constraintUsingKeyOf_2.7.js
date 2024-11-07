"use strict";
{
    // const person1 = ""; 
    // const person1:Owner = ""; 
    const person1 = "bike";
    // const getPropertyValue =<x,y extends keyof(x)> (obj:x,key:y)=>{
    //     // return obj;
    //     // return obj[key];
    //     return obj[key];
    // }
    const user = {
        name: "sohel",
        age: 35,
        email: "sohelshahid09@gmail.com",
        married: true,
        address: "ctg"
    };
    // const getPropertyValue = (obj:object,key:string)=>{
    // const getPropertyValue =<x,y> (obj:x,key:y)=>{
    // const getPropertyValue =<x,y extends "name" | "age" | "email" | "married" | "address"> (obj:x,key:y)=>{
    const getPropertyValue = (obj, key) => {
        // return obj;
        // return obj[key];
        return obj[key];
    };
    const car = {
        model: "tata",
        year: 2016
    };
    const result1 = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');
}
