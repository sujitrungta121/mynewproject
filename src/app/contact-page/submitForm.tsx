// 'use server'
// import excuteQuery from '@/app/common/connectDb';

// const submitContact = async (formData: any) => {
//     console.log(formData)
   
//   try {
//     // const name = formData.get('name');
//     // const email = formData.get('email');
//     const name=formData.name;
//     const email=formData.email
//     console.log(name, email)
//     const query = `INSERT INTO new_table (name, email) VALUES (?, ?)`;
//     ;
//     const values = [name, email];
//     const result = await excuteQuery({ query, values });
//     return { status: "200"}; 
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     return { status: "error" }; 
//   }
// };

// export default submitContact;


import { NextApiResponse,NextApiRequest } from "next";
import { PrismaClient } from "@prisma/client";


export default async function submitContact(
req:NextApiRequest,
res:NextApiResponse
){
  const prisma=new PrismaClient();
  if(req.method==="GET"){
    const contact=await prisma.contact.findMany
    return res.send(contact)
  }
  else if(req.method==="POST"){
    res.status(201).send('POST')
  }
}



