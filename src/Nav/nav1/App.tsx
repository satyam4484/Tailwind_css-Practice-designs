import search from "../../assests/search.png"

const App = () => {
  return (
    <nav className="flex justify-around h-16 items-center shadow-lg relative">
      <a href="/" className="nav-link text-2xl font-sans">Startup 3</a>
      <ul className="flex gap-4 justify-around text-[#1E0E62] font-sans">
        {['Home', 'Feature', 'Blog', 'Shop'].map((item) => (
          <li
            key={item}
            className="nav-item"
          >
            {item}
          </li>
        ))}
        <li className="mt-1 cursor-pointer">
          <img src={search} alt="Search" />
        </li>
      </ul>
      <div className="flex justify-around lg:gap-4 md:gap-3">
        <button className="btn-signin">Sign in</button>
        <button className="btn-signup">Sign up</button>
      </div>
    </nav>
  );
}

export default App;