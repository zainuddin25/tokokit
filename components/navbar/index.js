import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full py-5 fixed top-0 bg-white z-40">
      <div className="container flex mx-auto items-center justify-between px-4 lg:px-0">
        <h1 className="font-poppins font-bold text-3xl text-textPrimary">
          TOKOKIT
        </h1>
        <ul className="flex justify-center">
          <li className="px-5">
            <Link href={"/"}>
              <a className="font-poppins font-medium text-sm text-textSecondary ease-in-out duration-200">
                Beranda
              </a>
            </Link>
          </li>
          <li className="px-5">
            <Link href={"/"}>
              <a className="font-poppins font-medium text-sm text-textSecondary ease-in-out duration-200">
                Produk
              </a>
            </Link>
          </li>
          <li className="px-5">
            <Link href={"/"}>
              <a className="font-poppins font-medium text-sm text-textSecondary ease-in-out duration-200">
                Ulasan
              </a>
            </Link>
          </li>
          <li className="px-5">
            <Link href={"/"}>
              <a className="font-poppins font-medium text-sm text-textSecondary ease-in-out duration-200">
                Toko
              </a>
            </Link>
          </li>
          <li className="px-5">
            <Link href={"/"}>
              <a className="font-poppins font-medium text-sm text-textSecondary ease-in-out duration-200">
                Hubungi Kami
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
