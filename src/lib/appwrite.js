import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("679a7ba9003a3a44fa30"); // project ID

export const account = new Account(client);
export const databases = new Databases(client);
