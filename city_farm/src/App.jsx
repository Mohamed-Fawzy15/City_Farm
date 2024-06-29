import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Lazy load the components
const HomePage = lazy(() => import("./component/home/HomePage"));
const About = lazy(() => import("./component/AboutUs/About"));
const Categroies = lazy(() => import("./component/Categroies/Categroies"));
const FrozenFood = lazy(() =>
  import("./component/Categroies/FrozenFood/Frozen")
);
const Media = lazy(() => import("./component/Media/Media"));
const ContactUs = lazy(() => import("./component/ContactUs/ContactUs"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="categroies" element={<Categroies />} />
          <Route path="categroies/:id" element={<FrozenFood />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
