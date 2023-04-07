export function validateCategory(categoryProduct: any) {
	const letters = /^[A-Za-z]+$/;
	return categoryProduct.match(letters)
	  ? categoryProduct
	  : categoryProduct.slice(categoryProduct, -1);
 }