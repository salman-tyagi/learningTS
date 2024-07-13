// TUPLES => tuples is very similar to array with a difference is that the tuples record or element holds a defination like the properties of the records

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const coffee: Drink = ["brown", false, 30];
const sprite: Drink = ["clear", true, 40];

pepsi[0] = 40;
pepsi[2] = "brown";
