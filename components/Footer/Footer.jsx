import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styles from "./footer.module.css";
import Button from "../UI/Button";
import Link from "next/link";

const Footer = () => {
  const [cusutomerOpen, setCustomerOpen] = useState(false);
  const [informationOpen, setInformationOpen] = useState(false);

  const customerhandler = () => {
    setCustomerOpen(!cusutomerOpen);
  };

  const informationHandler = () => {
    setInformationOpen(!informationOpen);
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.first}>
          <h2>Ikuti kami</h2>
          <p>
            Berlangganan berita dan dapatkan penawaran eksklusif setiap minggu
          </p>

          <div className={styles.inputForm}>
            <input
              type="text"
              placeholder="Masukka email anda"
              className={styles.input}
            />
            <Button text={"Langganan"} />
          </div>

          <div className={styles.sosmed}>
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        {/* for mobile */}
        <div className={styles.footerMobile}>
          <div className={styles.down}>
            <h2>Customer Services</h2>
            <span onClick={customerhandler}>
              {cusutomerOpen ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </span>
          </div>

          {cusutomerOpen ? (
            <div>
              <ul>
                <li>
                  <Link href={""}>About Us </Link>
                </li>
                <li>
                  <Link href={""}>How To Order </Link>
                </li>
                <li>
                  <Link href={""}>Shipping Methods </Link>
                </li>
                <li>
                  <Link href={""}>Payment Methods </Link>
                </li>
                <li>
                  <Link href={""}>FAQ </Link>
                </li>
                <li>
                  <Link href={""}>Payment </Link>
                </li>
                <li>
                  <Link href={""}>Confirmation </Link>
                </li>
                <li>
                  <Link href={""}>Contact Us </Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.footerMobile}>
          <div className={styles.down}>
            <h2>Information</h2>
            <span onClick={informationHandler}>
              {informationOpen ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </span>
          </div>

          {informationOpen ? (
            <div>
              <ul>
                <li>
                  <Link href={""}>About MILLS </Link>
                </li>
                <li>
                  <Link href={""}>Blog </Link>
                </li>
                <li>
                  <Link href={""}>Privacy Policy </Link>
                </li>
                <li>
                  <Link href={""}>Exchange & Return</Link>
                </li>
                <li>
                  <Link href={""}>Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* for laptop */}
        <div className={styles.footerLaptop}>
          <h2>Customer Services</h2>
          <div>
            <ul>
              <li>
                <Link href={""}>About Us </Link>
              </li>
              <li>
                <Link href={""}>How To Order </Link>
              </li>
              <li>
                <Link href={""}>Shipping Methods </Link>
              </li>
              <li>
                <Link href={""}>Payment Methods </Link>
              </li>
              <li>
                <Link href={""}>FAQ </Link>
              </li>
              <li>
                <Link href={""}>Payment </Link>
              </li>
              <li>
                <Link href={""}>Confirmation </Link>
              </li>
              <li>
                <Link href={""}>Contact Us </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerLaptop}>
          <h2>Information</h2>
          <div>
            <ul>
              <li>
                <Link href={""}>About MILLS </Link>
              </li>
              <li>
                <Link href={""}>Blog </Link>
              </li>
              <li>
                <Link href={""}>Privacy Policy </Link>
              </li>
              <li>
                <Link href={""}>Exchange & Return</Link>
              </li>
              <li>
                <Link href={""}>Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <p>COPYRIGHT © 2023 PNGKY </p>
      </div>
    </>
  );
};

export default Footer;
