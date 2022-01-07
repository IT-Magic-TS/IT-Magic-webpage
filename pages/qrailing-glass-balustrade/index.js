import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Q-Railing - Glass Balustrade</title>
        <meta
          name="description"
          content="Glass Balustrade from standard q-railings componentsQ-Railing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">
          Q-Railing - Glass Balustrade
        </h1>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-1.jpg"
              alt="Q-Railing glass balustrade 3D model"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-2.jpg"
              alt="Q-Railing glass balustrad plan view"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-3.jpg"
              alt="Q-railing glass balustrade front view"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-4.jpg"
              alt="Glass balustrade inside fixings"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-5.jpg"
              alt="Q-Railing standard components"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/CG-6.jpg"
              alt="17mm glass laminated panels"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">
              Glass balustrade from Q-Railing standard parts
            </li>
            <li className="w3-hover-light-grey">Easy to assembly together</li>
            <li className="w3-hover-light-grey">
              Perfect 3D and 2D drawings -nice job with profit
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
