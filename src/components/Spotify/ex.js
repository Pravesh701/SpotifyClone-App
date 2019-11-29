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

function handlePromise() {
    console.log("before promise");
    let promis = new Promise((resolve, rejects) => {
      setTimeout(() => {
        console.log("I am in promise");
        resolve("In promise");
      }, 3000);
    });
    console.log("out of promise");
  }
  console.log(handlePromise());
  
  
  