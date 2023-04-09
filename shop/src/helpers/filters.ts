import { ProductFields } from "../components/interfaces/interfaces";

export function filterProductsByCategory (state: ProductFields[], categoryOrSubCategory: string, product: string) {
	return state.filter((item: any) => {
		return item[categoryOrSubCategory] === product 
	});
 }

 export function filterProductsByUserInput(userInput: string, products: ProductFields[]) {
	const matches: ProductFields[] = [];
	products.forEach((product) => {
	  let score = 0;
	  Object.values(product).forEach((value) => {
		 if (
			typeof value === "string" &&
			value.toLowerCase().includes(userInput.toLowerCase())
		 ) {
			score += userInput.length;
		 }
	  });
	  if (score > 0) {
		 matches.push(product);
	  }
	});
	return matches;
 }
