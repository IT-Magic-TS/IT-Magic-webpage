import { useState, useEffect } from "react";
import Image from "next/image";
import SlideShow from "../../components/slide-show/slide-show";

const gates = [
  {
    id: 1,
    src: "/images/gates-small/G-1.png",
    alt: "Gate 1",
    active: false,
    type: "gates"
  },
  {
    id: 2,
    src: "/images/gates-small/G-2.png",
    alt: "Gate 2",
    active: false,
    type: "gates"
  },
  {
    id: 3,
    src: "/images/gates-small/G-3.png",
    alt: "Gate 3",
    active: false,
    type: "gates"
  },
  {
    id: 4,
    src: "/images/gates-small/G-4.png",
    alt: "Gate 4",
    active: false,
    type: "gates"
  },
  {
    id: 5,
    src: "/images/gates-small/G-5.png",
    alt: "Gate 5",
    active: false,
    type: "gates"
  },
  {
    id: 6,
    src: "/images/gates-small/G-6.png",
    alt: "Gate 6",
    active: false,
    type: "gates"
  },
  {
    id: 7,
    src: "/images/gates-small/G-7.png",
    alt: "Gate 7",
    active: false,
    type: "gates"
  },
  {
    id: 8,
    src: "/images/gates-small/G-8.png",
    alt: "Gate 8",
    active: false,
    type: "gates"
  },
  {
    id: 9,
    src: "/images/gates-small/G-9.png",
    alt: "Gate 9",
    active: false,
    type: "gates"
  },
  {
    id: 10,
    src: "/images/gates-small/G-10.png",
    alt: "Gate 10",
    active: false,
    type: "gates"
  }
];

const extras = [
  {
    id: 1,
    src: "/images/extras-small/E-1.png",
    alt: "Extra 1",
    active: false,
    type: "extras"
  },
  {
    id: 2,
    src: "/images/extras-small/E-2.png",
    alt: "Extra 2",
    active: false,
    type: "extras"
  },
  {
    id: 3,
    src: "/images/extras-small/E-3.png",
    alt: "Extra 3",
    active: false,
    type: "extras"
  },
  {
    id: 4,
    src: "/images/extras-small/E-4.png",
    alt: "Extra 4",
    active: false,
    type: "extras"
  },
  {
    id: 5,
    src: "/images/extras-small/E-5.png",
    alt: "Extra 5",
    active: false,
    type: "extras"
  },
  {
    id: 6,
    src: "/images/extras-small/E-6.png",
    alt: "Extra 6",
    active: false,
    type: "extras"
  },
  {
    id: 7,
    src: "/images/extras-small/E-7.png",
    alt: "Extra 7",
    active: false,
    type: "extras"
  },
  {
    id: 8,
    src: "/images/extras-small/E-8.png",
    alt: "Extra 8",
    active: false,
    type: "extras"
  },
  {
    id: 9,
    src: "/images/extras-small/E-9.png",
    alt: "Extra 9",
    active: false,
    type: "extras"
  },
  {
    id: 10,
    src: "/images/extras-small/E-10.png",
    alt: "Extra 10",
    active: false,
    type: "extras"
  }
];

const stairs = [
  {
    id: 1,
    src: "/images/stairs-small/S-1.png",
    alt: "Stairs 1",
    active: false,
    type: "stairs"
  },
  {
    id: 2,
    src: "/images/stairs-small/S-2.png",
    alt: "Stairs 2",
    active: false,
    type: "stairs"
  },
  {
    id: 3,
    src: "/images/stairs-small/S-3.png",
    alt: "Stairs 3",
    active: false,
    type: "stairs"
  },
  {
    id: 4,
    src: "/images/stairs-small/S-4.png",
    alt: "Stairs 4",
    active: false,
    type: "stairs"
  },
  {
    id: 5,
    src: "/images/stairs-small/S-5.png",
    alt: "Stairs 5",
    active: false,
    type: "stairs"
  },
  {
    id: 6,
    src: "/images/stairs-small/S-6.png",
    alt: "Stairs 6",
    active: false,
    type: "stairs"
  },
  {
    id: 7,
    src: "/images/stairs-small/S-7.png",
    alt: "Stairs 7",
    active: false,
    type: "stairs"
  },
  {
    id: 8,
    src: "/images/stairs-small/S-8.png",
    alt: "Stairs 8",
    active: false,
    type: "stairs"
  },
  {
    id: 9,
    src: "/images/stairs-small/S-9.png",
    alt: "Stairs 9",
    active: false,
    type: "stairs"
  },
  {
    id: 10,
    src: "/images/stairs-small/S-10.png",
    alt: "Stairs 10",
    active: false,
    type: "stairs"
  }
];

function GalleryBalustradePage() {
  // Large Screens
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [activeImg, settActiveImg] = useState("");
  const [images, setImages] = useState([]);

  const showBigImg = item => {
    if (item.type === "gates") {
      setImages(gates);
    }
    if (item.type === "extras") {
      setImages(extras);
    }
    if (item.type === "stairs") {
      setImages(stairs);
    }
    settActiveImg(item);
    setShowSlideshow(true);
  };

  const closeSlideShow = () => {
    setShowSlideshow(false);
  };

  // Mobile - Touch Screens
  const [imgsStairsMobile, setImgsStairsMobile] = useState([]);
  const [imgsGatesMobile, setImgsGatesMobile] = useState([]);
  const [imgsExtrasMobile, setImgsExtrasMobile] = useState([]);
  const [showGates, setShowGates] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const getImgsStairsMobile = () => {
    const stairsBig = stairs.map(item => {
      const newSrc = item.src.replace("-small", "-big");
      return { ...item, src: newSrc };
    });
    setImgsStairsMobile(stairsBig);
  };

  const getImgsGatesMobile = () => {
    const gatesBig = gates.map(item => {
      const newSrc = item.src.replace("-small", "-big");
      return { ...item, src: newSrc };
    });
    setImgsGatesMobile(gatesBig);
  };

  const getImgsExtrasMobile = () => {
    const extrasBig = extras.map(item => {
      const newSrc = item.src.replace("-small", "-big");
      return { ...item, src: newSrc };
    });
    setImgsExtrasMobile(extrasBig);
  };

  useEffect(() => {
    getImgsStairsMobile();
    getImgsGatesMobile();
    getImgsExtrasMobile();
  }, []);

  return (
    <>
      <div className="w3-hide-medium w3-hide-small gallery">
        {showSlideshow && (
          <SlideShow
            activeImg={activeImg}
            images={images}
            closeSlideShow={closeSlideShow}
          />
        )}
        <h1 className="w3-center">Stairs and Balustrades</h1>
        <div className="wrapper-photos">
          {stairs.map(item => (
            <div
              key={item.id}
              onClick={() => showBigImg(item)}
              className="gallery-img-div"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={90}
                layout="responsive"
              />
            </div>
          ))}
        </div>
        <h1 className="w3-center">Gates</h1>
        <div className="wrapper-photos">
          {gates.map(gate => (
            <div
              key={gate.id}
              onClick={() => showBigImg(gate)}
              className="gallery-img-div"
            >
              <Image
                src={gate.src}
                alt={gate.alt}
                width={150}
                height={90}
                layout="responsive"
              />
            </div>
          ))}
        </div>

        <h1 className="w3-center">Extra</h1>
        <div className="wrapper-photos">
          {extras.map(item => (
            <div
              key={item.id}
              onClick={() => showBigImg(item)}
              className="gallery-img-div"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={90}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w3-hide-large gallery-mobile">
        <h1 className="w3-center">Stairs & Balustrades</h1>
        <div className="w3-row w3-margin gallery-moble-continer">
          {imgsStairsMobile &&
            imgsStairsMobile.map(item => (
              <div key={item.id} className="w3-col m6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  layout="intrinsic"
                  className="gallery-mobile-img"
                />
              </div>
            ))}
        </div>
        {!showGates && (
          <div className="w3-center w3-margin">
            <button
              onClick={() => setShowGates(true)}
              className="w3-btn w3-dark-grey"
            >
              Show Gates
            </button>
          </div>
        )}
        {showGates && (
          <>
            <h1 className="w3-center">Gates</h1>
            <div className="w3-row w3-margin gallery-moble-continer">
              {imgsGatesMobile &&
                imgsGatesMobile.map(item => (
                  <div key={item.id} className="w3-col m6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={300}
                      layout="intrinsic"
                      className="gallery-mobile-img"
                    />
                  </div>
                ))}
            </div>
          </>
        )}
        {!showExtras && (
          <div className="w3-center w3-margin">
            <button
              onClick={() => setShowExtras(true)}
              className="w3-btn w3-dark-grey"
            >
              Show Extras
            </button>
          </div>
        )}
        {showExtras && (
          <>
            <h1 className="w3-center">Extras</h1>
            <div className="w3-row w3-margin gallery-moble-continer">
              {imgsExtrasMobile &&
                imgsExtrasMobile.map(item => (
                  <div key={item.id} className="w3-col m6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={300}
                      layout="intrinsic"
                      className="gallery-mobile-img"
                    />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default GalleryBalustradePage;
