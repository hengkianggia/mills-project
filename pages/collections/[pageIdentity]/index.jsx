import Header from "@/components/Collections/Header";
import React from "react";
import styles from "@/styles/page.module.css";
import List from "@/components/Collections/List";
import { useRouter } from "next/router";

const IndonesiaCollections = () => {
  const router = useRouter();
  const namePage = router.query.pageIdentity;

  return (
    <div className={styles.container}>
      <Header title={namePage} />
      <List />
    </div>
  );
};

export default IndonesiaCollections;
