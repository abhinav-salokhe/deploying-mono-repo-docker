import { prismaClient } from "db/client";
import styles from "./page.module.css";



export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'


// when we build our frontend in next js and then use start for starting it in production mode there are some pages which are statically generated so it calls that data only from db which are present during build script if we put more data after build script it will not be displayed that is major problem during creating docker file for nextjs