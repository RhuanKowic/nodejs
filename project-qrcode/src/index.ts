import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, res: any) => {
    if (err) {
      console.error(err);
      return;
    }
    const select = isNaN(Number(res.select)) ? 0 : parseInt(res.select, 10);
    if (select === 1) await createQRCode();
    if (select === 2) await createPassword();
  });
}

main();