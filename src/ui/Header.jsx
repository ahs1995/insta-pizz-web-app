import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 ">
      <Link to="/">
        <span className="from-grad-0 via-grad-50 to-grad-100 font-logo rounded-lg  bg-stone-800 bg-gradient-to-r p-1 text-2xl lowercase tracking-wide text-slate-100 md:text-3xl ">
          <span className=" text-fill-color text-stroke-color  bg-clip-text ">
            insta
          </span>
          <span className="uppercase">p</span>
          izza
        </span>
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
