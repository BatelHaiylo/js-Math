// function printRandomNumber(){
//     var rndNum = Math.floor(Math.random()*10+1);
//     console.log(rndNum)
// }


// function getRandomNumRaange (){
//     return Math.floor(Math.random()*11)
// }

// function getRandomNum (num){
//     return Math.floor(Math.random()*(num+1))
// }

// function getRandomNumRaangeFromUser (){
//     var num =parseInt(prompt("please enter a number:"))
//     var rndNum = Math.floor(Math.random()*11)

//     if(num == rndNum){
//         console.log(rndNum + "succses");
//     }
//     else{
//         console.log( rndNum + "fail");
//     }
// }
// getRandomNumRaangeFromUser()

// function OccupancyArray (){
//     var arr = []

//     for(i=0; arr.length<=10; i++){
//         arr.push(Math.floor(Math.random()*101))
//     }
// }

// function getMaxNum(){
//     var numInput = parseInt(prompt())
//     var rndNum = Math.floor(Math.random()*11)

//     return Math.max(numInput,rndNum);
// }

// function getMinNum (){
//     var i = 0
//     var minNum = 0

//     while(i<5){
//         var userNum = parseInt(prompt())
//         minNum = Math.min(minNum, userNum)
        
//         i++
//     }
//     console.log(minNum)
// }

// function findOutIfRndomNumIsEven(){
//     var userNum = parseInt(prompt())
//     var rndNum = Math.floor(Math.random()*101) 

//     if(userNum % 2 == 0){
//         return Math.min(userNum, rndNum);
//     }
//     else{
//         return Math.max(userNum, rndNum);
//     }
// }

// function randomArrayLengthAndInters (){
//     var arr = []
//     arr.length = Math.floor(Math.random()*365)

//     for(i=0; i<Math.floor(Math.random()*365); i++){
//         arr.pop(Math.floor(Math.random()*874))
//     }
// }

// function getRandomOrgainFromArry (arr){
//     var i = Math.floor(Math.random()*(arr.length))

//     console.log(arr[i]);
// }

function replaceRandomChar(){
    var userName = prompt()
    var i = Math.floor(Math.random()*userName.length)
    var changed = userName.charAt(i).toUpperCase()+ userName.slice(1)
    return changed;
}
function replaceRandomChar2(){
    var userName = prompt()
    var i = Math.floor(Math.random()*userName.length)
    var changed = userName.replace(userName.charAt(i),userName[i].toUpperCase())
    return changed;
}

// function checkSimilerCharsInStrings (){
    // var i = 0
    // var names = []
    // var ages = []

    // while(i<2){
        
    //     var name = prompt()
    //     names.pop(name)
    //     var age = prompt()
    //     ages.pop(name)

    //     i++
    // }
//     var name1 =prompt() 
//     var name2 =prompt() 
//     var age1 = parseInt(prompt()) 
//     var age2 = parseInt(prompt())

//     var rndNum = Math.floor(Math.random())

//     if(name1[0] == name2[0]){
//         console.log(rndNum)
//     } 
//     if(name1[name1.length-1] == name2[name2.length-1]){
//         console.log(name1[name1.length-1])
//     } 
//     else{
//         console.log(age1,age2)
//     }
// }

// function getRandomPartOfString (text){
//     var rndNum = Math.floor(Math.random()*6)
//     console.log(text.subString(0,rndNum))
// }

// function (){
//     var userNum = parseInt(prompt())
//     var rndNum = Math.floor(Math.random()*(userNum+1))

//     for(i=0; i<userNum; i++){
//         if(userNum%3==0){
//             console.log(userNum)
//         }
//     }
//     console.log(Math.PI*userNum)
// }
