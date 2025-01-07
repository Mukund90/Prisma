import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({log :['info','query','error'],})

async function Post_user()
{
   try{
      await client.bank.create({
        data : {
            account_no:"26626363873",
            account_type : "Current Account",
            balance: 2773634545.90,
            user:{
                connect:{
                    id : 1   //its connect the user table with entry id == 1 
                }
            }
        }
      })
      console.log('bank data created sucessfullly!')
   }catch(err)
   {
    console.log('something  went wrong '+ err)
   }
}

Post_user();