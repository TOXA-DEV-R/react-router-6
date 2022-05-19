/** @format */

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about" className="btn">
        About
      </Link>
      <Outlet />
    </div>
  );
};
export default Home;
