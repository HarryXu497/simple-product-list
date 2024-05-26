"use client"

import { useSearchParams } from "next/navigation";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
	const searchParams = useSearchParams();

	const value = searchParams.get("q") || "";

	return (
		<form method="GET" className={styles.form}>
			<input
				name="q"
				defaultValue={value}
				type="text"
				placeholder="Search for ties!"
				className={styles.searchBar}
			/>
		</form>
	)
}
