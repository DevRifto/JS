// simple math if you want to build furnichar how many wood you need (total) :
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 20;

  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalWood = woodCalculator(2, 2, 1);
console.log("We will Need ", totalWood, " Wood");
