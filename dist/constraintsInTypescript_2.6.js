"use strict";
{
    //2-6: Constraints in typescript
    const addCourseToStd = (std) => {
        //akhane extends use korar mane holo j property golo ami mention korechi segolo must dite hobe--->force kora--->constraint kora
        // const addCourseToStd =<T> (std:T)=>{
        const course = "backend developer";
        return Object.assign(Object.assign({}, std), { course });
    };
    const std1 = addCourseToStd({ id: 117, name: "shahid", email: "shahid@gmail.com" });
    // const std2 = addCourseToStd({jemon:"kushi temon bosao.extend add kore dile dora khaba"})
}
