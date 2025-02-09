import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex">
      <Image src="/logo.sv" alt="logo" width={148} height={25} />
      <nav className="hidden sm:flex">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <Link
              href="/"
              className="cursor-default text-[0.8125rem] leading-[1.0625rem] font-normal tracking-[0.09375rem] text-[#242A45] uppercase transition-colors duration-300 ease-in-out hover:text-[#FA5959]"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="cursor-default text-[0.8125rem] leading-[1.0625rem] font-normal tracking-[0.09375rem] text-[#242A45] uppercase transition-colors duration-300 ease-in-out hover:text-[#FA5959]"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="cursor-default text-[0.8125rem] leading-[1.0625rem] font-normal tracking-[0.09375rem] text-[#242A45] uppercase transition-colors duration-300 ease-in-out hover:text-[#FA5959]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
