import SearchBar from "@/lib/components/SearchBar/SearchBar";
import styles from "./page.module.css";
import ProductList from '../lib/components/ProductList/ProductList';
import getProducts from "@/lib/database/getProducts";
import Head from "next/head";

export default async function Page({ searchParams: { q } }: { searchParams: { q: string }}) {
	const products = await getProducts(q);

	return (
		<main className={styles.productList}>
			<Head>
				<title>Product List</title>
				<meta property="og:title" content="Product List" key="title"/>
				<meta name="description" content="A simple product list :)"/>
			</Head>
			<SearchBar/>
			<ProductList products={products}/>
		</main>
	)
}
