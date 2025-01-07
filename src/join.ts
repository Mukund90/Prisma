import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

async function joins_understand ()
{
  const value = await client.user.findMany({
     include:{
        Bank: true
     }
  })
   
  value.forEach(user => {
    console.log({
      id: user.id,
      email: user.email,
      name: user.name,
      bank: user.Bank
    });
  });
}

joins_understand()
.then(()=>{
    console.log('data fetched sucessfully!')
}).catch((err)=>
{
    console.log('data is not presnt in db'+ err)
})
