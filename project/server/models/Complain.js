const mongoose=require("mongoose")

const ComplainSchema=new mongoose.Schema({
    username:{
        type:String,
        required :true,
        unique:true
    },
    designation:{
        type:String,
        required :true,
        unique:true
    },
    phone:{
        type:String,
        required :true,
        unique:true
    },
    email:{
        type:String,
        required :true,
        unique:true
    },
    state:{
        type:String,
        required :true,
        unique:true
    },
    distict:{
        type:String,
        required :true,
        unique:true
    },
    address:{
        type:String,
        required :true,
        unique:true
    },
    org_name:{
        type:String,
        required :true,
        unique:true
    },
    org_mail:{
        type:String,
        required :true,
        unique:true
    },
    org_head:{
        type:String,
        required :true,
        unique:true
    },
    org_address:{
        type:String,
        required :true,
        unique:true
    },
    accused_name:{
        type:String,
        required :true,
        unique:true
    },
    accused_designation:{
        type:String,
        required :true,
        unique:true
    },
    accused_head:{
        type:String,
        required :true,
        unique:true
    },
    rel:{
        type:String,
        required :true,
        unique:true
    },
    decription:{
        type:String,
        required :true,
        unique:true
    },

},
{timestamps:true}
);
module.exports=mongoose.model("Complain",ComplainSchema)
