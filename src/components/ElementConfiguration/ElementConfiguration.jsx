import { useSelector } from "react-redux";
import HeadlineConfiguration from "./HeadlineConfiguration";
import ImageConfiguration from "./ImageConfiguration";

const ElementConfiguration = () => {
  const { leftTab } = useSelector((state) => state.platform);
  const { id: elementId } = leftTab;

  const { elementsById } = useSelector((state) => state.elements);
  const { elementType } = elementsById[elementId] || { elementType: "" };

  const renderConfiguration = () => {
    switch (elementType) {
      case "HEADLINE":
        return <HeadlineConfiguration elementId={elementId} />;
      case "IMAGE":
        return <ImageConfiguration elementId={elementId} />
      default:
        return <div>No Configuration Found</div>;
    }
  };

  return <div>{renderConfiguration()}</div>;
};

export default ElementConfiguration;
