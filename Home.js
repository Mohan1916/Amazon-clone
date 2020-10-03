import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/a2/34/c2/a234c2f4f5b82db1b5a4acc7d0575480.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="ASUS VivoBook 15 Intel Core i5-1035G1 10th Gen 15.6-inch FHD Thin and Light Laptop (8GB RAM/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/2GB NVIDIA MX330 Graphics/Silver/1.75 kg), X512JP-EJ231TS"
            price={200}
            image="https://images-na.ssl-images-amazon.com/images/I/71GfX5kRgwL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={150.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Apple AirPods with Wireless Charging Case"
            price={100}
            image="https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_SX480_SY360_.jpg"
            rating={5}
          />
          <Product
            title="The 7 Habits of Highly Effective People Paperback – 14 June 2020"
            price={60.55}
            image="https://images-na.ssl-images-amazon.com/images/I/51CFUA2N4OL._SX326_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)"
            price={50}
            image="https://images-na.ssl-images-amazon.com/images/I/61MVJyOfuBL._SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Fire TV Stick streaming media player with Alexa built in, includes all-new Alexa Voice Remote, HD, easy set-up, released 2019"
            price={125.55}
            image="https://images-na.ssl-images-amazon.com/images/I/61Jfoyb-kjL._SL1000_.jpg"
            rating={4}
          />
          <Product
            title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
            price={75.85}
            image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
