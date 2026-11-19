import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose";

async function DBConnect() {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to the DATABASE!", response.connection.host);
  } catch (error) {
    console.error("ERROR CONNECTING DATABASE!", error);
    process.exit(1);
  }
}

export default DBConnect;
