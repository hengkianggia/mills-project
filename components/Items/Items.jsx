import React from "react";
import styles from "./item.module.css";
import Image from "next/image";
import item1 from "../../public/assets/item1.webp";
import Button from "../UI/Button";
import Link from "next/link";

const Items = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={""}>
          <Image src={item1} width={200} alt="item1" className={styles.image} />
          <div>
            <p>Baru</p>
          </div>
        </Link>
      </div>

      <div className={styles.description}>
        <p>MILLS Sepatu Futsal Vulcan Turf White / Neon / Black 9000901</p>
        <p>IDR 399,000</p>
        <span>
          <Button
            text={"Masukkan keranjang"}
            className={"w-full font-normal text-sm md:mt-5"}
          />
        </span>
      </div>
    </div>
  );
};

export default Items;
