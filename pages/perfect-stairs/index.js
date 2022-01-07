import Image from "next/image";
import Head from "next/head";

export default function OvalStairs() {
  return (
    <>
      <Head>
        <title>Helical Stairs & Glass Balustrade</title>
        <meta name="description" content="Perfect Stairs & Balustrade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="w3-center main-posts-h1">Perfect Stairs & Balustrade</h1>
        <div className="w3-margin">
          <ul>
            <li className="emoji-list">&#9989; = Profit </li>
            <li className="emoji-list">
              &#9989; &#9989; &#9989; &#9989;... = New Year Bonus{" "}
            </li>
          </ul>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/Y2.jpg"
              alt="Corner stairs simple design"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/Y4.jpg"
              alt="Perfect stairs with balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul>
            <li className="emoji-list">&#10060; = No profit </li>
            <li className="emoji-list">
              &#10060; &#10060; &#10060; &#10060;... = Out of business{" "}
            </li>
          </ul>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/Y1.jpg"
              alt="Corner stairs - no planning about balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/Y3.jpg"
              alt="Handrail with a lot of transitions"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </>
  );
}
