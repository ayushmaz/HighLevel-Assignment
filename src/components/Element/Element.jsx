import { useSelector } from "react-redux"
import HeadingElement from "./HeadingElement/HeadingElement"
import ImageElement from "./ImageElement/ImageElement"

const Element = ({elementId}) => {
    const {elementsById} = useSelector(state => state.elements)
    const {elementType} = elementsById[elementId] || {elementType: ''}

    switch(elementType){
        case 'HEADING':
            return <HeadingElement elementId={elementId} />
        case 'IMAGE':
            return <ImageElement elementId={elementId} />
        case 'VIDEO':
            return <div className="element">Video Element</div>
        default:
            return <div className="element">No Element Found</div>
    }

}

export default Element