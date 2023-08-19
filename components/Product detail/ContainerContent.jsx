import React from "react";
import styles from "./container.module.css";
import HeadImage from "./HeadImage";
import DescriptionProduct from "./DescriptionProduct";

const ContainerContent = () => {
  return (
    <div className={styles.container}>
      <HeadImage />
      <DescriptionProduct />
    </div>
  );
};

export default ContainerContent;
