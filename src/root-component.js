import React, { useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import WrapperComponent from "./components/utility-components/wrapper-component";
import Introduction from "./components/introduction-component";
import ContactParent from "./components/contact-component";
import Experience from "./components/work-experience-component/index";
import workExp from "./JSON/resume";
import { ColorChange } from "./components/color-change-component/ColorChange";

export default () => {
  const workSkill = workExp["work-skill-section"];
  let resume = null;
  const [backgroundColor, setBackgroundColor] = useColorHooks();
  const experienceData = workSkill.map((item, index) => (
    <Experience key={index} {...item} />
  ));

  const downloadPdf = () => {
    resume.save();
  };
  return (
    <>
      <div onClick={downloadPdf} style={{ backgroundColor: backgroundColor }} className="download--button" >
        DOWNLOAD
      </div>
      <PDFExport
        scale={0.6}
        paperSize="A4"
        fileName="_____.pdf"
        title=""
        subject=""
        keywords=""
        ref={r => (resume = r)}
      >
        <WrapperComponent className="resume-body" id="generatePdfDom">
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
        </WrapperComponent>
      </PDFExport>

      <ColorChange setBackgroundColor={setBackgroundColor} />
    </>
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
