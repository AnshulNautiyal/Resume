import React, { useState } from "react";
import WrapperComponent from "./components/utility-components/wrapper-component";
import Introduction from "./components/introduction-component";
import ContactParent from "./components/contact-component";
import Experience from "./components/work-experience-component/index";
import workExp from "./JSON/resume";
import { ColorChange } from "./components/color-change-component/ColorChange";

export default () => {
  const workSkill = workExp["work-skill-section"];
  const experienceData = workSkill.map((item, index) => (
    <Experience key={index} {...item} />
  ));

  const [backgroundColor, setBackgroundColor] = useColorHooks();
  return (
    <WrapperComponent className="resume-body">
      <Introduction backgroundColor={backgroundColor} />
      <ContactParent backgroundColor={backgroundColor.darkColor} />
      <WrapperComponent className="work-skill-section">
        <WrapperComponent className="work-skill-section__work">
          {experienceData}
        </WrapperComponent>
        <WrapperComponent className="work-skill-section__skills">
          <Experience mainHeader={true} />
        </WrapperComponent>
      </WrapperComponent>
      <ColorChange setBackgroundColor={setBackgroundColor} />
    </WrapperComponent>
  );
};

export const useColorHooks = colorParam => {
  const [backgroundColor, setBackgroundColor] = useState({
    lightColor: "#4E90CD",
    darkColor: "#2273b5"
  });
  colorParam && setBackgroundColor(colorParam);

  return [backgroundColor, setBackgroundColor];
};
