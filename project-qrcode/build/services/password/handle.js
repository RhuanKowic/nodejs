var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const permittedCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const characters = [];
    if (process.env.UPPERCASE_LETTERS === "true")
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (process.env.LOWERCASE_LETTERS === "true")
        characters.push(..."abcdefghijklmonpqrstuvwxyz");
    if (process.env.NUMBERS === "true")
        characters.push(..."1234567890");
    if (process.env.SPECIAL_CHARACTERS === "true")
        characters.push(..."!@#$%^&*()-_");
    return characters;
});
const handle = () => __awaiter(void 0, void 0, void 0, function* () {
    let characters = yield permittedCharacters();
    let password = "";
    const passwordLength = (process.env.PASSWORD_LENGTH != undefined) ? parseInt(process.env.PASSWORD_LENGTH) : 8;
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
});
export default handle;
