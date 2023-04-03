import black from '../assets/images/products/black.jpg';
import black_2 from '../assets/images/products/black_2.jpg';
import black_3 from '../assets/images/products/black_3.jpg';
import white from '../assets/images/products/white.jpg';
import white_2 from '../assets/images/products/white_2.jpg';
import white_3 from '../assets/images/products/white_3.jpg';
import golden from '../assets/images/products/golden.jpg';
import golden_2 from '../assets/images/products/golden_2.jpg';
import golden_3 from '../assets/images/products/golden_3.jpg';
import phone_red from '../assets/images/products/phone_red.jpg';
import phone_red2 from '../assets/images/products/phone_red2.jpg';
import phone_red3 from '../assets/images/products/phone_red3.jpg';
import razer_black from '../assets/images/products/razer_black.jpg';
import razer_green from '../assets/images/products/razer_green.jpg';
import razer_pink from '../assets/images/products/razer_pink.jpg';
import razer_white from '../assets/images/products/razer_white.jpg';
import razer_white2 from '../assets/images/products/razer_white2.jpg';
import senheiser_black from '../assets/images/products/senheiser_black.jpg';
import hyperx_black from '../assets/images/products/hyperx_black.jpg';
import hyperx_blue from '../assets/images/products/hyperx_blue.jpg';
import hyperx_red from '../assets/images/products/hyperx_red.jpg';


export interface ProductFields {
	id: number,
	category: string,
	heading: string,
	price: string,
	image: string,
}

export const products: ProductFields[] = [
	{
		id: 12,
		category: "headphones",
		heading: "Razer Green 2",
		price: "$124",
		image:
		razer_green
	 },
	 {
		id: 13,
		category: "headphones",
		heading: "Razer Pink 21S",
		price: "$124",
		image:
		razer_pink
	 },
	 {
		id: 14,
		category: "headphones",
		heading: "Razer White 3",
		price: "$124",
		image:
		razer_white
	 },
	 {
		id: 15,
		category: "headphones",
		heading: "Razer White 4",
		price: "$124",
		image:
		razer_white2
	 },
	 {
		id: 11,
		category: "headphones",
		heading: "Razer Black",
		price: "$124",
		image:
		razer_black
	 },
	 {
		id: 16,
		category: "headphones",
		heading: "Senheiser Black",
		price: "$124",
		image:
		senheiser_black
	 },
	 {
		id: 17,
		category: "headphones",
		heading: "HyperX Black",
		price: "$124",
		image:
		hyperx_black
	 },
	 {
		id: 18,
		category: "headphones",
		heading: "HyperX Blue",
		price: "$124",
		image:
		hyperx_blue
	 },
	 {
		id: 19,
		category: "headphones",
		heading: "HyperX Red",
		price: "$124",
		image:
		hyperx_red
	 },
	{
		id: 10,
		category: "phones",
		heading: "Iphone 11 Red",
		price: "$124",
		image:
		phone_red
	 },
	 {
		id: 11,
		category: "phones",
		heading: "Iphone 12 Red",
		price: "$124",
		image:
		phone_red2
	 },
	 {
		id: 12,
		category: "phones",
		heading: "Iphone 14 Red",
		price: "$124",
		image:
		phone_red3
	 },
	{
	  id: 1,
	  category: "laptops",
	  heading: "Acer Black",
	  price: "$30",
	  image:
	  black
	},
	{
	  id: 2,
	  category: "laptops",
	  heading: "Asus Black",
	  price: "$30",
	  image:
	  black_2
	},
	{
	  id: 3,
	  category: "laptops",
	  heading: "Acer Blue",
	  price: "$30",
	  image:
	  black_3
	},
	{
	  id: 4,
	  category: "laptops",
	  heading: "Acer White",
	  price: "$100",
	  image:
	  white
	},
	{
	  id: 5,
	  category: "laptops",
	  heading: "Asus White",
	  price: "$55",
	  image:
	  white_2
	},
	{
	  id: 6,
	  category: "laptops",
	  heading: "Acer White",
	  price: "$124",
	  image:
	  white_3
	},
	{
	  id: 7,
	  category: "laptops",
	  heading: "Acer Golden",
	  price: "$124",
	  image:
	  golden
	},
	{
	  id: 8,
	  category: "laptops",
	  heading: "Asus Golden",
	  price: "$124",
	  image:
	  golden_2
	},
	{
	  id: 9,
	  category: "laptops",
	  heading: "Acer Golden 3",
	  price: "$124",
	  image:
	  golden_3
	}
 ];

 export const getUniqueCategories = [...new Set(products.map(item => item.category))];
