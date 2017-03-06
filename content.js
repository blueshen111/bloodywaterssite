// function Checknums(num1,num2){

//   if(num2 > num1){
//     return "true"
//   } else if (num2 === num1) {
//     return "-1"
  
//   } else if (num2 < num1) {
//     return "false"

//   }
  
  


// }
// var result = Checknums(3,3)
// console.log(result)



// function AlphabetSoup(str) { 
    
// console.log("str", str, typeof str)
//  return str.split('').sort().join('');

// }

// console.log(AlphabetSoup("shitbird"))





// console.log('======================================')


// function getlongestword(sen){
//   var longestword = ''
//   console.log(longestword.length)



//   var listofwords = sen.split(' ')

//   var arrayLength = listofwords.length;

//   for ( var i = 0; i < arrayLength; i = i + 1 ) {

//       var thisword = listofwords[i]
//       if (thisword.length > longestword.length) {

//         console.log(" this word", thisword, 'is longer than', longestword)
//         longestword = thisword

//       }


    
//   }


//   return longestword


// }

// console.log('RESULY:', getlongestword("i slayed a spring chicken"))


// ===================================

// function timeconvert(num){


// var hour = 0
// var min = 0

// // logic

// hour = Math.floor(num/60)

// min = num % 60




// return hour + ":" + min  



// }


// console.log(timeconvert(43))

// ===================================



function titleCase(str) {
     str = str.toLowerCase().split(' ');             
     for(var i = 0; i < str.length; i++){               
          str[i] = str[i].split('');                     
          str[i][0] = str[i][0].toUpperCase();         
          str[i] = str[i].join('');                      
     }
     return str.join(' ');                            
}
console.log(titleCase("i am a little man"))








