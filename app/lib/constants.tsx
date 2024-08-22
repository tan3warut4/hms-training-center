interface SideButton {
  name: string;
  data: string[];
}

interface CategoryWithSideButton {
  category: string;
  sideButton: SideButton[];
}

type Category = CategoryWithSideButton | string;

export const Bristot: Category[] = [
  {
    category: "Beverage T/A",
    sideButton: [
      { name: "Hot Beverage", data: ["Cafe Latte", "Capuccino"] },
      {
        name: "Iced Beverage",
        data: ["Ice Latte", "Lemon Ice Tea", "Peach Tea"],
      },
    ],
  },
  "Beverage DI",
  "Alcohol",
  "Food",
  "Cabinet",
  "Cakes",
  "Messages",
];

export const Twotigers: string[] = [];

export const RollD: string[] = [];

export const EspressoBar: string[] = [];
