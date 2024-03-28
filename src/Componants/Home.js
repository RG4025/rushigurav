import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import "../App.css";


// hey  its a main section

function Home() {
  
  return (
    <div  className="sectionone ">
      <div className="">
        <div className="row gap-0">
          <div
            
            className="col-12 col-xl-3 "
          >
            <div className="container">
              <div className=" sidebar my-3 my-xl-4">
                <Sidebar />
              </div>
            </div>
          </div>
          <div
            className="col-12 col-xl-9 "
          >
            <div className="container">
              <div className=" secOneChildOne my-3 my-xl-4">
                <div className=" mainsection has-scrollbar ">
                  <div className="">
                    <MainSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
