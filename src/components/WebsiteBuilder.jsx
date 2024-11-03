import { useSelector } from "react-redux";
import Section from "./BuilderSection/Section";
import LeftSideSheet from "./LeftSideSheet";



const WebsiteBuilder = () => {
  const { sectionsOrder } = useSelector((state) => state.sections);

  return (
    <div>
      {sectionsOrder.map((sectionId) => {
          return <Section key={sectionId} sectionId={sectionId} />;
      })}
      <LeftSideSheet />
    </div>
  );
};

export default WebsiteBuilder;
