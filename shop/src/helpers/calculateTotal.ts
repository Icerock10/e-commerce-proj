export const calculateTotalAmount = (products: any) => {
	return products.reduce((acc: number,val:any) => acc + (val.price * val.quantity), 0)
}