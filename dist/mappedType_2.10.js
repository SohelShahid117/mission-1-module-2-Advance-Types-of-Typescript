"use strict";
{
    //2-10: Mapped types
    const arrayOfNumbers = [1, 2, 5, 6, 7];
    // const arrayOfStrings : string[]=["1","2","5","6","7"];
    const arrayOfStrings = arrayOfNumbers.map(nmbr => nmbr.toString());
    console.log(arrayOfStrings);
    const area1 = {
        length: "5",
        width: 22
    };
}
