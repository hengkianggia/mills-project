import Image from "next/image";
import React from "react";
import styles from "./catogory.module.css";
import timnas from "../../../public/assets/timnas.webp";
import footwear from "../../../public/assets/footwear.webp";
import mens from "../../../public/assets/mens.webp";
import women from "../../../public/assets/women.webp";
import Link from "next/link";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={timnas} className={styles.images} />
        <p>
          <Link href={""}>INDONESIA NATIONAL TEAM</Link>
        </p>
      </div>
      <div className={styles.item}>
        <Image src={footwear} className={styles.images} />
        <p>
          <Link href={""}>FOOTWEAR</Link>
        </p>
      </div>
      <div className={styles.item}>
        <Image src={mens} className={styles.images} />
        <p>
          <Link href={""}>MENS</Link>
        </p>
      </div>
      <div className={styles.item}>
        <Image src={women} className={styles.images} />
        <p>
          <Link href={""}>WOMEN</Link>
        </p>
      </div>
    </div>
  );
};

export default Category;
