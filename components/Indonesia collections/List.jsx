import React, { useState } from "react";
import styles from "./list.module.css";
import { MdFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import Items from "../Items/Items";

const List = () => {
  const [saringOpen, setSaringOpen] = useState(false);
  const [urutkanOpen, setUrutkanOpen] = useState(false);

  const saringHandler = () => {
    setSaringOpen(!saringOpen);
    setUrutkanOpen(false);
  };

  const urutkanHandler = () => {
    setUrutkanOpen(!urutkanOpen);
    setSaringOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topFilter}>
        <div className={styles.right}>
          <span onClick={saringHandler}>
            <p>Saring</p>
            {saringOpen ? <MdFilterListOff /> : <MdFilterList />}
          </span>

          <span onClick={urutkanHandler}>
            <p>Urutkan</p>
            {urutkanOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>

          {saringOpen ? (
            <div className={styles.filter}>
              <ul>
                <li>INDONESIA NATIONAL TEAM 2020</li>
                <li>INDONESIA NATIONAL TEAM 2022</li>
              </ul>
            </div>
          ) : (
            ""
          )}

          {urutkanOpen ? (
            <div className={styles.filter}>
              <ul>
                <li>Harga (Terendah ke Tertinggi)</li>
                <li>Harga (Tertinggi ke Terendah)</li>
                <li>Tanggal (Terbaru ke Lama)</li>
              </ul>
            </div>
          ) : (
            ""
          )}
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
