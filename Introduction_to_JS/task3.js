

let num = 2;
let res = null;

switch (num) {
  case 1:
    console.log((res = "Зима"));
    break;

  case 2:
    console.log((res = "Весна"));
    break;

  case 3:
    console.log((res = "Літо"));
    break;

  case 4:
    console.log((res = "Осінь"));
    break;

  default:
    console.log("немає такого місяця");
    break;
}
