import "./Brand.css";
// import partnerImg from "../../photos/logos.png";

function Brand() {
  const partnerLogos = [
    { id: 1, img: "/logos/afaia.png" },
    { id: 2, img: "/logos/amricana.png" },
    { id: 3, img: "/logos/biscomasr.png" },
    { id: 4, img: "/logos/boudy.png" },
    { id: 5, img: "/logos/bravo.png" },
    { id: 6, img: "/logos/break.png" },
    { id: 7, img: "/logos/chipsy.png" },
    { id: 8, img: "/logos/clea.png" },
    { id: 9, img: "/logos/easycook.png" },
    { id: 10, img: "/logos/elmalka.png" },
    { id: 11, img: "/logos/elshamdan.png" },
    { id: 12, img: "/logos/fayez.png" },
    { id: 13, img: "/logos/harvest.png" },
    { id: 14, img: "/logos/holwelsham.png" },
    { id: 15, img: "/logos/italiano.png" },
    { id: 16, img: "/logos/juhina.png" },
    { id: 17, img: "/logos/katilo.png" },
    { id: 18, img: "/logos/lion.png" },
    { id: 19, img: "/logos/livorno.png" },
    { id: 20, img: "/logos/mater.png" },
    { id: 21, img: "/logos/obourland.png" },
    { id: 22, img: "/logos/raw.png" },
    { id: 23, img: "/logos/rwaby.png" },
    { id: 24, img: "/logos/shaykhon.png" },
    { id: 25, img: "/logos/tiger.png" },
    { id: 26, img: "/logos/vitrac.png" },
    { id: 27, img: "/logos/windows.png" },
  ];

  return (
    <div className="svgContainer">
      <div className="partnerText">
        <img
          src="/images/brand.png"
          alt="header"
          className="partner-header-img"
        />
      </div>
      <div className="partner">
        <div className="partner-slider">
          <div className="partner-slide-track">
            {partnerLogos.map((par) => (
              <div className="partner-slide" key={par.id}>
                <img src={par.img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
