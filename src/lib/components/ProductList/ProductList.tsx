"use client"

import Product from "@/lib/types/Product";
import ProductDetail from "@/lib/components/ProductDetail/ProductDetail";
import styles from "./ProductList.module.css";
import { useEffect } from "react";

interface ProductListProps {
	products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
	useEffect(() => {
		console.log("DEBUG")
		console.table(products)
	}, [products])

	return (
		<div className={styles.productList}>
			{ products.map(product => <ProductDetail key={product.id} product={product} />)}
		</div>
	)
}