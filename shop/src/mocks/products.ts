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
	subCategory: string
	liked: boolean,
}

export const products: ProductFields[] = [
	{
		id: 1,
		category: "Headphones",
		heading: "Razer Green 2",
		subCategory: "Razer",
		price: "$124",
		liked: false,
		image:
		razer_green
	 },
	 {
		id: 2,
		category: "Headphones",
		heading: "Razer Pink 21S",
		subCategory: "Razer",
		price: "$124",
		liked: false,
		image:
		razer_pink
	 },
	 {
		id: 3,
		category: "Headphones",
		heading: "Razer White 3",
		subCategory: "Razer",
		price: "$124",
		liked: false,
		image:
		razer_white
	 },
	 {
		id: 4,
		category: "Headphones",
		heading: "Razer White 4",
		subCategory: "Razer",
		price: "$124",
		liked: false,
		image:
		razer_white2
	 },
	 {
		id: 5,
		category: "Headphones",
		heading: "Razer Black",
		subCategory: "Razer",
		price: "$124",
		liked: false,
		image:
		razer_black
	 },
	 {
		id: 6,
		category: "Headphones",
		heading: "Senheiser Black",
		subCategory: "Senheiser",
		price: "$124",
		liked: false,
		image:
		senheiser_black
	 },
	 {
		id: 7,
		category: "Headphones",
		heading: "HyperX Black",
		subCategory: "Hyperx",
		price: "$124",
		liked: false,
		image:
		hyperx_black
	 },
	 {
		id: 8,
		category: "Headphones",
		heading: "HyperX Blue",
		subCategory: "Hyperx",
		price: "$124",
		liked: false,
		image:
		hyperx_blue
	 },
	 {
		id: 9,
		category: "Headphones",
		heading: "HyperX Red",
		subCategory: "Hyperx",
		price: "$124",
		liked: false,
		image:
		hyperx_red
	 },
	{
		id: 10,
		category: "Phones",
		heading: "Iphone 11 Red",
		subCategory: "Iphone",
		price: "$124",
		liked: false,
		image:
		phone_red
	 },
	 {
		id: 11,
		category: "Phones",
		heading: "Iphone 12 Red",
		subCategory: "Iphone",
		price: "$124",
		liked: false,
		image:
		phone_red2
	 },
	 {
		id: 12,
		category: "Phones",
		heading: "Android 5 Red",
		subCategory: "Android",
		price: "$124",
		liked: false,
		image:
		phone_red3
	 },
	{
	  id: 13,
	  category: "Laptops",
	  heading: "Acer Black",
	  subCategory: "Acer",
	  price: "$30",
	  liked: false,
	  image:
	  black
	},
	{
	  id: 14,
	  category: "Laptops",
	  heading: "Asus Black",
	  subCategory: "Asus",
	  price: "$30",
	  liked: false,
	  image:
	  black_2
	},
	{
	  id: 15,
	  category: "Laptops",
	  heading: "Acer Blue",
	  subCategory: "Acer",
	  price: "$30",
	  liked: false,
	  image:
	  black_3
	},
	{
	  id: 16,
	  category: "Laptops",
	  heading: "Acer White",
	  subCategory: "Acer",
	  price: "$100",
	  liked: false,
	  image:
	  white
	},
	{
	  id: 17,
	  category: "Laptops",
	  heading: "Asus White",
	  subCategory: "Asus",
	  price: "$55",
	  liked: false,
	  image:
	  white_2
	},
	{
	  id: 18,
	  category: "Laptops",
	  heading: "Acer White",
	  subCategory: "Acer",
	  price: "$124",
	  liked: false,
	  image:
	  white_3
	},
	{
	  id: 19,
	  category: "Laptops",
	  heading: "Acer Golden",
	  price: "$124",
	  liked: false,
	  subCategory: "Acer",
	  image:
	  golden
	},
	{
	  id: 20,
	  category: "Laptops",
	  heading: "Asus Golden",
	  subCategory: "Asus",
	  price: "$124",
	  liked: false,
	  image:
	  golden_2
	},
	{
	  id: 21,
	  category: "Laptops",
	  heading: "Acer Golden 3",
	  subCategory: "Acer",
	  price: "$124",
	  liked: false,
	  image:
	  golden_3
	}
 ];