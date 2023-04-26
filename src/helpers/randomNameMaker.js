const randomNameGenerator = (num1, num2) => {
  let name = "";
  for (let i = 0; i < num1; i++) {
    const random = Math.floor(Math.random() * 27);
    name += String.fromCharCode(97 + random);
  }
  let surname = "";
  for (let i = 0; i < num2; i++) {
    const random = Math.floor(Math.random() * 27);
    surname += String.fromCharCode(97 + random);
  }
  return name + " " + surname;
};

export default randomNameGenerator;
