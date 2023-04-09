import { Menu } from "../components/interfaces/interfaces";

export const menuItems: Menu[] = [
  {
    submenu: [
      {
        title: "Phones",
        submenu: [
          {
            title: "Iphone",
          },
          {
            title: "Android",
          },
        ],
      },
      {
        title: "Laptops",
		  submenu: [
			{
			  title: "Acer",
			},
			{
			  title: "Asus",
			},
		 ],
      },
      {
        title: "Headphones",
        submenu: [
          {
            title: "Razer",
          },
          {
            title: "Hyperx",
          },
        ],
      },
    ],
  },
];
