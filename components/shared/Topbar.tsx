import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

function Topbar() {
    return <nav className="topbar">
      <Link href="/" className="flex items-center gap-4"><Image src="/assets/logo.svg" width={28} height={28} alt="logo" />
      <p className="text-heading2-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
    </nav>;
}

export default Topbar;
