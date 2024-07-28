import handle from "./handle.js";
import chalk from "chalk";

const createPassword = async () => {
  console.log(chalk.green("password"));
  const password = await handle();
  console.log(password);
}

export default createPassword;