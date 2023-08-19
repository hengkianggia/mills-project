import React from "react";
import styles from "./share.module.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";

const ShareProduct = () => {
  return (
    <div className={styles.container}>
      <p>Bagikan produk ini</p>
      <div>
        <span>
          <BiLogoFacebook />
        </span>
        <span>
          <BiLogoTwitter />
        </span>
        <span>
          <BiLogoLinkedin />
        </span>
        <span>
          <BiLogoWhatsapp />
        </span>
        <span>
          <BiLogoGmail />
        </span>
        <span>
          <BiLogoTelegram />
        </span>
      </div>
    </div>
  );
};

export default ShareProduct;
