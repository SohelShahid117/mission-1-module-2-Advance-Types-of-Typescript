"use strict";
{
    //2-1: Type assertion / type narrowing
    /*
      tomi ki amar cheye beshi bojo?
      typescript er cheye ami type beshi bojle setai hobe-type asserion
      */
    let anything;
    anything = "i love typescript";
    //    (anything as string).
    anything = 444;
    // (anything as number).toFixed
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            //   return  convertedValue * 1000;
            return `converted value is ${convertedValue * 1000}`;
        }
        if (typeof value === "number") {
            //   return value * 1000;
            return `converted value is ${value * 1000}`;
        }
    };
    const result1 = kgToGram(5);
    const result2 = kgToGram("5");
    //   const result1 = kgToGram(5) as number;
    console.log(result1);
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error);
        // console.log(error.message)
        console.log(error.message);
    }
}
