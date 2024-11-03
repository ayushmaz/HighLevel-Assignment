import { useSelector } from "react-redux";

const ImageElement = ({elementId}) => {
    const {elementsById} = useSelector(state => state.elements);
    const {metadata} = elementsById[elementId] || {};
    const {url, height, width, alt} = metadata || {url: '', alt: ''};
    return (
        <img rel="lazy_loading" style={{height: "200px", objectFit: "cover"}} src={url} width={width} height={height} alt={alt} />
    );
}

export default ImageElement;