import "./loadinStyle.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading-holder">
        <div className="loading-imgholder">
          <img src="/logo2.png" alt="logo" className="loading-img" />
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
