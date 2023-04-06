interface MenuItem {
	title: string;
	submenu?: MenuItem[];
 }
 
 interface Menu {
	submenu: MenuItem[];
 }

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
            title: "HyperX",
          },
        ],
      },
    ],
  },
];
