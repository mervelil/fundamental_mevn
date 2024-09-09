var userService=require('./userService');

 var getDataControllerfn=async (req,res)=>{
     var empolyee=await userService.getDataFromDBService();
    res.send({"status":true,"data":empolyee});
 }
// module.exports.createUserControllerFn = async (req, res) => {
//     try {
//         const userDetails = req.body; // Expecting { name, address, phone }
//         if (!userDetails.name || !userDetails.address || !userDetails.phone) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const result = await userService.createUserDBService(userDetails);
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
 var createUserControllerFn=async (req,res)=>{
  
     var status=await userService.createUserDBService(req.body);


     if(status) {
        res.send({"status":true,"message":"User created successfully"});

     }else{
        res.send({"status":false,"message":"Failed to create user"});
    }
}

// var findOneUserController=async(req,res)=> {
//     console.log(req.body);
//     var result=await userService.findOneUserDBService(req.query);
// }

var updateUserController=async (req,res) => {
    console.log(req.params.id);
    console.log(req.body);

    var result=await userService.updateUserDBService(req.params.id,req.body);

    if (result){
        res.send({"status":true,"message":"User updated successfully"});
    }else{
        res.send({"status":false,"message":"Failed to update user"});
    }
}

var deleteUserController=async (req,res) =>{
    console.log(req.params.id);
    var result=await userService.removeUserDBService(req.params.id);
    if (result){
        res.send({"status":true,"message":"User deleted"});
    }else{
        res.send({"status":false,"message":"Failed to deleted user"});
    }
}

module.exports={getDataControllerfn,createUserControllerFn,updateUserController,deleteUserController};
