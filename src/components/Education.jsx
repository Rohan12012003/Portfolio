import React from "react";

function Education() {

  return (
    <div className="education" id="education" style={{ paddingTop: "80px" }}>
      <h5>EDUCATION</h5>
      <hr />
      <div className=" education-items row">
      <div className="education-item col-9 col-lg-6">
          <h6>2018-2019</h6>
          <h6>Prafulla Nagar VidyaMandir (H.S),Prafullanagar,West Bengal</h6>
          <h6>Board:West Bengal Board of Secondary Education</h6>
          <p>Marks Obtained: 93.71%</p>
      </div>
      <div className="education-item col-9 col-lg-6">
          <h6>2020-2021</h6>
          <h6>Prafulla Nagar VidyaMandir (H.S),Prafullanagar,West Bengal</h6>
          <h6>Board:West Bengal Council of Higher Secondary Education </h6>
          <p>Marks Obtained: 94.6%</p>
      </div>
      <div className="education-item col-9 col-lg-6">
          <h6>2021-Present</h6>
          <h6>Indian Institute of Engineering Science And Technology,Shibpur</h6>
          <p>Marks Obtained: 9.36 CGPA (upto 4th Semester)</p>
      </div>
      </div>
    </div>
  );
}

export default Education;
