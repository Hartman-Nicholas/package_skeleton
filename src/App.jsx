import { Switch, Route, BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PackageTrack from "./pages/PackageTrack";
import PackageList from "./pages/PackageList";
import "./styles/styles.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/packagetrack" exact component={PackageTrack} />
          <Route path="/packageList" exact component={PackageList} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
