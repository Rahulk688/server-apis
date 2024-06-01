const usermodel = require('../model/user.modal');
const jwt = require("jsonwebtoken");

class UserService{
   static async registerUser(number,name,gender,img,
    cnic,pass,address,age,cat,deviceid,fathername,experience,pvcname,pvcnumber,pvcdoc,servantcat){
        try{
            const creteuser = new usermodel({number,name,gender,img,cnic,pass,address,
                age,cat,deviceid,fathername,experience,pvcname,pvcnumber,pvcdoc,servantcat});
            return await creteuser.save();
        } catch(e){
            console.log(e)
            res.json({status:false,sucess:"server error service register"});
        }
   }

   static async checkuser(number){
    try{
        return await usermodel.findOne({number});
    } catch(e){
        console.log(e)
            res.json({status:false,sucess:"server error service chcekuser"});
    }
   }

   static async findservant(cat,servantcat){
    try{
        return await usermodel.find({cat,servantcat});
    } catch(e){
        console.log(e)
            res.json({status:false,sucess:"server error service chcekuser"});
    }
   }

   static async updatedevice(userId,deviceid){
    try{
        await usermodel.findByIdAndUpdate(userId, { $set: { deviceid: deviceid } });
    } catch(e){
        console.log(e)
            res.json({status:false,sucess:"server error service chcekuser"});
    }
   }

   static async generateToken(tokenData,secretKey,jwt_expiry){
    return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expiry});
   }

}

module.exports = UserService;