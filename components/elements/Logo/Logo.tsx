import Link from "next/link";

const Logo = () => (
  <Link className="logo" href="/">
    <img className="logo__img" src="/logo.svg" alt="Hazy Daisy Logo" />
  </Link>
);

export default Logo;
