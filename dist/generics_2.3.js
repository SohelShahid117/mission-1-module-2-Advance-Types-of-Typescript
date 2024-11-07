"use strict";
{
    // const idNumber : Array<number> = [117,118,119];
    // const idNumber : GenericArray = [117,118,119];
    const idNumber = [117, 118, 119];
    // const mentors : Array<string> = ["sohel","shahid","aadil"];
    // const mentors : GenericArray= ["sohel","shahid","aadil"];
    const mentors = ["sohel", "shahid", "aadil"];
    // const boolArray : Array<boolean> = [true,false,true]
    const boolArray = [true, false, true];
    // const user :GenericArray<object> = [
    // const user :GenericArray<{name:string,age:number,role:string}> = [
    const user = [
        {
            name: "sohel",
            age: 33
        },
        {
            name: "shahid",
            // age:"34"
            age: 34
        },
        // {
        //     role:"manager"
        // }
    ];
    const add = (x, y) => x + y;
    add(4, 5);
    //generic tuple
    const family = ["Sohel", "Sumi"];
    // const family2 : [string,string]=["shahid","farzana"]
    const family2 = ["shahid", "farzana"];
    const userWithId = [1234, { name: "shahid", email: "sohel@gmail.com" }];
}
