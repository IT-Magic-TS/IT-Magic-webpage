import { useState, useEffect } from "react";
import Image from "next/image";

export default function SlideShow({ activeImg, images, closeSlideShow }) {
  const [newImgs, setNewImgs] = useState([]);
  const [newActiveImg, setNewActiveImage] = useState("");

  const { src } = activeImg;

  useEffect(() => {
    const splitSrc = src.split("/");
    const newSrc = `/images/${activeImg.type}-big/${splitSrc[3]}`;

    const newImg = { ...activeImg, src: newSrc, active: true };
    setNewActiveImage(newImg);

    if (images) {
      const imgs = images.map(img => {
        const srcArr = img.src.split("/");
        let active = false;
        if (activeImg.id === img.id) {
          active = true;
        }
        return {
          ...img,
          src: `/images/${img.type}-big/${srcArr[3]}`,
          active
        };
      });
      setNewImgs(imgs);
    }
  }, [activeImg, images]);

  const nextBtnHandler = () => {
    if (newActiveImg.id < newImgs.length) {
      setNewActiveImage(newImgs[newActiveImg.id]);
    } else {
      setNewActiveImage(newImgs[0]);
    }
    const editImgs = newImgs.map(prevImg => {
      const active = false;
      let checkId = newActiveImg.id + 1;
      if (checkId > newImgs.length) {
        checkId = 1;
      }
      if (prevImg.id === checkId) {
        active = true;
      } else {
        active = false;
      }
      return { ...prevImg, active };
    });
    setNewImgs(editImgs);
  };

  const prevBtnHandler = () => {
    if (newActiveImg.id > 1) {
      setNewActiveImage(newImgs[newActiveImg.id - 2]);
    } else {
      setNewActiveImage(newImgs[newImgs.length - 1]);
    }
    const editImgs = newImgs.map(prevImg => {
      const active = false;
      let checkId = 0;
      if (newActiveImg.id === 1) {
        checkId = newImgs.length;
      } else {
        checkId = newActiveImg.id - 1;
      }
      if (prevImg.id === checkId) {
        active = true;
      } else {
        active = false;
      }
      return { ...prevImg, active };
    });
    setNewImgs(editImgs);
  };

  const imgHandler = img => {
    setNewActiveImage(newImgs[img.id - 1]);

    const editImgs = newImgs.map(item => {
      const itemActive = false;
      if (item.id === img.id) {
        itemActive = true;
      } else {
        itemActive = false;
      }
      return { ...item, active: itemActive };
    });
    setNewImgs(editImgs);
  };

  return (
    <div className="slideshow">
      <div className="shadow" onClick={() => closeSlideShow()}></div>
      <div className="w3-center container-main">
        <div className="container-img">
          {newActiveImg && (
            <Image
              src={newActiveImg.src}
              alt="Gate"
              width={500}
              height={300}
              layout="responsive"
            />
          )}
        </div>

        <div className="container-navigation">
          <div>
            <button
              onClick={prevBtnHandler}
              className="w3-button w3-amber left-btn"
            >
              ❮ Prev
            </button>
            <button
              onClick={nextBtnHandler}
              className="w3-button w3-amber right-btn"
            >
              Next ❯
            </button>
          </div>
          <div className="w3-margin">
            {newImgs &&
              newImgs.map(item => (
                <button
                  key={item.id}
                  onClick={() => imgHandler(item)}
                  className={
                    item.active
                      ? "w3-button w3-red"
                      : "w3-button w3-text-orange"
                  }
                >
                  <b>{item.id}</b>
                </button>
              ))}
          </div>
          <div className="w3-margin">
            <button
              onClick={() => closeSlideShow()}
              className="w3-btn w3-amber"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
