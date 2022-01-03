import Link from "next/link";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="w3-row w3-dark-grey footer">
      <div className="w3-center text-message">
        Copyright {year} Eve Star | All Rights Reserved |{" "}
        <Link href="/privacy">Privacy Policy</Link> | Site by Peter Krizovnik
      </div>
      <div className="social">
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
    </div>
  );
}

export default Footer;
