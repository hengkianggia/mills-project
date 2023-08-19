import React from "react";
import styles from "./image.module.css";
import Image from "next/image";
import gambar from "@/public/assets/item1.webp";

const HeadImage = () => {
  return (
    <div className={styles.container}>
      <Image
        src={gambar}
        alt="Detail productttt"
        className={styles.image}
        width={400}
        height={450}
      />

      <div className={styles.listImage}>
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
        <Image
          src={gambar}
          alt="Detail product"
          className={styles.imageList}
          width={70}
          height={110}
        />
      </div>
    </div>
  );
};

export default HeadImage;
