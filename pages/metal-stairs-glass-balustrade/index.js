import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Metal Stairs with Laminated Glass Balustrade</title>
        <meta
          name="description"
          content="Qnique and expensive steel oval stairs with spindles balustrade. Only wood cost more than 35,000 pounds"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">
          Metal Stairs with Glass Balustrade - Pandora Construction
        </h1>
        <p>
          Fun to design - not so easy to make. Probably better to wrapp
          stringers and treads with wood. So much hastle to make powder coated
          steel surfaces perfect.
        </p>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-1.jpg"
              alt="Metal corner stair and glass balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-2.jpg"
              alt="Glass fixed with stainless clamps to stringers"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-3.jpg"
              alt="Handrail from steel profile"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-4.jpg"
              alt="Steel finished treads"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-5.jpg"
              alt="Laminated Glass panels fixed with clamps - gallery"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/PC-6.jpg"
              alt="Handrail with sharp transition"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">
              Is fun to design - complicated to make.
            </li>
            <li className="w3-hover-light-grey">
              Steel stairs - powder coating finish
            </li>
            <li className="w3-hover-light-grey">
              Steel stairs - powder coating finish
            </li>
            <li className="w3-hover-light-grey">
              Laminated glass panels fixed with clamps to stringers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
