import { Client, Databases, Account, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("679a7ba9003a3a44fa30"); // project ID

export const account = new Account(client);
export const databases = new Databases(client);

export const createDocument = async (databaseId, collectionId, data) => {
    try {
        const response = await databases.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            data
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
