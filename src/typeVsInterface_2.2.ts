{
    //2-2: Interface, type vs interface

    //typescrit e alias er cousin holo interface

    type User1 = {
        name:string;
        age:number
    }

    type UserWithRule1 = User1 & {rule:string}

    const user1:UserWithRule1 = {
        name:"sohel",
        age:35,
        rule:"manager"
    }



    interface User2  {
        name:string;
        age:number
    }

    interface UserWithRule2 extends User2 {rule:string}


    // const user1:User1 = {
    //     name:"sohel",
    //     age:35
    // }
    
    // const user2:User2 = {
    //     name:"sumi",
    //     age:33
    // }

    /*
    in JS object is object
    array is one type of object
    function is also a type of object
    */

    type Rool = number [];
    const roolNumber : Rool = [1,2,3,5];
                             //0,1,2,3--->in array index is number type

    interface Rool2 {
        [index:number] : number
    }
    

    type Add = (num1:number,num2:number)=>number;

    interface Add2 { (num1:number,num2:number):number};

    // const add=(num1:number,num2:number):number=>num1+num2;
    
    const add:Add=(num1,num2)=>num1+num2;
    const add2:Add2=(num1,num2)=>num1+num2;




}