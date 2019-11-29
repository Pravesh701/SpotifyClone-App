// import { resolve } from "dns";
// import { rejects } from "assert";

// Array.prototype.myMap = function(callBack){
//     var tempArray=[];
//     for(i = 0; i< this.length; i++){
//         tempArray.push(callBack(this[i], i, this))
//     }
//     return tempArray;
//  }

//  var obj = [1,2,3,4,5]

//  var map1= obj.myMap(x => x * 2)
//  console.log(map1)

// function handlePromise(callBack) {
//   console.log("before promise");
//   let promis = new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       console.log("I am in promise");
//       resolve("In promise");
//     }, 3000);
//   })
//   //console.log(promis);

//   console.log("out of promise");
//   promis.then(Response =>{
//       callBack 
//       console.log(Response)
//   })
// }
// console.log(handlePromise());

// const handlePromise = async() => {
//     console.log("before promise");
//     let promis = await new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         console.log("I am in promise");
//         resolve("In resolve");
//       }, 3000);
//     })
//     return promis
// }
// handlePromise().then(res=>console.log(res))



  // let a = handlePromise
  // a.then(Response=>{
  //     console.log(Response)
  // })
  // console.log(a);


   //  cmd+k+j


