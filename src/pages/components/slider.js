import React from "react";
import "./style.css";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Image5 from "../../assets/images/image5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const items = [
    {
      image: Image1,
      pills: [
        "Webflow Development",
        "UI/UX Design",
        "Webflow Training",
        "Graphic Design",
      ],
      heading: "Hacien",
      description:
        "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging, and marketing assets as well as 3D renders of their signature bottles.",
      link: "https://www.phunk.co.uk/work/hacien",
    },
    {
      image: Image2,
      pills: [
        "Splash Screens",
        "Illustrations",
        "Graphic Design",
        "Lottie Animations",
        "Webflow Training",
      ],
      heading: "Mobilleo",
      description:
        "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",

      link: "https://www.phunk.co.uk/work/mobillio",
    },
    {
      image: Image3,
      pills: [
        "Webflow Development",
        "UI/UX Design",
        "Webflow Training",
        "Graphic Design",
      ],
      heading: "Mannson Freight",
      description:
        "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
      link: "https://www.phunk.co.uk/work/mannson-freight",
    },
    {
      image: Image4,
      pills: [
        "Webflow Development",
        "UI/UX Design",
        "Webflow Training",
        "Graphic Design",
      ],
      heading: "BOX iQ",
      description:
        "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
      link: "https://www.phunk.co.uk/work/box-iq",
    },
    {
      image: Image5,
      pills: [
        "Webflow Development",
        "Visual Identity",
        "Packaging",
        "Apparel & Merchandise",
      ],
      heading: "The Honest Watch Dealer",
      description:
        "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
      link: "https://www.phunk.co.uk/work/honest-watch-dealer",
    },
  ];

  return (
    <div className="scroll-container container">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="imageDiv">
            <img src={item.image} alt={`image ${index + 1}`} height="400px" />
          </div>

          <div className="rightBottomDiv">
            <div>
              <div className="pills">
                {item.pills.map((pill, pillIndex) => (
                  <div key={pillIndex} className="pill-item">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="heading-style">{item.heading}</h1>

              <p style={{ color: "#696969", fontSize: "13px" }}>
                {item.description}
              </p>
            </div>

            <a href={item.link} className="linktag">
              <div style={{ color: "white", fontSize: "13px" }}>
                See full case study
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="white"
                  style={{
                    transform: "rotate(-45deg)",
                    transition: "transform 0.3s",
                    fontSize: "13px",
                  }}
                />
              </div>
            </a>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
