{

    //2-11 Utility types

    type Person = {
        // name:string;
        email:string;
        // age:number;
        // contactNo:string;
        // address:"ctg"
        address:string
    }

    //Pick type
    // type Name = Pick<Person>
    // type Name = Pick<Person,"name">;
    // type emailContact = Pick<Person,"email" | "contactNo">;

    //Omit type

    // type contactInfo = Omit<Person,"name" | "contactNo">

    //Required Type
    // type personRequired = Required <Person>

    //partial
    // type personPartial = Partial <Person>

    //readonly
    // type pesonReadonly = readonly <Person>

    type personReadonly = Readonly<Person>
    // let person1:Person = {
    let person1:personReadonly = {
        // name:"abc",
        // age:33,
        // contactNo:"134"
        email:"a@b.c",
        address:"hhh"
    }
    // person1.email="d@e.f"

    // type MyObj = Record<string,string,number>
    type MyObj = Record<string,string>
    const obj1:MyObj={
        a:"hi",
        c:"hello",
        // b:44

    }








}