import React from "react";
import styles from "./mainheader.module.css";
import Image from "next/image";
import images from '@/public/assets/head1.webp'
import images2 from '@/public/assets/head2.webp'
import images3 from '@/public/assets/head3.webp'
import images4 from '@/public/assets/head4.webp'

const MainHeader = () => {
  return (
    <div className={styles.container}>
      <Image src={images}  className={styles.images}/>
      <Image src={images2} className={styles.images}/>
      <Image src={images3} className={styles.images}/>
      <Image src={images4} className={styles.images}/>
    </div>
  );
};

export default MainHeader;
