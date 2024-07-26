import chalk from "chalk";
import qr from "qrcode-terminal";
const handle = async (err, res) =>{
  if(err) {
    console.log("Error on application");
    return;
  }

  const isSmall = res.type == 2; 
  qr.generate(res.link, {small: isSmall}, (qrcode)=>{
    console.log(chalk.magenta.bold("QRCODE gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;