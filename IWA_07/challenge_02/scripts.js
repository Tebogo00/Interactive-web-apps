const nickname= "Timmy";
const firstname = "Timothy";
const nickNameOrFirst = nickname || firstname

 if (nickNameOrFirst == undefined){
    console.log('Good Morning')
 }else{
    console.log(`Good Morning, ${nickNameOrFirst}!`)
 }