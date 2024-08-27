import { Link } from "react-router-dom";
import { setPage } from "../features/global/globalSlices";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const { page } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <nav className="bg-slate-800 text-white fixed bottom-0 max-w-[1024px] w-full p-4 z-10">
      <ul className="flex justify-between items-center text-4xl">
        <li className="mx-2">
          <Link onClick={() => dispatch(setPage("home"))} to="/">
            {page === "home" ? (
              <ion-icon name="home"></ion-icon>
            ) : (
              <ion-icon name="home-outline"></ion-icon>
            )}
          </Link>
        </li>
        <li className="mx-2 flex">
          <Link onClick={() => dispatch(setPage("cart"))} to="/cart">
            {page === "cart" ? (
              <ion-icon name="cart"></ion-icon>
            ) : (
              <ion-icon name="cart-outline"></ion-icon>
            )}
          </Link>
        </li>
        <li className="mx-2 flex">
          <Link onClick={() => dispatch(setPage("about"))} to="/about">
            {page === "about" ? (
              <ion-icon name="help-circle"></ion-icon>
            ) : (
              <ion-icon name="help-circle-outline"></ion-icon>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
