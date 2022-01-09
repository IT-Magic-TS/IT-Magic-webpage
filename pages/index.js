import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Design | 2D cad Drawings | Mobile Web Developing</title>
        <meta
          name="description"
          content="Cutting-edge custom 3D models with gorgeous design from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <div className="w3-center main-img">
          <Image
            src="/images/main/ship-wheel-300.png"
            alt="ship wheel"
            height={300}
            width={300}
            priority="true"
          />
          <h1 className="w3-text-brown">
            3D design, 2D cad drawings, and water-jet cnc programming
          </h1>
          <h2 className="w3-text-brown ">
            Experiences from the most expensive housing market. Is easy to
            repair 3D model, 2D drawing. Maket it perfect for production. Save
            time and sell it with profit &#8987;&#127774;&#127906;
          </h2>
        </div>
        <div className="w3-row w3-container">
          <div className="w3-row">
            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/oval-stairs-300x200.jpg"
                  alt="bob rai oval stairs"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Oval Stairs</h3>
                  <p>Unique stairs & balustrades - more than 1400 parts</p>
                </div>
                <Link href="/oval-stairs">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/corner-stairs.jpeg"
                  alt="metal corner stairs and balustrade"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Metal Stairs & Balustrade</h3>
                  <p>
                    3D design with more than 1200 parts (2x stairs and long
                    gallery).
                  </p>
                </div>
                <Link href="/balustrade-cnc">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/podestrian-gates.jpg"
                  alt="metal podestrian gates"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Pedestrian gates</h3>
                  <p>
                    All srcolls designed for laser or water-jet cnc cutting.
                  </p>
                </div>
                <Link href="/pedestrian-gates">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/helical-stair.jpg"
                  alt="q-railing glass balustrade"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Helical Stairs</h3>
                  <p>Metal stairs with glass balustrade inside and outside.</p>
                </div>
                <Link href="/helical-stair">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/stair-glass-balustrade.jpg"
                  alt="q-railing glass balustrade"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Glass Balustrade</h3>
                  <p>
                    Metal construction and glass balustrade. Is challenge to
                    make. Can be expensive.
                  </p>
                </div>
                <Link href="/metal-stairs-glass-balustrade">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="w3-col l4 m6 s12 w3-center">
              {/* CARD */}
              <div className="w3-card-4 w3-margin">
                <Image
                  src="/images/main/glass-balustrade.jpg"
                  alt="q-railing glass balustrade"
                  height={200}
                  width={300}
                  priority="true"
                />
                <div className="w3-container w3-center">
                  <h3>Glass Balustrade</h3>
                  <p>
                    Buy Glass and Q-railing standard parts online. Low cost
                    balustrade.
                  </p>
                </div>
                <Link href="/qrailing-glass-balustrade">
                  <a className="w3-button w3-block w3-dark-grey">
                    View{" "}
                    <img
                      src="/svg/arrow_right.svg"
                      alt="arrow-right"
                      className="arrow-right"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
