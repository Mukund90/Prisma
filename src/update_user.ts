import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function update_user_post()
{
   await client.user.update({
    where : {
        id : 1,
    },
    data : {
        email: "mukundboy@345gmail.com"
    }
  })

  console.log('updated sucessfully!')
}

update_user_post();