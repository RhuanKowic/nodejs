const permittedCharacters = async () => {
  const characters = [];
  if (process.env.UPPERCASE_LETTERS === "true")
    characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (process.env.LOWERCASE_LETTERS === "true")
    characters.push(... "abcdefghijklmonpqrstuvwxyz");

  if (process.env.NUMBERS === "true")
    characters.push(... "1234567890");

  if (process.env.SPECIAL_CHARACTERS === "true")
    characters.push(... "!@#$%^&*()-_");

  return characters;
}

const handle = async () => {
  let characters = await permittedCharacters();
  let password = "";

  const passwordLength : number = (process.env.PASSWORD_LENGTH != undefined) ? parseInt(process.env.PASSWORD_LENGTH) : 8;

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

export default handle;