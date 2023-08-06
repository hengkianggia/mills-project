import React from "react";
import styles from "./newproductlist.module.css";
import Items from "@/components/Items/Items";

const NewProductList = () => {
  return (
    <div className={styles.container}>
      <h2>NEW PRODUCT</h2>
      <div className={styles.itemContainer}>
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default NewProductList;
