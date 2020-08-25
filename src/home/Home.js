import React from "react";
import "./Home.css";
import Product from "./product/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://i0.wp.com/digiday.com/wp-content/uploads/2018/08/bannerart_081018_2.jpg?fit=1400%2C600&ssl=1"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          title="Gibson SJ 200 King's Crown Custom Quilt Acoustic Guitar"
          price={67000}
          rating={4}
          image="https://i.pinimg.com/originals/34/cf/12/34cf120725632d18d904287a7ff0b25f.jpg"
        />

        <Product
          id="123443"
          title="Gibson Hummingbird Custom"
          price={110000}
          rating={4}
          image="https://cornermusic.com/images/products/75864.JPG"
        />
      </div>

      <div className="home__row">
        <Product
          id="1749405"
          title="Gibson Dove Original, Antique Natural"
          price={85000}
          rating={5}
          image="https://www.gak.co.uk/cdn-cgi/image/fit=scale-down,width=1500,height=1500/https://58eca9fdf76150b92bfa-3586c28d09a33a8c605ed79290ca82aa.ssl.cf3.rackcdn.com/gibson-dove-original-antique-natural-1119961.jpg"
        />

        <Product
          id="123422"
          title="Taylor GS Mini - Sitka"
          price={35000}
          rating={3}
          image="https://ph-test-11.slatic.net/p/fa0e2a3d3e88eef04cf69d720fa9bb60.jpg"
        />

        <Product
          id="166744"
          title="1999 Martin D-45"
          price={45000}
          rating={4}
          image="https://images.reverb.com/image/upload/s--GTYPyKzB--/f_auto,t_supersize/v1568335076/z3vwuro2daxpbgzdjpih.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5555443"
          title="LR Baggs iBeam Active Acoustic Guitar Pickup and Preamp"
          price={5600}
          rating={4}
          image="https://www.best-price.audio/media/product/963/buy-lr-baggs-ibeam-active-acoustic-guitar-pickup-and-preamp-system-online-usd-186-best-price-b82.jpg"
        />

        
      </div>

      <div className="home__row">
        <Product
          id="34455"
          title="Nord Stage 3 Compact 73-key Stage Keyboard | Sweetwater"
          price={75400}
          rating={4}
          image="https://media.sweetwater.com/api/i/q-85__ha-78997957dc89fee8__hmac-4d031760e9e983dae7cf37f52210852b048b47eb/images/items/1800/Stage3Com-xlarge.jpg"
        />

        <Product
          id="88996"
          title="Yamaha TRB1004J 4-string Bass guitar – Natural"
          price={12400}
          rating={3}
          image="https://www.marshallmusic.co.za/wp-content/uploads/2020/03/XU-TRB1004JNT-1.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
