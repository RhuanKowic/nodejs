import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

const createQRCode = async () => {
  prompt.get(promptQRCode, handle);
  prompt.start();
}

export default createQRCode;