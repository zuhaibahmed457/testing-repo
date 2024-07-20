
// counter = 4
// i = 0
// j = 0

// arr1 = [2,3,5,4,1]
// arr2 = [7,4,0,2]

// for(i = 0; i < arr1.length; i++){
//     for(j = 0; j < arr2.length; j++){
//         console.log("arr1", arr1[i], "arr2", arr2[j])
//         counter++
//         ++counter
//     }
// }

// console.log("Counter", counter, i , j)

// // 1 loop 1 iteration
// // 2 loop 1 iteration
// // arr1 = 2, arr2 = 7 , counter = 5
// // 2 loop 2 iteration
// // arr1 = 2, arr2 = 4, counter = 7 
// // 2 loop 3 iteration
// // arr1 = 2, arr2 = 0, counter = 9
// // 2 loop 4 iteration
// // arr1 = 2, arr2 = 2, counter = 11

// // 1 loop 2 iteration
// // 2 loop all iteration complete;

// // ...

// Reverse Integer Array
// arrNum = [5,4,3,2,1]
// for (i = 0; i < arrNum.length; i++){
//     // arr[0] = arr(5 - 1) => arr[4] = 1
//     // arr[1] = arr(5 - 2) => arr[3] = 2
//     // arr[2] = arr(5 - 3) => arr[2] = 3
//     // arr[3] = arr(5 - 4) => arr[1] = 4
//     // arr[4] = arr(5 - 5) => arr[0] = 5
//     // Wrong Approach
//     // arrNum[i] = arrNum[arrNum.length - (i + 1)] 

// }

// console.log(arrNum)

// Find Highest Number in the arr 
// ar = [1, 5, 7, 3]

// with array.sort()    
// ar.sort()

// without array.sort()
// function Numeric_sort() { 
//     let i = 0, j; 
//     while (i < ar.length) { 
//         j = i + 1; 
//         while (j < ar.length) { 

//             if (ar[j] < ar[i]) { 
//                 let temp = ar[i]; 
//                 ar[i] = ar[j]; 
//                 ar[j] = temp; 
//             } 
//             j++; 
//         } 
//         i++; 
//     } 
// } 

// Numeric_sort();

// let highestNum = ar[ar.length - 3]
// console.log("🚀 ~ highestNum:", highestNum)

// Find Missing Number from sequence and sum them
// ar = [1, 2, 3, 4, 6, 7, 8, 9, 10]
// sum = 0
// arMissing = undefined

// for (i = 0; i <= ar.length; i++) {
//     if (ar[i] == i + 1) {
//         sum += ar[i]
//     } else {
//         arMissing = i
//         sum += ++arMissing
//     }
// }

// console.log(sum, arMissing)


// ---------------------------------------------------------

let fps = 6
let frameLength = fps * 16

const getCorrectString = (index, fps) => {
    var result = "."
    // let framesPerSecond = 30; // 30 frames per second
    // let frameInSecond = (index % fps) * (framesPerSecond / fps);
    if (index % (fps < 2 ? (fps+1) : fps  ) === 0) {
        result = index / fps
    } else if (fps >= 4 && index % 2 === 0 ) {
        result = `${(index % fps) * (30 / fps)}f`
        // result = `${frameInSecond}f`;
    } 

    return result
}

for (let i = 0; i <= frameLength; i++ ){
    console.log( getCorrectString(i, fps),"---" ,i)
}
