{
    //2-5 Function with generics

    const createArray = (param:string):string[]=>{
        return [param];
    }
    const result1 = createArray("bangladesh");

    const createArrayWithGeneric = <T>(param:T):T[]=>{
        return [param];
    }

    const result2 = createArrayWithGeneric<string>("pakistan");

    type User = {
        name:string;
        age:number
    }
    const result3 = createArrayWithGeneric<User>({name:"sohel",age:35});

    const createArrayWithTuple = <T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2];
    }
    const result4 =createArrayWithTuple<string,{mohadesh:string}>("Bangladesh",{mohadesh:"Asia"})

    const addCourseToStd=<T>(student:T)=>{
        const course = "Next Level Web Developer";
        return{
            ...student,
            course,
        }
    }

    const std1 = addCourseToStd({name:"sohel",email:"sohel@gmail.com",developerType:"backend Developer"})
    const std2 = addCourseToStd({name:"shahid",email:"shahid@gmail.com",laptopBrand:"apple"})



}