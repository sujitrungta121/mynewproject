

'use server'

import { PrismaClient } from "@prisma/client";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

 const email=process.env.EMAIL;
 const  pass=process.env.PASS

 console.log(process.env.EMAIL,process.env.PASS,"email and password");

export default async function submitContact(formData: any,error:any) {
  

  try {
    // Save form data to the database
    const contact = await prisma.joinUs.create({
      data: {
        name: formData?.name,
        email: formData?.email,
        phoneNumber:formData?.phoneNumber,
        about:formData?.about,
        studentName:formData?.studentName
        // message: formData?.message
      },
    });

    // Send email notification
    await sendEmail(formData);

    return { status: "200", contact };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { status: "error",error };
  }
}

async function sendEmail(formData: any) {
  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:email , // Your Gmail email address
        pass:pass
        // Your Gmail password or an application-specific password if you have 2-Step Verification enabled
      }
    });

    console.log(transporter)

    // Construct the email message
    const mailOptions = {
      from: email,
      to: email,
     
    };

    // Send the email
    await transporter.sendMail({
      ...mailOptions, 
      subject: 'New form submission',
      text: `New form submission:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html:"<h1>Test title</h1>"

    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
}



