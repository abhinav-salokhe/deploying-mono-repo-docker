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
