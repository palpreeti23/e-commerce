import "dotenv/config";
import app from "./src/app.js";
import DBConnect from "./src/db/db.js";

// const port = process.env.PORT || 3000;
const port = Number(process.env.PORT) || 3000;

const startServer = async () => {
  try {
    await DBConnect();
    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  } catch (error) {
    console.error("server startServer failed", error);
  }
};

startServer();
