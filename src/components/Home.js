import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";

class Home extends Component {
  render() {
    return (
      <div>
        <Projects
          resumeProjects={this.props.resumeData.projects}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Certifications
          certifications={this.props.resumeData.certifications}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
      </div>
    );
  }
}

export default Home;
