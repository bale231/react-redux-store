function Searchbar() {
  return (
    <form className=" max-w-[1024px] w-full pb-3 pt-3 fixed z-[99999] bg-[#1E293B] top-0">
      <label
        htmlFor="default-search"
        className="flex justify-center items-center"
      >
        <div className="w-10 flex justify-center text-3xl items-center">
          <button className="flex justify-center items-center">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className="w-[80%] p-2 m-2 text-[#232323] border-none active:border-none focus:outline-none"
        />
      </label>
    </form>
  );
}

export default Searchbar;
