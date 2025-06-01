import { Client,Databases,Account} from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('Your project Id');

const databases = new Databases(client);
export const account = new Account(client);
export { databases };
