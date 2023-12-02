import SearchBar from "@/lib/components/SearchBar/SearchBar";
import styles from "./page.module.css";
import { PageProps } from "../../.next/types/app/page";
import getProducts from "@/lib/database/getProducts";

export default function Page({ searchParams }: { searchParams: { q: string }}) {
	const data = await getProducts(searchParams.q);
	return (
		<div className={styles.searchBar}>
			<SearchBar/>
		</div>
	)
}
