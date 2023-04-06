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
        title: "phones",
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
        title: "laptops",
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
        title: "headphones",
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
