import Image from "next/image";

function CalculatorStair() {
  return (
    <>
      <div className="desktop-container">
        <div className="app-container">
          <a
            href="https://play.google.com/store/apps/details?id=dev.itmagic.stairandbalustrade"
            target="_blank"
          >
            <div>
              <Image
                src="/images/android/S1.PNG"
                alt="Stai & Balustrade Calculator"
                width={840}
                height={240}
                layout="intrinsic"
              />
            </div>
            <div className="apps-imgs">
              <div>
                <Image
                  src="/images/android/S2.PNG"
                  alt="List of calculations"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/S3.PNG"
                  alt="Spiral stair calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/S4.PNG"
                  alt="Stair building regulations"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/S5.PNG"
                  alt="Stair calculator - spindle per tread"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="app-container">
          <a
            href="https://play.google.com/store/apps/details?id=dev.itmagic.simplepanelcalculator"
            target="_blank"
          >
            <div>
              <Image
                src="/images/android/R1.PNG"
                alt="Railing Calculator - Panels With Verical Bars"
                width={840}
                height={240}
                layout="intrinsic"
              />
            </div>
            <div className="apps-imgs">
              <div>
                <Image
                  src="/images/android/R2.PNG"
                  alt="Railing Section Calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/R3.PNG"
                  alt="Simple panel calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/R4.PNG"
                  alt="Panel bar hoop calculatr"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/R6.PNG"
                  alt="Curved Section Calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="app-container">
          <a
            href="https://play.google.com/store/apps/details?id=dev.itmagic.gatecalculator"
            target="_blank"
          >
            <div>
              <Image
                src="/images/android/G1.PNG"
                alt="Gate Calculator"
                width={840}
                height={240}
                layout="intrinsic"
              />
            </div>
            <div className="apps-imgs">
              <div>
                <Image
                  src="/images/android/G2.PNG"
                  alt="Gate Calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/G3.PNG"
                  alt="Gate single bar calculator"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/G4.PNG"
                  alt="Gate calculatr"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
              <div>
                <Image
                  src="/images/android/G5.PNG"
                  alt="Calculate start points"
                  width={400}
                  height={740}
                  layout="intrinsic"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default CalculatorStair;
