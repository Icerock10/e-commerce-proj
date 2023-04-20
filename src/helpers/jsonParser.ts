export const getJSONParsed = (jsonObject: any): any => {
	return JSON.parse(JSON.stringify(jsonObject));
}
