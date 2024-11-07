"use strict";
{
    //2-8: Asynchronous typescript
    //promise
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "programmer is brilliant";
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    const showData = () => {
        const result = createPromise();
        console.log(result);
    };
    showData();
}
