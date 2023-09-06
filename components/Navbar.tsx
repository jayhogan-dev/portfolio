import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link
        href="/contact"
        className="bg-gradient-to-br from-cyan-800 via-cyan-400 to-yellow-300 relative h-10 w-10 hover:scale-110 rounded-lg"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          fill
        />
      </Link>
      <article className="flex items-center justify-between gap-5">
        <ul className="flex items-center justify-between gap-5 text-small-regular">
          {routes.map((route) => (
            <li key={route.label}>
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
          <li>Resume</li>
        </ul>
        <Image
          src="/web-icons/line.svg"
          alt="divider"
          height={2}
          width={2}
        />
      </article>
    </nav>
  );
};

export default Navbar;
