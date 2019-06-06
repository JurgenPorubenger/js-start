// var arr = [1, 2, 3, -1, -2, -3];

// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// var newArr = [];
// for (var i = 0; i <= arr.length; i++) {
// 	if (isPositive(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);

//===================

// let arr = [1,5,8,-12,-7,-1];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         arr2.push(arr[i]);
//         console.log(arr2);
//     } 
// }
// function isNumberInRange(num) {
//     if (num>0&&num<10) {
//         return true;
//     } else {
//         return false;
//     }
// }

function getDigitsSum (digit) {
   
    if (digit>9) {
        let gagga = digit+"";
        let ahah = [];
        let spl = gagga.split('');
        
        for (let i = 0; i<spl.length; i++) {
            
            ahah.push(spl[i]);
            for (let i = 0; i<ahah.length; i++) {
                sum *= ahah[i];
                console.log(ahah[i])
                
            }
            }
            // console.log(sum);
        }
        
}
getDigitsSum(24);
