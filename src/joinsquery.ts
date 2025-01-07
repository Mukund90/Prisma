import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function joins_query()
{
    
     const value = await client.bank.findMany({
        where : {
          balance:{
            gt:99235.89,
          }
        },
        include:{
            user:true
         }
        
     })
     value.forEach(item=>
     {
        console.log({
            id : item.id,
            account_no : item.account_no,
            account_type :item.account_type,
            customer_id : item.customer_id,
            user: item.user
        })
     }
     )
     
}

joins_query()
.then(()=>
{
    console.log('data fetched sucessed!')
}).catch((err)=>
{
    console.log('something went wrong'+ err)
})