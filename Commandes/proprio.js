const {BANKAI}=require("../framework/BANKAI")







zokou({nomCom:"reboot",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for *BANKAI_MD* head captain only");
  }

  const {exec}=require("child_process")

    repondre("*restarting ...*");

  exec("pm2 restart all");
  

  



})
