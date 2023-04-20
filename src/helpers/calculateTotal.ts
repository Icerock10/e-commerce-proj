import { ProductFields } from "../components/interfaces/interfaces"

export const calculateTotalAmount = (products: ProductFields[]): number => {
	return products.reduce((acc: number,val:any) => acc + (val.price * val.quantity), 0)
}