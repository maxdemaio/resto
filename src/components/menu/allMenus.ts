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
  {
    itemName: "ENDLESS SUMMER BREAKFAST",
    price: 22.99,
    description: "avocado on sourdough toast, fried egg, house tzatziki, heirloom tomato, cucumber and charred pepper salad, currents and dukkah"
  },
  {
    itemName: "BUTTERMILK FRIED CHICKEN",
    price: 21.99,
    description: "apple remoulade, chimichurri mayo, on our house brioche bun"
  },
  {
    itemName: "VIVA LA PASTA",
    price: 25.99,
    description: "fresh cavatelli, roasted butternut squash, pancetta, butter, parmesan, lemon, basil"
  },
  {
    itemName: "Resto Salad",
    price: 25.99,
    description: "mixed lettuce, kale, quinoa, warm roasted chicken, roasted sweet potato, green apple, feta, pumpkin seeds, puffed wild rice, balsamic vinaigrette"
  }
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
  {
    itemName: "SBAGLIATO SPRITZ",
    price: 13,
    description: "sweet vermouth, bitter orange liquor, grapefruit, sparkling wine"
  },
  {
    itemName: "ST-GERMAIN SPRITZ",
    price: 14,
    description: "elderberry liquor, gin, lemon, sparkling wine"
  },
  {
    itemName: "MARTINI",
    price: 13,
    description: "gin or vodka"
  }
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
  {
    itemName: "MACCHIATO",
    price: 3.50,
    description: ""
  },
  {
    itemName: "AMERICANO",
    price: 3.50,
    description: "",
  },
  {
    itemName: "CAPUCCINO",
    price: 4.25,
    description: "",
  },
  {
    itemName: "HOT CHOCOLATE",
    price: 5.50,
    description: ""
  },
  {
    itemName: "PEACH & GINGER ICED TEA",
    price: 6,
    description: ""
  },
  {
    itemName: "orange juice",
    price: 6,
    description: ""
  },
  {
    itemName: "grapefruit juice",
    price: 6,
    description: ""
  }
];
