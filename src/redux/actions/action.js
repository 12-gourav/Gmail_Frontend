import axios from "axios";


export const check = async ()=>{
    try {
        return await axios.get("http://localhost:5000/");
    } catch (error) {
        console.log(error);        
    }
}


export const register = async (name,age,gender,dob,account,password,type,bio,image,city,country,phone,website,address)=>{
    try {
        return await axios.post("http://localhost:5000/api/v1/register",{name,age,gender,dob,account,password,type,bio,image,city,country,phone,website,address})
        
    } catch (error) {
        console.log(error);       
    }
}
export const login = async (email,password)=>{
    try {
        return await axios.post("http://localhost:5000/api/v1/login",{email,password},{ headers: {
            'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
          }})
        
    } catch (error) {
        console.log(error);       
    }
}

export const logout = async()=>{
    try {
        return await axios.post("http://localhost:5000/api/v1/logout",{headers:{
            authtoken:authtoken
        }})
        
    } catch (error) {
        console.log(error);       
    }
}




export const getInfo = async (authtoken)=>{
    try {
        return await axios.get("http://localhost:5000/api/v1/getInfo",{headers:{
            authtoken:authtoken
        }})
        
    } catch (error) {
        console.log(error);       
    }
}


////// messages


export const send = async(sender,senderImage,reciver,date,subject,message,image,authtoken)=>{
    try {
      
return await axios.post("http://localhost:5000/api/v1/send",{
    sender,senderImage,reciver,date,subject,message,image
},{headers:{authtoken}})

    } catch (error) {
        console.log(error);
    }
}

export const getMessage = async(authtoken)=>{
    try {
        
return await axios.post("http://localhost:5000/api/v1/getMessage",{
   
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}
export const getMessage2 = async(authtoken)=>{
    try {
        
return await axios.post("http://localhost:5000/api/v1/getMessage2",{
   
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}

export const createTemplate = async(title,message,authtoken)=>{
    try {
        
return await axios.post("http://localhost:5000/api/v1/template-create",{
   title,message
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}
export const displayTemplate = async(authtoken)=>{
    try {
      
return await axios.post("http://localhost:5000/api/v1/template-display",{
   
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}
export const deleteTemplate = async(id,authtoken)=>{
    try {
        
return await axios.post("http://localhost:5000/api/v1/template-delete",{
   id
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}


export const deleteMessage = async(id,authtoken)=>{
    try {
        
return await axios.delete("http://localhost:5000/api/v1/removemsg",{
   id
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}

////searching friends

export const searchFriend = async(name,authtoken)=>{
    try {
        
return await axios.post("http://localhost:5000/api/v1/search",{
   name
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}


export const displayMedia = async(sender,authtoken)=>{
    try {
      
return await axios.post("http://localhost:5000/api/v1/media",{
   sender
},{headers:{authtoken:authtoken}})

    } catch (error) {
        console.log(error);
    }
}