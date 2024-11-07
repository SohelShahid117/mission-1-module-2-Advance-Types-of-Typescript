{

    //2-8: Asynchronous typescript
    //promise

    // const createPromise = () : Promise<string> =>{
    const createPromise = () : Promise<boolean> =>{
        // return new Promise<string>((resolve,reject)=>{
        return new Promise<boolean>((resolve,reject)=>{
            // const data:string = "enjoy programming";
            // const data:string = "";
            // const data = null;
            const data:boolean = true;
            if(data){
                resolve(data);
            }
            else{
                reject("failed to load data");
            }
        })
    }

    // const showData =async():Promise<string>=>{
    const showData =async():Promise<boolean>=>{
        // const result:string = await createPromise();
        const result:boolean = await createPromise();
        return result;
        // console.log(result);
    }
    showData();

    type Todo = {
        userId:number;
        id:number;
        title:string;
        completed:boolean;
    }
    
    //https://jsonplaceholder.typicode.com/
    // const getTodo =async()=>{
    const getTodo =async():Promise<Todo>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = response.json()
        const data = await response.json()
        console.log("data is",data)
        return data;
    }
    getTodo();




}