import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const renderHello = () => {
    if (location.pathname === "/") {
      return <div>hello</div>;
    }
  };

  console.log(location);
  return (
    <header className="header">
      <h1>Package Track</h1>
      {renderHello()}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packagetrack">Package Tracking</Link>
        </li>
      </ul>
    </header>
  );
}
