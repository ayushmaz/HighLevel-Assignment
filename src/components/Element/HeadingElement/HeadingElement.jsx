import { useSelector } from "react-redux";

const HeadingElement = ({elementId}) => {
    const {elementsById} = useSelector(state => state.elements);
    const {metadata} = elementsById[elementId] || {};
    const {content} = metadata || {};
    return (
        <h3>{content}</h3>
    );
}

export default HeadingElement;