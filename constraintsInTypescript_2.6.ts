{
    //2-6: Constraints in typescript
    const addCourseToStd =<T extends {id:number;name:string;email:string}> (std:T)=>{
        //akhane extends use korar mane holo j property golo ami mention korechi segolo must dite hobe--->force kora--->constraint kora
         
    // const addCourseToStd =<T> (std:T)=>{
        const course = "backend developer";
        return{
            ...std,
            course,
        }
    }

    const std1 = addCourseToStd<{id:number;name:string;email:string}>({id:117,name:"shahid",email:"shahid@gmail.com"})

    // const std2 = addCourseToStd({jemon:"kushi temon bosao.extend add kore dile dora khaba"})




}