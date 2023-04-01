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


export interface ProductsSchema {
	id: number,
	category: string,
	heading: string,
	price: string,
	image: string,
	
}


export const products: ProductsSchema[] = [
	{
		id: 11,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		razer_black
	 },
	 {
		id: 12,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		razer_green
	 },
	 {
		id: 13,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		razer_pink
	 },
	 {
		id: 14,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		razer_white
	 },
	 {
		id: 15,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		razer_white2
	 },
	 {
		id: 16,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		senheiser_black
	 },
	 {
		id: 17,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		hyperx_black
	 },
	 {
		id: 18,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		hyperx_blue
	 },
	 {
		id: 19,
		category: "headphones",
		heading: "LAST CHILD",
		price: "$124",
		image:
		hyperx_red
	 },
	{
		id: 10,
		category: "phone",
		heading: "LAST CHILD",
		price: "$124",
		image:
		phone_red
	 },
	 {
		id: 11,
		category: "phone",
		heading: "LAST CHILD",
		price: "$124",
		image:
		phone_red2
	 },
	 {
		id: 12,
		category: "phone",
		heading: "LAST CHILD",
		price: "$124",
		image:
		phone_red3
	 },
	{
	  id: 1,
	  category: "laptop",
	  heading: "1st ELEM Scart",
	  price: "$30",
	  image:
	  black
	},
	{
	  id: 2,
	  category: "laptop",
	  heading: "2nd ELEM Scart",
	  price: "$30",
	  image:
	  black_2
	},
	{
	  id: 3,
	  category: "laptop",
	  heading: "3rd ELEM Scart",
	  price: "$30",
	  image:
	  black_3
	},
	{
	  id: 4,
	  category: "laptop",
	  heading: "4th ELEM Scart",
	  price: "$100",
	  image:
	  white
	},
	{
	  id: 5,
	  category: "laptop",
	  heading: "5th ELEM Scart",
	  price: "$55",
	  image:
	  white_2
	},
	{
	  id: 6,
	  category: "laptop",
	  heading: "6th ELEM Scart",
	  price: "$124",
	  image:
	  white_3
	},
	{
	  id: 7,
	  category: "laptop",
	  heading: "7th ELEM Scart",
	  price: "$124",
	  image:
	  golden
	},
	{
	  id: 8,
	  category: "laptop",
	  heading: "8th ELEM Scart",
	  price: "$124",
	  image:
	  golden_2
	},
	{
	  id: 9,
	  category: "laptop",
	  heading: "LAST CHILD",
	  price: "$124",
	  image:
	  golden_3
	}
 ];

 const categorizedProducts = products.reduce<{
	phones: ProductsSchema[];
	laptops: ProductsSchema[];
	headphones: ProductsSchema[];
 }>(
	(acc, product) => {
	  if (product.category === "phone") {
		 acc.phones.push(product);
	  } else if (product.category === "laptop") {
		 acc.laptops.push(product);
	  }
	  else if (product.category === "headphones") {
		acc.headphones.push(product);
	 }
	  return acc;
	},
	{ phones: [], laptops: [], headphones: [] }
 );

 export const { phones,  laptops, headphones} = categorizedProducts;