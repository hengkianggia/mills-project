import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./category2.module.css";
import timnas from "../../../public/assets/timnas.webp";
import footwear from "../../../public/assets/footwear.webp";

const Category2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={timnas} className={styles.images} />
        <h2>
          <Link href={""}>OFFICIAL APPAREL</Link>
        </h2>
      </div>
      <div className={styles.item}>
        <Image src={footwear} className={styles.images} />
        <h2>
          <Link href={""}>FOOTWEAR</Link>
        </h2>
      </div>
      <div className={styles.item}>
        <Image src={timnas} className={styles.images} />
        <h2>
          <Link href={""}>APPAREL</Link>
        </h2>
      </div>
      <div className={styles.item}>
        <Image src={footwear} className={styles.images} />
        <h2>
          <Link href={""}>ACCESSORIES</Link>
        </h2>
      </div>
    </div>
  );
};

export default Category2;
