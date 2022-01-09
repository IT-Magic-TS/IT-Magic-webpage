import Image from "next/image";

function Advert() {
  return (
    <div className="advert">
      <div className="w3-card-4 add-A">
        <header className="w3-container w3-amber w3-center">
          <h6>Stair Calculator</h6>
        </header>
        <Image
          src="/images/main/stair-balustrade-calculator.png"
          alt="stair and balustrade calculator"
          height={180}
          width={180}
          priority="true"
          className="add-img"
        />
        <a
          className="w3-button w3-block w3-amber"
          href="https://play.google.com/store/apps/details?id=dev.itmagic.stairandbalustrade"
        >
          View <img src="/svg/arrow_right_black.svg" className="advert-arrow" />
        </a>
      </div>

      <div className="w3-card-4 add-B">
        <header className="w3-container w3-amber w3-center">
          <h6>Railing Calculator</h6>
        </header>
        <Image
          src="/images/main/railing-calculator.png"
          alt="railing calculator"
          height={180}
          width={180}
          priority="true"
          className="add-img"
        />
        <a
          className="w3-button w3-block w3-amber"
          href="https://play.google.com/store/apps/details?id=dev.itmagic.simplepanelcalculator"
        >
          View <img src="/svg/arrow_right_black.svg" className="advert-arrow" />
        </a>
      </div>
    </div>
  );
}

export default Advert;
