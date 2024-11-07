"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //2-8: Asynchronous typescript
    //promise
    // const createPromise = () : Promise<string> =>{
    const createPromise = () => {
        // return new Promise<string>((resolve,reject)=>{
        return new Promise((resolve, reject) => {
            // const data:string = "enjoy programming";
            // const data:string = "";
            // const data = null;
            const data = true;
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    // const showData =async():Promise<string>=>{
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        // const result:string = await createPromise();
        const result = yield createPromise();
        return result;
        // console.log(result);
    });
    showData();
    //https://jsonplaceholder.typicode.com/
    // const getTodo =async()=>{
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        // const data = response.json()
        const data = yield response.json();
        console.log("data is", data);
        return data;
    });
    getTodo();
}
