import * as database from "./utils/database.js";
database.connectToDatabase("mysql")
database.disconnectDatabase()