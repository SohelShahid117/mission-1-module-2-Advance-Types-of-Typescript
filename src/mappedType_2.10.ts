{
    //2-10: Mapped types

    const arrayOfNumbers : number[]=[1,2,5,6,7];
    // const arrayOfStrings : string[]=["1","2","5","6","7"];
    const arrayOfStrings : string[]=arrayOfNumbers.map(nmbr=>nmbr.toString())
    console.log(arrayOfStrings);

    type AreaNumber = {
        length:number;
        width:number;
    }
    // type AreaString = {
    //     length:string;
    //     width:string;
    // }

    type AreaString<T> = {
        // [key in "length" | "width"]:string;
        // [key in "length" | "width" | "height"]:string;
        // [key in keyof(AreaNumber)]:string;
        // [key in keyof(T)]:string;
        [key in keyof(T)]:T[key];
        // [key in keyof(AreaNumber)]:boolean;
    }

    type Length = AreaNumber["length"]

    const area1:AreaString<{length:string,width:number}>={
        length:"5",
        width:22
    }



}