import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Create()
{
  try{
    await prisma.user.create({
        data:{
           email : "Pinky24@gmail.com" ,
           name : "Pinky",
           Bank : {
            create:{
              account_no:"7262625252",
              account_type:"Current Account",
              balance: 877765590.90,

            }}}
    })

   console.log('users and bank created sucessfully!')
  }catch(err)
  {
    console.log('something went wrong'+ err)
  }
}

Create();