export default function generatePass() {
  let password: string = "";
  let characters: string = "!@#$%&1293468AbcEsJfCeAxOylbg";

  for (let index = 0; index < 10; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password
}
