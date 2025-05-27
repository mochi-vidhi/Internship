import { Client,Databases,Account} from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('683487ab0006e494e817');

const databases = new Databases(client);
export const account = new Account(client);
export { databases };
// Api Endpoint  -  https://fra.cloud.appwrite.io/v1
// Project Id - 683487ab0006e494e817
