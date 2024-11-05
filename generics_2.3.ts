{
    //2-3: Introduction to generics
    
    //generics type

    // const idNumber : number[] = [117,118,119];

    // type GenericArray = Array<number>
    // type GenericArray = Array<string>
    // type GenericArray<param> = Array<param>
    // type GenericArray<Typpp> = Array<Typpp>
    
    type GenericArray<T> = Array<T>
    
    // const idNumber : Array<number> = [117,118,119];
    // const idNumber : GenericArray = [117,118,119];
    
    const idNumber : GenericArray<number> = [117,118,119];

    // const mentors : Array<string> = ["sohel","shahid","aadil"];
    // const mentors : GenericArray= ["sohel","shahid","aadil"];

    const mentors : GenericArray<string>= ["sohel","shahid","aadil"];
    
    // const boolArray : Array<boolean> = [true,false,true]
    const boolArray : GenericArray<boolean> = [true,false,true]
    
    // const user :GenericArray<object> = [
    // const user :GenericArray<{name:string,age:number,role:string}> = [
    const user :GenericArray<{name:string,age:number}> = [
        {
            name:"sohel",
            age:33
        },
        {
            name:"shahid",
            // age:"34"
            age:34
        },
        // {
        //     role:"manager"
        // }
    ]
    
    const add = (x:number,y:number):number => x+y;
    add(4,5);


    //generic tuple
    const family:string[] =["Sohel","Sumi"] 

    // const family2 : [string,string]=["shahid","farzana"]

    type GenericTuple<x,y>=[x,y]
    // const family2 : [string,string]=["shahid","farzana"]
    const family2 : GenericTuple<string,string>=["shahid","farzana"]

    const userWithId :GenericTuple<number,{name:string,email:string}>=[1234,{name:"shahid",email:"sohel@gmail.com"}]





}