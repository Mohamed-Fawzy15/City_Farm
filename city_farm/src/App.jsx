import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./component/loading/loadin";

// Lazy load the components
const HomePage = lazy(() => import("./component/home/HomePage"));
const About = lazy(() => import("./component/AboutUs/About"));
const Categroies = lazy(() => import("./component/Categroies/Categroies"));
const FrozenFood = lazy(() =>
  import("./component/Categroies/FrozenFood/Frozen")
);
const Media = lazy(() => import("./component/Media/Media"));
const ContactUs = lazy(() => import("./component/ContactUs/ContactUs"));

const Cheese = lazy(() => import("./component/Categroies/Cheese/cheese"));
const Ketchup = lazy(() => import("./component/Categroies/Ketchup/Ketchup"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="categroies" element={<Categroies />} />
          <Route path="categroies/:id" element={<FrozenFood />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/product/cheese" element={<Cheese />} />
          <Route path="/product/ketchup" element={<Ketchup />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
