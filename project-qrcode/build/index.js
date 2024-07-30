var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        prompt.get(mainPrompt, (err, res) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                return;
            }
            const select = isNaN(Number(res.select)) ? 0 : parseInt(res.select, 10);
            if (select === 1)
                yield createQRCode();
            if (select === 2)
                yield createPassword();
        }));
    });
}
main();
