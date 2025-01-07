import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function delete_user_bank_details()
{
  await client.bank.delete({
    where : {
        id : 4
    }
    
  })
  console.log('deleted data sucessfully!');
}

delete_user_bank_details();

