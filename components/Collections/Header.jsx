import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = ({title}) => {
  return (
    <header className={`${styles.header}`}>
      <h1>{title}</h1>
      <div>
        <span>
          <Link href={"/"}>
            Beranda {'>'}
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
