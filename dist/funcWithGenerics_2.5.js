"use strict";
{
    //2-5 Function with generics
    const createArray = (param) => {
        return [param];
    };
    const result1 = createArray("bangladesh");
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result2 = createArrayWithGeneric("pakistan");
    const result3 = createArrayWithGeneric({ name: "sohel", age: 35 });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result4 = createArrayWithTuple("Bangladesh", { mohadesh: "Asia" });
    const addCourseToStd = (student) => {
        const course = "Next Level Web Developer";
        return Object.assign(Object.assign({}, student), { course });
    };
    const std1 = addCourseToStd({ name: "sohel", email: "sohel@gmail.com", developerType: "backend Developer" });
    const std2 = addCourseToStd({ name: "shahid", email: "shahid@gmail.com", laptopBrand: "apple" });
}
