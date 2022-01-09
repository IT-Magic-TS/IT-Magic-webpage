import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Oval Metal Stairs & Balustrade | Wooden Floor</title>
        <meta
          name="description"
          content="Very expensive project. More than 1400 parts all together. Just cost of wood is more than 35,000 pounds."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">
          Oval Metal Stairs & Balustrade - Wooden Floor
        </h1>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/O-1.jpg"
              alt="Oval stair plan view"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/O-2.jpg"
              alt="Spindle balustrade inside"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/O-3.jpg"
              alt="Steel oval stair with spindle balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/O-4.jpg"
              alt="Wooden treads andgallery"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/O-5.jpg"
              alt="Steel spindles 14mm square still with bushes"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/O-6.jpg"
              alt="Convex brass handrail"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">More than 1400 parts</li>
            <li className="w3-hover-light-grey">
              10mm steel stringers and 4mm treads
            </li>
            <li className="w3-hover-light-grey">Wooden treads and galleries</li>
            <li className="w3-hover-light-grey">
              14mm square balusters with bushes glued into treads (bright steel)
            </li>
            <li className="w3-hover-light-grey">
              20x12 top rail(bright steel)
            </li>
            <li className="w3-hover-light-grey">
              Convex pattern handrail (50x14)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
