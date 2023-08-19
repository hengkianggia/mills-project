import React from "react";
import styles from "@/styles/page.module.css";
import Header from "@/components/Collections/Header";
import ContainerContent from "@/components/Product detail/ContainerContent";

const ProductIdentity = () => {
  return (
    <div className={styles.container}>
      <Header title={"detail produk"} />
      <ContainerContent />
    </div>
  );
};

export default ProductIdentity;
