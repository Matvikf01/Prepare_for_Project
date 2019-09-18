

let amountOfmoney = parseFloat(prompt("Please enter amount of money"));
let discount = parseFloat(prompt("Please enter the discount"));

function showPrice(amountOfmoney, discount) {
  if (
    amountOfmoney >= 0 &&
    amountOfmoney <= 9999999 &&
    discount >= 0 &&
    discount <= 99
  ) {
    let newdiscount = discount;
    let PriceWithoutDiscount = amountOfmoney;        
    let saved = amountOfmoney * (discount / 100);   
    let PriceWithDiscount = amountOfmoney - saved;  

    console.log(
      `Price without discount:${PriceWithoutDiscount} \n` +
        `Discount:${newdiscount}% \n` +
        `Price with discount:${PriceWithDiscount.toFixed(2)}\n` +
        `Saved:${saved.toFixed(2)}`
    );
  } else {
    console.log("Invalid input data");
  }
}

showPrice(amountOfmoney, discount);