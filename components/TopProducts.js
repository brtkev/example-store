
import styles from '../styles/TopProducts.module.scss';

import Image from 'next/image';
import ProductCard from './ProductCard';


const TopProducts = ({products}) => {

  let listItems = products.map( (product, index) =>
    <li key={product.product_id} className={styles.productContainer}>
      <ProductCard product={product} />
    </li>
  );

  return (
    <div id={styles.container}>
      <ul id={styles.grid} >
        {listItems}
      </ul>
    </div>
  )
}

export default TopProducts;
