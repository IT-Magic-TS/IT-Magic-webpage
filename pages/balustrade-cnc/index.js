import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Metal Stairs & Balustrade | Water-Jet Cutting</title>
        <meta
          name="description"
          content="More than 1200 parts. Veery popular design and with perfet 3D model not difficult to make. Everything cut and marked on water-jet cnc machine."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">
          Metal Stairs & Balustrade - Water-Jet Cutting
        </h1>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/X-1.jpg"
              alt="Double corner stair with expensive balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/X-2.jpg"
              alt="Perfect corner stairs"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/X-3.jpg"
              alt="Wooden handrail, steel balustrade cut with water-jet cnc"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/X-4.jpg"
              alt="Start of balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/X-5.jpg"
              alt="Steel spindles 14mm square still with bushes"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/X-6.jpg"
              alt="Marked balustrade suit bending templates"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/X-7.jpg"
              alt="Plan in 2D before design 3D"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/X-8.jpg"
              alt="Balustrade design - SolidWorks 2D sketcher"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">More than 1200 parts</li>
            <li className="w3-hover-light-grey">
              Perfect 3D model - not difficult to make
            </li>
            <li className="w3-hover-light-grey">
              All parts and templates marked
            </li>
            <li className="w3-hover-light-grey">
              Balustrade glued into finish floors, legs covered with bushes
            </li>
            <li className="w3-hover-light-grey">
              3D modeling and laser or water-jet cutting simplify work and
              shorten production time.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
