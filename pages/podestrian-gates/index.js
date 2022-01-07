import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Podestrian Gates</title>
        <meta
          name="description"
          content="Unique podestrian gates for expensive London housing market"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">Podestrian Gates</h1>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/GP-1.jpg"
              alt="Podestrian gates with railings"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/GP-2.jpg"
              alt="Podestrian gates victorian style"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/GP-3.jpg"
              alt="Scrolls cut with water-jet cnc"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/GP-4.jpg"
              alt="Metal scroll cut on cnc"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul className="w3-ul">
            <li className="w3-hover-light-grey">
              Unique podestrian gates for London housing market
            </li>
            <li className="w3-hover-light-grey">
              Metal scrolls cut on water-jet or laser cnc machine.
            </li>
            <li className="w3-hover-light-grey">
              Frames made from solid square bars
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
