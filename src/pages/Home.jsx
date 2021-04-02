import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1>Welcome To package Tracker</h1>
      <Link className="link" to="/packagetrack">
        Click Here to package
      </Link>
      <div>Home</div>
    </section>
  );
}
