import { ProductFields } from "../mocks/products"

export const getLikedProductsFromLocalStorage = (products: ProductFields[]) => {
	return products.map((product) => {
		const storagetKey = localStorage.getItem(`heart${product.id}`)
		if(product.id === Number(storagetKey)) {
			return {...product, liked: true}
		}
		return product;
	}).sort((a: ProductFields, b: ProductFields) => (b.liked ? 1 : 0) - (a.liked ? 1 : 0));
}