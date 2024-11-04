{
  //2-1: Type assertion / type narrowing
  /*
    tomi ki amar cheye beshi bojo?
    typescript er cheye ami type beshi bojle setai hobe-type asserion
    */
  let anything: any;
  anything = "i love typescript";
  //    (anything as string).

  anything = 444;
  // (anything as number).toFixed

  const kgToGram = (value: string | number):string | number | undefined => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value);
    //   return  convertedValue * 1000;
      return `converted value is ${ convertedValue * 1000}`;
    }
    if (typeof value === "number") {
    //   return value * 1000;
      return `converted value is ${value * 1000}`;
    }
  };

  const result1 = kgToGram(5) as number;
  const result2 = kgToGram("5") as string;
//   const result1 = kgToGram(5) as number;
console.log(result1)
console.log(result2)


type CustomErr = {
    message : string;
}
try{

}
catch(error){
    console.log(error)
    console.log(error.message)
    console.log((error as CustomErr).message)
}






}
