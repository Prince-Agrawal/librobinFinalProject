import React from "react";
import { Helmet } from "react-helmet";
import { Media } from "reactstrap";
import "./about.css";

const mission = () => {
  const text =
    "Our Mission To Collect World's \n All Book And Make It \n Universal Accessible";
  const res = text.split("\n");
  let i=0;
  const mission = res.map((data) => {
    i++;
    return <h2 key={i}>{data}</h2>;
  });
  return mission;
};

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div class="top">
        <h3 class="aboutTitle">About Us</h3>
        <h2 class="about-mission">{mission()}</h2>
      </div>
      <div class="container">
        <div class="row team-photo">
          <div class="col-12 col-md-6">
            <Media
              className="team-image"
              object
              src="TeamImages/harshit.png"
              alt="harshit"
            />
            <h5>Harshit Gupta</h5>
            <h4>Full Stack Developer</h4>
          </div>
          <div class="col-12 col-md-6">
            <Media
              className="team-image"
              object
              src="TeamImages/prince.png"
              alt="prince"
            />
            <h5>Prince Agrawal</h5>
            <h4>Full Stack Developer</h4>
          </div>
          <div class="col-12 col-md-6">
          <Media
            className="team-image"
            object
            src="TeamImages/ashok.png"
            alt="ashok"
          />
          <h5>Ashok Panwar</h5>
          <h4>Marketing and Content Writer</h4>
        </div>
        <div class="col-12 col-md-6">
          <Media
            className="team-image"
            object
            src="TeamImages/invester.png"
            alt="SKH sir"
          />
          <h5>Sanjay Kathuria</h5>
          <h4>Investor</h4>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
