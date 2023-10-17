export interface MenuItem {
  itemName: string;
  price: number;
  description: string;
}

export const foodMenu: MenuItem[] = [
  {
    itemName: "smoked salmon toast",
    price: 24.99,
    description:
      "smoked salmon served on our homemade sesame loaf, garnished with a soft boiled egg, labneh, Jerusalem artichoke chips, gherkin and dill. served with a small green salad, honey dijon dressing",
  },
  {
    itemName: "granola",
    price: 16.99,
    description:
      "homemade granola, yogurt, mango and coconut smoothie, fresh pineapple, banana, mint",
  },
  {
    itemName: "ricotta pancakes",
    price: 18.99,
    description: "maple brown butter sauce, lemon cream",
  },
];

export const drinkMenu: MenuItem[] = [
  {
    itemName: "mimosa",
    price: 12,
    description: "fresh orange juice, sparkling wine",
  },
  {
    itemName: "bloody caesar",
    price: 12,
    description: "vodka, worcestershire, walter caesar, salt rim",
  },
  {
    itemName: "espresso martini",
    price: 14,
    description: "kahlua, vodka, espresso",
  },
];

export const moreMenu: MenuItem[] = [
  {
    itemName: "espresso",
    price: 3.25,
    description: "",
  },
  {
    itemName: "cortado",
    price: 3.75,
    description: "",
  },
  {
    itemName: "latte",
    price: 4.25,
    description: "",
  },
];