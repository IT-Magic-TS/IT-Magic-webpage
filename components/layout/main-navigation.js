import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function MainNavigation() {
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();

  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <div className="navigation desktop">
        {/* Navigation for Desktop */}
        <div className="w3-bar w3-dark-grey w3-large w3-hide-small">
          <div className="w3-content">
            <Link href="/">
              <a className="w3-bar-item w3-button it-magic">IT Magic</a>
            </Link>

            <div className="w3-right links">
              <Link href="/gallery">
                <a
                  className={
                    router.pathname === "/gallery"
                      ? "w3-bar-item w3-button active"
                      : "w3-bar-item w3-button"
                  }
                >
                  Gallery
                </a>
              </Link>
              <Link href="/perfect-stairs">
                <a
                  className={
                    router.pathname === "/perfect-stairs"
                      ? "w3-bar-item w3-button active"
                      : "w3-bar-item w3-button"
                  }
                >
                  Perfect Stairs
                </a>
              </Link>
              <Link href="/apps">
                <a
                  className={
                    router.pathname === "/apps"
                      ? "w3-bar-item w3-button active"
                      : "w3-bar-item w3-button"
                  }
                >
                  Apps
                </a>
              </Link>
              <Link href="/game">
                <a
                  className={
                    router.pathname === "/game"
                      ? "w3-bar-item w3-button active"
                      : "w3-bar-item w3-button"
                  }
                >
                  Game
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Mobile */}
        <div className="w3-bar w3-dark-grey w3-hide-medium w3-hide-large">
          <Link href="/">
            <a className="w3-bar-item w3-button it-magic">IT Magic</a>
          </Link>
          <div className="w3-btn w3-right">
            <img
              onClick={() => setOpenNav(true)}
              src="/svg/reorder_white_36dp.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Navigation Mobile */}
      {openNav && (
        <div className="w3-container w3-dark-grey mobile-links">
          <div className="w3-bar-block">
            <Link href="/">
              <a
                onClick={() => setOpenNav(false)}
                className={
                  router.pathname === "/"
                    ? "w3-bar-item w3-button active"
                    : "w3-bar-item w3-button"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/perfect-stairs">
              <a
                onClick={() => setOpenNav(false)}
                className={
                  router.pathname === "/perfect-stair"
                    ? "w3-bar-item w3-button active"
                    : "w3-bar-item w3-button"
                }
              >
                Perfect Stairs
              </a>
            </Link>
            <Link href="/gallery">
              <a
                onClick={() => setOpenNav(false)}
                className={
                  router.pathname === "/gallery"
                    ? "w3-bar-item w3-button active"
                    : "w3-bar-item w3-button"
                }
              >
                Gallery
              </a>
            </Link>
            <Link href="/apps">
              <a
                onClick={() => setOpenNav(false)}
                className={
                  router.pathname === "/apps"
                    ? "w3-bar-item w3-button active"
                    : "w3-bar-item w3-button"
                }
              >
                Android Apps
              </a>
            </Link>
            <Link href="/privacy">
              <a
                onClick={() => setOpenNav(false)}
                className={
                  router.pathname === "/privacy"
                    ? "w3-bar-item w3-button active"
                    : "w3-bar-item w3-button"
                }
              >
                Privacy Policy
              </a>
            </Link>
          </div>

          <div className="w3-center" style={{ marginTop: "20px" }}>
            <a
              href="https://play.google.com/store/apps/collection/cluster?clp=igNAChkKEzgwNDEzMzkxNTMwOTY1MjAxMzYQCBgDEiEKG2Rldi5pdG1hZ2ljLnN0YWlyY2FsY3VsYXRvchABGAMYAQ%3D%3D:S:ANO1ljIMj2Y&gsr=CkOKA0AKGQoTODA0MTMzOTE1MzA5NjUyMDEzNhAIGAMSIQobZGV2Lml0bWFnaWMuc3RhaXJjYWxjdWxhdG9yEAEYAxgB:S:ANO1ljJEEBQ"
              target="_blank"
              title="Google play store"
            >
              <img src="/svg/google-play.svg" alt="google play store avatar" />
            </a>
            <a
              href="https://www.facebook.com/itmagic.dev/"
              target="_blank"
              title="Facebook"
            >
              <img src="/svg/facebook.svg" alt="facebook avatar" />
            </a>
            <a
              href="https://www.instagram.com/jquerymobile/"
              target="_blank"
              title="Instagram"
            >
              <img src="/svg/instagram.svg" alt="instagram avatar" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC9AyPnSYFeW43RfUskUjCtw"
              target="_blank"
              title="YouTube"
            >
              <img src="/svg/youtube.svg" alt="youtube avatar" />
            </a>
            <a
              href="https://twitter.com/peter03051969"
              target="_blank"
              title="Twitter"
            >
              <img src="/svg/twitter.svg" alt="twitter avatar" />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-michelle-474628202/"
              target="_blank"
              title="LinkedIn"
            >
              <img src="/svg/linkedin.svg" alt="linkedIn avatar" />
            </a>
          </div>
          <div className="w3-center">
            Copyright {year} | Eve Star
            <br />
            Site by Peter Krizovnik
          </div>
          <p className="w3-center">
            <button
              onClick={() => setOpenNav(false)}
              className="w3-btn w3-riple w3-border w3-text-yellow w3-border-yellow"
            >
              <b>Close</b>
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default MainNavigation;
