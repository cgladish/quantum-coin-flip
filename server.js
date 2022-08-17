import Nullstack from "nullstack";
import Application from "./src/Application";
import { MongoClient } from "mongodb";

const context = Nullstack.start(Application);

context.start = async function start() {
  const databaseClient = new MongoClient(context.secrets.dbUrl);
  await databaseClient.connect();
  context.database = await databaseClient.db();
};

export default context;
