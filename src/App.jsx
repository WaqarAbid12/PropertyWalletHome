import logo from "./images/mainlogo.png";
import img2 from "./images/Agency.png";
import img3 from "./images/freelancer.png";
import img4 from "./images/freelancer.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(0);

  const arrayObject = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "PropertWalletApp",
    },
    {
      title: "SmartPoint",
    },
    {
      title: "Pricing",
    },
  ];

  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="menu-left">
          <ol className="menu">
            {arrayObject.map((item, i) => (
              <>
                <li
                  style={{
                    color: active == i ? "#27a3a3" : "#000000",
                    listStyle: "none",
                  }}
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  {item?.title}{" "}
                </li>
              </>
            ))}
          </ol>
          <a href="https://www.propertywallet.pk/" target="_blank">
            {" "}
            <button className="button">
              {" "}
              Become a Property Wallet Partner
            </button>
          </a>
        </div>
      </div>

      {/* {arrayObject.map((item, i) =>
        
      )} */}

      {arrayObject.map((item, i) =>
        (active == i) & (item.title == "PropertWalletApp") ? (
          <div className="main">
            <div className="vis">
              <img src={img2} className="img" />

              <h2 style={{ color: "red" }}>premium </h2>
              <p className="text" style={{ lineHeight: "1.5715" }}>
                specialist.
              </p>
              <>
                <p> Lorem ipsum,qwerty .</p>
              </>
            </div>

            <div className="mai">
              <div className="free">
                <img src={img3} className="mg" />

                <h2 className="hed" style={{ color: "green" }}>
                  Free
                </h2>
                <p className="txt" style={{ lineHeight: "1.5715" }}>
                  You can easily navigate through our <br/>
                  app
                </p>
                <>
                  <button className="cadbt"> Control With Agency</button>
                </>
              </div>
            </div>
          </div>
        ) :
         (active == i) & (item.title == "About") ? (
          <div className="about">
            <h2>Property </h2>
          </div> 
        ) :
        (active == i) & (item.title == "SmartPoint") ? (
          <h2 className="about">Wallet</h2>
        ): 
        (active == i) & (item.title == "Pricing") ? (
          <img src={img4} className="imj"/>): (active == i) & (item.title == "Home") ? (
          <div className="main">
            <div className="vis">
              <img src={img2} className="img" />

              <h2 className="head" style={{ color: "#3d4350" }}>
                Agency
              </h2>
              <p className="text" style={{ lineHeight: "1.5715" }}>
                You can easily navigate through our <br />
                app without being a tech specialist.
              </p>
              <>
                <a href="https://www.propertywallet.pk/pricing-agency">
                  {" "}
                  <button className="cardbt"> Control With Agency</button>{" "}
                </a>
              </>
            </div>

            <div className="mai">
              <div className="free">
                <img src={img3} className="mg" />

                <h2 className="hed" style={{ color: "#3d4350" }}>
                  Freelancer
                </h2>
                <p className="txt" style={{ lineHeight: "1.5715" }}>
                  You can easily navigate through our <br />
                  app without being a tech specialist.
                </p>
                <>
                  <a href="https://www.propertywallet.pk/pricing-freelancer">
                    {" "}
                    <button className="cadbt"> Control With Agency</button>
                  </a>
                </>
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* condition for selecting the other tab in navbar */}

      {/* {arrayObject.map((item, i) =>
      {/* (active == i) & (item.title == "SmartPoint") ? (
          <h2>Huzaifa</h2>
        ) :null
       */}
        {/* (active == i) & (item.title == "SmartPoint") ? (
          <h2>Huzaifa</h2>
        ) :null
       */}

      {/* {arrayObject.map((item, i) =>
        (active == i) & (item.title == "Pricing") ? (
          <img src={img4} className="imj"/>
        ) :null
      )} */}
    </>
  );
}

export default App;
