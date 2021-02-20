import Link from "next/link";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/api/texts">Cookies text api</Link>
      </li>
    </ul>
  );
};

export default Menu;
