import { Link } from "react-router-dom";
import PackageList from "./PackageList";

export default function PackageTrack() {
  return (
    <section className="packageTrack">
      <h1>Please find your package here</h1>
      <Link className="link" to="/packageList">
        {" "}
        To Package List
      </Link>
      <PackageList />
      <div>PackageTracker</div>
    </section>
  );
}
