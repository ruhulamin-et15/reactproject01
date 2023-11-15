import React from "react";
import "./App.css";
import Card from "./Blogsite/Card";
import Carousel from "./Blogsite/Carousel";
import Navbar from "./Pages/Navbar";
import Sidebar from "./Pages/Sidebar";

function Home() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <div className="container">
          <div className="fixed-top">
            <Navbar />
          </div>
          <Carousel />
          <div className="row">
            <div className="col-md-3">
              <Card
                img="img/IMG_20230427_192416.jpg"
                title="Card Title 1"
                p="Some quick example text to  build on the card title and make up the bulk of the card's content."
                link="http://fb.com"
                BtnName="Go Somewhere"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
