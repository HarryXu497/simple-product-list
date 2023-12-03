import SearchBar from "@/lib/components/SearchBar/SearchBar";
import styles from "./page.module.css";
import ProductList from '../lib/components/ProductList/ProductList';
import getProducts from "@/lib/database/getProducts";

export default async function Page({ searchParams: { q } }: { searchParams: { q: string }}) {
	const products = await getProducts(q);

	return (
		<main className={styles.productList}>
			<SearchBar/>
			<ProductList products={products}/>
		</main>
	)
}
