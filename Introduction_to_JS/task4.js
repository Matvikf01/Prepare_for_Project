


let svitlofor = "червоний";
let isRoadClear = true;

if (svitlofor === "зелений" && isRoadClear === true) {
  console.log("Іди");
}else if(svitlofor === "зелений" && isRoadClear === false){
  console.log("подожди пока нарушители проедут");

} else if (svitlofor === "жовтий" && isRoadClear === false) {
  console.log("почекай");

}else if (svitlofor === "жовтий" && isRoadClear === true) {
  console.log("все рано жди");

}else if (svitlofor === "червоний" && isRoadClear === true) {
  console.log("стой все рано");
}else if (svitlofor === "червоний" && isRoadClear === false) {
  console.log("стой и жди");
}else {
  console.log("Роби що хочеш");
}


