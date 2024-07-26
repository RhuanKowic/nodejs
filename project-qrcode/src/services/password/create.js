const { default: chalk } = require("chalk");

const createPassword = async () => {
  console.log(chalk.green("password"));
}

export default createPassword;