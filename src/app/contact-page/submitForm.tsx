

'use server'

import { PrismaClient } from "@prisma/client";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

 const email=process.env.EMAIL;
 const  pass=process.env.PASS

 console.log(process.env.EMAIL,process.env.PASS,"email and password");



  export default async function submitContact(formData:any) {



  try {
    // Save form data to the database
    const contact = await prisma.joinUs.create({
      data: {
        name:formData?.name,
        email: formData?.email,
        phoneNumber:formData?.phoneNumber,
        about:formData?.about,
        studentName:formData?.studentName,
        

       
      },
    });

    // Send email notification


    return { status: "200", contact };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { status: "error",error };
  }
}






