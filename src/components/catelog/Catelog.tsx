import type React from "react";
import "./Catelog.css";
import cateLog4 from "../../assets/catelog4.png";
import catelog2 from "../../assets/catelog2.png";
import catelog3 from "../../assets/catelog3.png";

const Catelog: React.FC = () => {
  return (
    <>
      <section>
        <div className="catelog-container ">
          <div className="flex align-center flex-col py-4">
            <h2 className="m-0 font-weight-700 fs-2xl">Browse The Range</h2>
            <p className="m-0 fs-md catelog-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex justify-center catelog-items">
            <div className="flec flex-col align-center">
              <img src={cateLog4} alt="" className="catelog-image br-md" />
              <p className="font-weight-600 fs-xl m-0 my-2">Dining</p>
            </div>
            <div className="flec flex-col align-center">
              <img src={catelog2} alt="" className="catelog-image br-md" />
              <p className="font-weight-600 fs-xl m-0 my-2">Living</p>
            </div>
            <div className="flec flex-col align-center">
              <img src={catelog3} alt="" className="catelog-image br-md" />
              <p className="font-weight-600 fs-xl m-0 my-2">Bedroom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catelog;
