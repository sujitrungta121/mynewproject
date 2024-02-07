
// 'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function submitForm(formData: any,error:any,setError:React.Dispatch<React.SetStateAction<any>>) {
  

  try {
    // if (!validationStep1(formData, setError, error)) {
    //   alert("error")
    //   return { status: "error", message: "You need to complete the 1st step", data:formData};
    // }
    // if (!validationStep2(formData, setError, error)) {
    //   return { status: "error", message: "You need to complete the 2nd step" };
    // }
    if (!validationStep3(formData, setError, error)) {
      return { status: "error", message: "You need to complete the 3rd step" };
    }
    if (!validationStep4(formData, setError, error)) {
      return { status: "error", message: "You need to complete the 4th step" };
    }

 
    const join=await prisma.joinUs.create({
     
      data:{
        name:formData?.name,
        phoneNumber:formData?.phoneNumber,
        email:formData?.email,
        studentName:formData?.studentName,
        about:formData?.about,
      //   subjects: {
      //     // Assuming formData.subjects is an array of subject names
      //     create: formData.subjects.map((subjectName: string) => ({
      //       name: subjectName,
      //     }))
      //   },
      //     interest: {
      //       // Assuming formData.subjects is an array of subject names
      //       create: formData.interests.map((subjectName: string) => ({
      //         name: subjectName,
      //       }))
      // }
    }
 
  })
   

  

    return { status: "200", join };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { status: "error" };
  }

}
const validationStep1 = (formData: any, setError: React.Dispatch<React.SetStateAction<any>>, error: any): boolean => {
  if (formData?.interests.length === 0) {
    setError({ ...error, interests: "You need to select at least one interest" });
    return false;
  }
  return true;
};


const validationStep2=(formData:any,setError:React.Dispatch<React.SetStateAction<any>>,error:any)=>{
  if(formData?.subjects.length===0){
    setError({...error,subjects:"You need to select atlease one subjects"})
    }
  return formData?.subjects
}
const validationStep3=(formData:any,setError:React.Dispatch<React.SetStateAction<any>>,error:any)=>{
  if(formData?.studentName===""){
    setError({...formData,studentName:"Student name is required"})
    }
  return formData?.studentName 
}

const validationStep4=(formData:any,setError:React.Dispatch<React.SetStateAction<any>>,error:any)=>{
  if(formData?.name==="" && formData.email==="" && formData?.phoneNumber===""){
    setError({...error,name:"name is required field",email:"email is required field",phoneNumber:"phoneNumber is required" })
 

    }
    else if(formData?.name===""){
           setError({...error,name:"name is required"})
    }
    else if(formData?.email===""){
      setError({...error,email:"name is required"})
}
else if(formData?.phone===""){
  setError({...error,email:"name is required"})
}
    else 
  return formData?.name && formData?.email && validateEmail(formData?.email) && formData?.phoneNumber
}

function validateEmail(email: string): boolean {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
