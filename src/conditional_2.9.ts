{

    //2-9: Conditional types
    //akti type r 1t type er upor depend korle take bolbe conditional type

    // type a = null;
    type a = number;
    // type b = undefined;
    type b = string;

    type x = a extends null ? true : false;
    // console.log(x)

    type y = a extends null ? true : b extends undefined ? undefined : any;

    type PoisaWala = {
        bike : string;
        car : string;
        ship : string;
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true:false;
    type CheckVehicle<T> = T extends keyof(PoisaWala) ? true:false;
    type HasBike = CheckVehicle<"bike">;
    type HasPlain = CheckVehicle<"plain">;




}