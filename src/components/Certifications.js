import React, { Component } from "react";

class Certifications extends Component {
  render() {

    let sectionName;
    let certifications;

    if (this.props.certifications && this.props.resumeBasicInfo) {

      sectionName =
        this.props.resumeBasicInfo.section_name.certifications;

      certifications =
        this.props.certifications.map(function(certification, i) {

          return (
            <div key={i} className="mb-3">
              <h5>{certification.name}</h5>
              <p>{certification.issuer}</p>
            </div>
          );

        });
    }

    return (
      <section id="certifications">
        <div className="col-md-12">

          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>

          <div className="col-md-8 mx-auto">
            {certifications}
          </div>

        </div>
      </section>
    );
  }
}

export default Certifications;