import Product from "@/lib/types/Product";
import styles from "./ProductDetail.module.css";
import Image from "next/image";
import productImage from "../../../../public/product_image.png";

interface ProductDetailProps {
	product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
	return (
		<div className={styles.productDetail}>
			<div className="text">
				<h2>{product.name}</h2>
				<h3>{product.price}</h3>
			</div>
			<div className="image">
				<Image src={productImage} alt={product.name} width={100} height={100} priority={true}/>
			</div>
		</div>
	)
}