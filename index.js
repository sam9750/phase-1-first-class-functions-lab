const returnFirstTwoDrivers = function(arr){ 
    console.log(arr);
    return arr.slice (0,2)}



const returnLastTwoDrivers = function(arr) {
    return arr.slice (2,4)}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const one = function(newArr) {
//     const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//     return newArr

// }

// function add (x,y) {
//     return x + y;

// }

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fareMultiplier * fare

    }
}
   
   
   
//     function createFareMultiplier() {
//         const fareMultiplier = Math.random()
//         return function(fare) {
//             return fareMultiplier * fare
    
//         }
    
//     
    
// }
const fareDoubler = function(fare) {
    return fare * 2 

}
const fareTripler = function(fare) {
    return fare * 3
}





function selectDifferentDrivers(arrayOfDrivers, firstTwoOrLastTwo) {
    return firstTwoOrLastTwo(arrayOfDrivers);
}
   
//  const myArrayOfDrivers = []
//  const returnFirstTwoDrivers = function(arr){ 
//     console.log(arr);
//     return arr.slice (0,2)}

// selectDifferentDrivers(myArrayOfDrivers, returnFirstTwoDrivers) 


//  firstTwoOrLastTwo(returnFirstTwoDrivers(), returnLastTwoDrivers());
  
// }