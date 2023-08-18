import Header from "@/components/Indonesia collections/Header";
import React from "react";
import styles from "./indonesia.module.css";
import List from "@/components/Indonesia collections/List";

const IndonesiaCollections = () => {
  return (
    <div className={styles.container}>
      <Header />
      <List />
    </div>
  );
};

export default IndonesiaCollections;
