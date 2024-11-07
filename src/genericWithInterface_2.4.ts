{
//2-4: Generic with Interface

interface Developer <T,U=null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number
    };
    // smartWatch:string
    smartWatch:T; //age janina j type ki hobe.tai type dore nilam T.
    bike?:U 
}

interface CasioWatch {
    brand:string,
    model:string,
    price:number
};
// const poorDeveloper:Developer<string>={
// const poorDeveloper:Developer<object>={
// const poorDeveloper:Developer<{brand:string,model:string,price:number}>={
// const poorDeveloper:Developer<CasioWatch,null>={
const poorDeveloper:Developer<CasioWatch>={
    name:"shahid",
    computer:{
        brand:"hp",
        model:"234WA",
        releaseYear:2015
    },
    // smartWatch:"casio" //akane confirm holam type hobe string so T er jaigai string bosie dilam
    smartWatch:{
        brand:"casio",
        model:"C-430",
        price:7766
    }

}




}