import { useSelector } from "react-redux";
import HeadingElement from "./HeadingElement/HeadingElement";
import ImageElement from "./ImageElement/ImageElement";
import ContainerActions from "../reusableComponents/ContainerActions";

const Element = ({ elementId }) => {
  const { elementsById } = useSelector((state) => state.elements);
  const { elementType } = elementsById[elementId] || { elementType: "" };

  const ElementMoreActions = () => {
    return (
      <>
        <ContainerActions />
        <span
          className="add-new-element"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Element"
        >
          <i className="icon icon-plus" />
        </span>
      </>
    );
  };

  const renderElement = () => {
    switch (elementType) {
      case "HEADING":
        return <HeadingElement elementId={elementId} />;
      case "IMAGE":
        return <ImageElement elementId={elementId} />;
      case "VIDEO":
        return <div className="element">Video Element</div>;
      default:
        return <div className="element">No Element Found</div>;
    }
  };

  return <div className="hl_page-creator--element">
    <ElementMoreActions />
    {renderElement()}
    </div>;
};

export default Element;
