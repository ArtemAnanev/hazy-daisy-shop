import Link from "next/link";

const Logo = () => (
  <Link className="logo" href="/">
    <img className="logo__img" src="/nyamulogo.svg" alt="Hazy Daisy Logo" />
  </Link>
);

export default Logo;
