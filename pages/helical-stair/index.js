import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Helical Stairs & Glass Balustrade</title>
        <meta
          name="description"
          content="Unique podestrian gates for expensive London housing market"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">
          Helical Stairs & Glass Balustrade
        </h1>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/TO-1.jpg"
              alt="3D Model Metal Helical Stairs"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/TO-2.jpg"
              alt="Glass balustrade inside and outside"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/TO-3.jpg"
              alt="10mm and 6mm metal stringers"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/TO-4.jpg"
              alt="Oval wooden handrail"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">
              Is not so difficult to desig, take challenge to make.
            </li>
            <li className="w3-hover-light-grey">
              Stair treads make the helical shape.
            </li>
            <li className="w3-hover-light-grey">
              Gap between stringer 10mm and stringer 6mm is from 20mm to 30mm.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
