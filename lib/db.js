import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://auth-user:MQS07y5jmgE3peoD@cluster0.2hss9zy.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
