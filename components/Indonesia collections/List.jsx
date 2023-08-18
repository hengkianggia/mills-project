import React from "react";
import styles from "./list.module.css";
import { MdFilterList } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import Items from "../Items/Items";

const List = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topFilter}>
        <div className={styles.right}>
          <span>
            <p>Saring</p>
            <MdFilterList />
          </span>

          <span>
            <p>Urutkan</p>
            <AiOutlineDown />
          </span>
        </div>
      </div>

      <div className={styles.listContainer}>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default List;
