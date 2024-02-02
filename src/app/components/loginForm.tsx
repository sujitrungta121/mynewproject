import { Prisma, PrismaClient } from "@prisma/client";


export default async function Login(formData:any){

  const prisma =new PrismaClient();
//   const contact=await prisma.user.create({
//     data:{
//       name:formData?.name,
//       email:formData?.email,
//      password:formData?.password,
//     },
//   })

const user=await prisma.user.findMany()

 
  return {status:"200",user}
}
