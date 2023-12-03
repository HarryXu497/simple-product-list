import { db } from "@vercel/postgres";
import Product from "../types/Product";


export default async function getProducts(query: string) {
	const client = await db.connect();
	let products: Product[];
  
	const queryString = query ?
		`SELECT id, name, price FROM products WHERE name ILIKE '${query}%';` :
		`SELECT id, name, price FROM products;`;
	
	try {
		products = await client.query(queryString)
			.then(value => {
				if (Array.isArray(value)) {
					return value[1].rows as any[];
				}

				return value.rows;
			})
			.then(value => value.map(row => ({
				id: row["id"],
				name: row["name"],
				price: +row["price"],
				secret: row["secret"]
			} as Product)))
	} catch (error) {
		return [];
	}
   
	return products;
}