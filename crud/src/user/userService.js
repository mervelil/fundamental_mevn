
var userModel=require('./userModel'); 
// module.exports.getDataFromDBService = () => {
//     return userModel.find({}).exec()
//         .then(result => result)
//         .catch(error => {
//             throw new Error('Error fetching data from DB: ' + error.message);
//         });
// }

// Function to create a new user in the database

 module.exports.getDataFromDBService=()=>{

    return new Promise(function checkURL(resolve,reject){
         userModel.find({},function returnData(error,result) {
             if (error) {
                 reject(false);
             }else {
                 resolve(result);
             }
            
         });
     });

    
 }

 module.exports.createUserDBService=(userDetails)=>{

    return new Promise(function myFn(resolve,reject){
         var userModelData=new userModel({});
         userModelData.name=userDetails.name;
         userModelData.address=userDetails.address;
        userModelData.phone=userDetails.phone;     
       userModelData.save(function resultHandle(error,result) {
             if (error) {
                 reject(false);
             } else {
                 resolve(result);
            }
            
        });
     });
 
 }
 module.exports.updateUserDBService=(id,userDetails)=>{
    console.log(userDetails);
    return new Promise(function myFn(resolve,reject){
         userModel.findByIdAndUpdate(id,userDetails,{new:true},function returnData(error,result) {
             if (error) {
                 reject(false);
             } else {
                 resolve(result);
             }
            
        });
     });
 }
 module.exports.removeUserDBService=(id)=>{
    
    return new Promise(function myFn(resolve,reject){
         userModel.findOneAndDelete(id,function returnData(error,result) {
             if (error) {
                 reject(false);
             } else {
                 resolve(result);
             }
            
        });
     });
 }