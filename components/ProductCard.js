import styles from '../styles/ProductCard.module.scss';

import Image from 'next/image';

export default function ProductCard({product}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} >
          <Image src={product.thumbnail} alt="product thumnail" layout="fill" loading="lazy" />
      </div>
      <div className={styles.information}>
        <p>{product.title ?? ''}</p>
        <div className={styles.buttonContainer}>
          <button>more info</button>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  )
}
