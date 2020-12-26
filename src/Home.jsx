import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Dec2020/GW/DesktopHero_reward_1500x600_7._CB414473374_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="11111111"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={299}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id="22222222"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={259}
            image={
              "https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="33333333"
            title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminium Case with White Sport Band"
            price={19999}
            image={
              "https://m.media-amazon.com/images/I/71fmZDBPqPL._AC_UL320_.jpg"
            }
            rating={4}
          />
          <Product
            id="44444444"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
            price={9899}
            image={
              "https://m.media-amazon.com/images/I/51DZUkYtWfL._AC_UY218_.jpg"
            }
            rating={4}
          />
          <Product
            id="55555555"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Grey (2nd Generation)"
            price={59899}
            image={
              "https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="66666666"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={59899}
            image={
              "https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
