import React, { useState } from "react";
import styles from "./descriptiotn.module.css";
import Button from "../UI/Button";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import gambar from "@/public/assets/jne.png";
import ShareProduct from "../Share product/ShareProduct";

const DescriptionProduct = () => {
  let [jumlah, setJumlah] = useState(1);
  const incrementHandler = (e) => {
    setJumlah(jumlah++);
    console.log("broo");
  };
  const decrementtHandler = (e) => {
    // e.preventDefault();
    if (jumlah > 1) {
      setJumlah(jumlah--);
    }
  };

  let totalJumlah = 1;

  return (
    <div className={styles.container}>
      <span>
        <h2>
          MILLS Sepatu Sepakbola TROYA CHAOS FG Purple / Lt. Tosca 9302002
        </h2>
      </span>
      <span>
        <p>IDR 469,000</p>
      </span>

      <form>
        <div className={styles.inputan}>
          <div className={styles.customInput}>
            <label htmlFor="warna">Warna</label>
            <select name="warna" id="warna">
              <option value="purple">Purple</option>
            </select>
          </div>
          <div className={styles.customInput}>
            <label htmlFor="size">Size</label>
            <select name="size" id="size">
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
            </select>
          </div>
          <div className={styles.customInput}>
            <label htmlFor="jumlah">Jumlah</label>
            <div className={styles.jumlah}>
              <span
                onClick={decrementtHandler}
                disabled={jumlah == 1 ? true : false}
              >
                -
              </span>
              <p>{jumlah}</p>
              <span onClick={incrementHandler}>+</span>
            </div>
          </div>
        </div>

        <div>
          <Button text={"Masukkan keranjang"} className={"w-full mt-5 md:w-56 lg:w-60"} />
        </div>
      </form>

      <div className={styles.description}>
        <p>
          ACTIVATE THE WARRIOR SENSE WITH MILLS TROYA CHAOS! DOMINATE EVERY
          MINUTE OF YOUR GAME WITH TROYA CHAOS!
          <br />
          <br />
          Sepatu sepakbola pertama dari MILLS siap menggebrak! MILLS Troya Chaos
          akan menjadi pembuka dari karya-karya MILLS Football selanjutnya.
          <br />
          <br />
          Datang dengan identitas terbaru dari MILLS Footwear, Warrior Stripe,
          Troya siap menjadi senjata para pemakainya untuk semakin dominan dan
          eye-catching di lapangan.
          <br />
          <br />
          Sistem stud pada Troya hadir dengan teknologi TRX GRVTY+ yang membuat
          kaki Anda akan memiliki daya cengkram maksimal karena diletakkan pada
          titik traksi yang sesuai.
          <br />
          <br />
          Didukung dengan upper bermateri Mills Exoskin Material upper
          berteknologi yang elastis sintetik yang ringan dan kuat akan mendukung
          mobilitas tinggi para pemakainya di lapangan. Cocok bagi kamu para
          speedster yang mendominasi permainan dengan kecepatan tinggi.
          <br />
          <br />
          Empat corak warna dari mills troya chaos yang akan melengkapi fashion
          style football kalian:
          <br />
          - Black / Gold <br />
          - Cyan / Dk. Blue / Yellow <br />
          - Purple / Lt. Tosca <br />
          - White / Lt. Grey / Gold <br /> <br />
          Tidak hanya untuk sepakbola, Troya Chaos akan tersedia juga untuk
          Futsal. <br /> <br />
          Size Convertion : <br />
          38 : 24,4cm <br />
          39 : 25,1cm <br />
          40 : 25,7cm <br />
          41 : 26,4cm <br />
          42 : 27cm <br />
          43 : 27,7cm <br />
          44 : 28,4cm <br />
          45 : 29cm <br /> <br />
          Dapatkan segera MILLS Troya Chaos di official store, marketplace
          resmi, dan toko distributor MILLS!
        </p>

        <div className={styles.pengiriman}>
          <label htmlFor="pengiriman">Estimasi pengiriman</label>
          <div className={styles.inputPengiriman}>
            <p>IDR 52,000</p>
            <div>
              <Image src={gambar} alt="Jne logo" width={40} />
              <span>
                <AiOutlineRight />
              </span>
            </div>
          </div>
        </div>

        <ShareProduct />
      </div>
    </div>
  );
};

export default DescriptionProduct;
