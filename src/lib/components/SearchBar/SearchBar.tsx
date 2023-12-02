import styles from "./SearchBar.module.css";

export default function SearchBar() {
	return (
		<form method="GET">
			<input name="q" type="text" placeholder="Search for products" className={styles.searchBar}/>
		</form>
	)
}
