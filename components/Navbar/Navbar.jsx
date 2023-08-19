import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import image from "../../public/assets/favicon.ico";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Link href={"/"}>
            <Image src={image} className={styles.image} />
          </Link>
        </div>

        {open ? (
          <div className={styles.list}>
            <ul>
              <li onClick={openHandler}>
                <Link href={"/collections/indonesia collections"}>
                  INDONESIA NATIONAL TEAM
                </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/football club"}>FOOTBALL CLUB</Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/basketball club"}>
                  BASKETBALL CLUB
                </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/men"}>MEN </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/women"}>WOMEN </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/kids"}>KIDS</Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/footwear"}>FOOTWEAR </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/brands"}>BRANDS </Link>
              </li>
              <li onClick={openHandler}>
                <Link href={"/collections/sale"}>SALE </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className={styles.listLaptop}>
          <ul>
            <li>
              <Link href={"/collections/indonesia collections"}>
                INDONESIA NATIONAL TEAM
              </Link>
            </li>
            <li>
              <Link href={"/collections/football club"}>FOOTBALL CLUB</Link>
            </li>
            <li>
              <Link href={"/collections/basketball club"}>BASKETBALL CLUB</Link>
            </li>
            <li>
              <Link href={"/collections/men"}>MEN </Link>
            </li>
            <li>
              <Link href={"/collections/women"}>WOMEN </Link>
            </li>
            <li>
              <Link href={"/collections/kids"}>KIDS</Link>
            </li>
            <li>
              <Link href={"/collections/footwear"}>FOOTWEAR </Link>
            </li>
            <li>
              <Link href={"/collections/brands"}>BRANDS </Link>
            </li>
            <li>
              <Link href={"/collections/sale"}>SALE </Link>
            </li>
          </ul>
        </div>

        <div className={styles.burger} onClick={openHandler}>
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div className={styles.cart}>
          <span>
            <FaUserAlt />
          </span>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </nav>

      <div className={styles.menuBottom}>
        <div className={styles.itemBottom}>
          <AiFillHome />
          <p>Beranda</p>
        </div>
        <div className={styles.itemBottom}>
          <BsFillGridFill />
          <p>Beranda</p>
        </div>
        <div className={styles.itemBottom}>
          <AiOutlineShoppingCart />
          <p>Keranjang</p>
        </div>
        <div className={styles.itemBottom}>
          <FaUserAlt />
          <p>Masuk</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
