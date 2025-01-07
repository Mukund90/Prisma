import { PrismaClient } from "@prisma/client";

const client = new  PrismaClient();

async function get_user_post()
{
    try{
        const value = await client.user.findUnique({
            where: {
                id : 1,
            },
            include: {
                Bank: true,
            }
        })

        console.log(value) 
       
        
    }catch(err)
    {
        console.log('something went wrong'+err)
    }
   
}

get_user_post()  

