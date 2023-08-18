import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <h1>Indonesia Collections</h1>
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
