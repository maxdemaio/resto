export interface MenuItem {
  itemName: string;
  price: number;
  description: string;
}
export const foodMenuFr: MenuItem[] = [
  {
    itemName: "TARTINE AU SAUMON FUMÉ",
    price: 24.99,
    description:
      "saumon fumé sur pain au sésame maison, garnit d'un oeuf 6 minutes, labneh, chips de topinambour, cornichon et aneth, servit avec une petite salade verte, vinaigrette miel et dijon",
  },
  {
    itemName: "granola",
    price: 16.99,
    description: "granola maison, yogourt, compote aux pêches et anise étoilé, bluets et pêches de saison, menthe"
  },
  {
    itemName: "PANCAKES À LA RICOTTA",
    price: 18.99,
    description: "beurre noisette à l’érable, crème de citron",
  },
  {
    itemName: "ENDLESS SUMMER BREAKFAST",
    price: 22.99,
    description:
    "avocat sur pain au levain, oeuf miroir, tzatziki maison, salade de tomate ancestrale, concombre, poivron grillé, raisin de corinthe et dukkah"
  },
  {
    itemName: "POULET FRIT AU BABEURRE",
    price: 21.99,
    description: "rémoulade de pommes, mayonnaise chimichurri et pain brioché maison",
  },
  {
    itemName: "VIVA LA PASTA",
    price: 25.99,
    description:
    "cavatelli frais, courge butternut rôtie, pancetta, beurre, parmesan, citron et basilic"
  },
  {
    itemName: "SALADE RESTO",
    price: 25.99,
    description:
    "laitue mixte, chou kale, quinoa, poulet rôti servi chaud, patate douce rôtie, pomme verte, féta, graine de citrouille, riz sauvage soufflé, vinaigrette balsamique maison"
  },
];

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
    description:
      "avocado on sourdough toast, fried egg, house tzatziki, heirloom tomato, cucumber and charred pepper salad, currents and dukkah",
  },
  {
    itemName: "BUTTERMILK FRIED CHICKEN",
    price: 21.99,
    description: "apple remoulade, chimichurri mayo, on our house brioche bun",
  },
  {
    itemName: "VIVA LA PASTA",
    price: 25.99,
    description:
      "fresh cavatelli, roasted butternut squash, pancetta, butter, parmesan, lemon, basil",
  },
  {
    itemName: "Resto Salad",
    price: 25.99,
    description:
      "mixed lettuce, kale, quinoa, warm roasted chicken, roasted sweet potato, green apple, feta, pumpkin seeds, puffed wild rice, balsamic vinaigrette",
  },
];

export const sidesMenuFr: MenuItem[] = [
  {
    itemName: "SALADE VERTE",
    price: 9.99,
    description:
      "laitues mixtes, fenouil, amandes rôties, vinaigrette italienne",
  },
  {
    itemName: "POMME DE TERRE FINGERLING CROUSTILLANTE",
    price: 7.99,
    description: "servit avec aioli",
  },
  {
    itemName: "accompagnement de saumon fumé",
    price: 11.99,
    description: "",
  },
  {
    itemName: "BACON CROUSTILLANT",
    price: 6.99,
    description: "",
  },
  {
    itemName: "CONFITURE AUX BAIES MAISON",
    price: 2.99,
    description: "",
  },
  {
    itemName: "PAIN AU LEVAIN",
    price: 4.99,
    description: "",
  },
  {
    itemName: "DEMI AVOCAT",
    price: 4.5,
    description: "servit avec dukkah",
  },
];

export const sidesMenu: MenuItem[] = [
  {
    itemName: "Green salad",
    price: 9.99,
    description:
      "mixed greens, shaved fennel, toasted almonds, Italian vinaigrette",
  },
  {
    itemName: "CRISPY SMASHED FINGERLING POTATOES",
    price: 7.99,
    description: "served with aioli",
  },
  {
    itemName: "side smoked salmon",
    price: 11.99,
    description: "",
  },
  {
    itemName: "crispy bacon",
    price: 6.99,
    description: "",
  },
  {
    itemName: "HOMEMADE BERRY JAM",
    price: 2.99,
    description: "",
  },
  {
    itemName: "SOURDOUGH TOAST",
    price: 4.99,
    description: "",
  },
  {
    itemName: "half avocado",
    price: 4.5,
    description: "served with dukkah",
  },
];

export const pastryMenuFr: MenuItem[] = [
  {
    itemName: "OREO À LA NOISETTE",
    price: 4.75,
    description: "",
  },
  {
    itemName: "GATEAU ORANGE ET FARINE D'AMANDE",
    price: 6.75,
    description: "",
  },
  {
    itemName: "SHORTBREAD PACANE NOIX DE COCO",
    price: 5.5,
    description: "",
  },
  {
    itemName: "TARTELETTE ÉRABLE ET BEURRE",
    price: 4.75,
    description: "",
  },
];

export const pastryMenu: MenuItem[] = [
  {
    itemName: "MAPLE BUTTER TART",
    price: 4.75,
    description: "",
  },
  {
    itemName: "orange flourless cake",
    price: 6.75,
    description: "",
  },
  {
    itemName: "pecan coconut shortbread",
    price: 5.5,
    description: "",
  },
  {
    itemName: "hazlenut oreo",
    price: 4.75,
    description: "",
  },
];

export const drinkMenuFr: MenuItem[] = [
  {
    itemName: "mimosa",
    price: 12,
    description: "jus d’orange frais, vin mousseux",
  },
  {
    itemName: "bloody caesar",
    price: 12,
    description: "vodka, Worcestershire, Walter caesar, givre de sel, rubans de carottes",
  },
  {
    itemName: "espresso martini",
    price: 14,
    description: "kahlua, vodka, espresso",
  },
  {
    itemName: "SBAGLIATO SPRITZ",
    price: 13,
    description:
      "vermouth rouge, liqueur d’orange amère, pamplemousse, vin mousseux",
  },
  {
    itemName: "ST-GERMAIN SPRITZ",
    price: 14,
    description: "liqueur de sureau, gin, citron, vin mousseux",
  },
  {
    itemName: "MARTINI",
    price: 13,
    description: "gin ou vodka",
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
  {
    itemName: "SBAGLIATO SPRITZ",
    price: 13,
    description:
      "sweet vermouth, bitter orange liquor, grapefruit, sparkling wine",
  },
  {
    itemName: "ST-GERMAIN SPRITZ",
    price: 14,
    description: "elderberry liquor, gin, lemon, sparkling wine",
  },
  {
    itemName: "MARTINI",
    price: 13,
    description: "gin or vodka",
  },
];

export const moreMenuFr: MenuItem[] = [
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
    price: 3.5,
    description: "",
  },
  {
    itemName: "AMERICANO",
    price: 3.5,
    description: "",
  },
  {
    itemName: "CAPUCCINO",
    price: 4.25,
    description: "",
  },
  {
    itemName: "CHOCOLAT CHAUD",
    price: 5.5,
    description: "",
  },
  {
    itemName: "THÉ GLACÉ PÊCHE + GINGEMBRE",
    price: 6,
    description: "",
  },
  {
    itemName: "JUS D’ORANGE",
    price: 6,
    description: "",
  },
  {
    itemName: "JUS DE PAMPLEMOUSSE",
    price: 6,
    description: "",
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
  {
    itemName: "MACCHIATO",
    price: 3.5,
    description: "",
  },
  {
    itemName: "AMERICANO",
    price: 3.5,
    description: "",
  },
  {
    itemName: "CAPUCCINO",
    price: 4.25,
    description: "",
  },
  {
    itemName: "HOT CHOCOLATE",
    price: 5.5,
    description: "",
  },
  {
    itemName: "PEACH & GINGER ICED TEA",
    price: 6,
    description: "",
  },
  {
    itemName: "orange juice",
    price: 6,
    description: "",
  },
  {
    itemName: "grapefruit juice",
    price: 6,
    description: "",
  },
];
