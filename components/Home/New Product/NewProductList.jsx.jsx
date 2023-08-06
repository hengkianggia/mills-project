import React from "react";
import styles from "./newproductlist.module.css";
import Items from "@/components/Items/Items";
import Button from "@/components/UI/Button";

const NewProductList = ({ title, button }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.itemContainer}>
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
      <div>
        {button ? <Button text={"Load More"} className={"mt-10"} /> : ""}
      </div>
    </div>
  );
};

export default NewProductList;
