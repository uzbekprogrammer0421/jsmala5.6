// 1-task 


// function getTruthyFalsy(params) {
//     let array = [...params]
//     let new_arr_2 = []
//     let obj = {}
//     let new_arr = array.filter((item) => item === 0 || item === false || item === '' || item === "" || item === null || item === NaN)
//     for (let i = 0; i < array.length; i++) {
//         if (!new_arr.includes(array[i])) {
//             new_arr_2.push(array[i])
//         }
        
//     }
//     if (new_arr_2.length > 0) {
//         obj.truthy = new_arr_2
//     }
//     else {
//         obj.truthy = "truthy mavjud emas"  
//     }
//     if (new_arr.length > 0) {
//         obj.false = new_arr
//     }
//     else {
//         obj.false = "false mavjud emas"  
//     }
//     return obj
// }
// console.log(getTruthyFalsy([1,2,3,false, "", null, 0]));


// 2-task 


// let arr_1 = [1,2,3,4,6]
// let arr_2 = [1,2,3,4,6,5]
// Array.prototype.sumArray = function () {
//     let result = this.reduce((a,b)=> a+b,0)
//     return result
// }
// console.log(arr_1.sumArray());


// 3-task 


// String.prototype.countVowelsHalves = function() {
//     let vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
//     let count = 0;
//     let str = this
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// let input = "asilbek"
// console.log(input.countVowelsHalves())



// 4-task 


// String.prototype.get_length = function(){
//     return this.length
// }
// let input = "asilbek"
// console.log(input.get_length());



// 5-task 


// let input = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// let new_arr = [];
// for (let i = 0; i < input.length; i++) {
//     for (let g = 0; g < input[i].length; g++) {
//         new_arr.push(input[i][g]);
//     }
// }
// let word = "ABCED";
// let array = word.split("");
// let count = 0;
// let result = [];
// for (let i = 0; i < array.length; i++) {
//     if (new_arr.includes(array[i])) {
//         result.push(array[i]);
//     }
// }
// if (result.join("") == word) {
//     console.log(result.join(""),"  bunday so'z mavjud");
// } else {
//     console.log(word, "  Bunday so'z  ", new_arr, "  ichida mavjud emas");
// }


// 6-task 


// function cutting(head,val) {
//     let result = []
//     for (let i = 0; i < head.length; i++) {
//         if (head[i] != val) {
//             result.push(head[i])
//         }
//     }
//     console.log(result);
// }
// cutting([1,2,6,3,4,5,6],6)


// 7-task 

 
// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
//     return matrix;
// }

// const matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// const rotatedMatrix1 = rotateMatrix(matrix1);
// console.log(rotatedMatrix1);

// const matrix2 = [[1,2,3],[4,5,6],[7,8,9]];
// const rotatedMatrix2 = rotateMatrix(matrix2);
// console.log(rotatedMatrix2);


// // 8-task 



// let array_1 = [1,null,3]
// let array_2 = [1,null,3]
// let result = "false"
// let count = 0
// if (array_1.length == array_2.length) {
//     for (let i = 0; i < array_1.length; i++) {
//         if (array_1[i] === array_2 [i]) {
//             count ++
//         }        
//     }
//     if (array_1.length === count) {
//         result = "true"
//     }
// }
// console.log(result);


