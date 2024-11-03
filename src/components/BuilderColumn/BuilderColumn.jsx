import { useSelector } from "react-redux"
import "./builderColumn.css"
import Element from "../Element/Element"

const BuilderColumn = ({columnId}) => {
    const {columnsById} = useSelector(state => state.columns)
    const {elements} = columnsById[columnId] || {elements: []}
    if(elements.length === 0) {
        return (
            <div className="new-element-blank">
                <span className="btn btn-light6 btn-slim">Add New Element</span>
            </div>
        )
    }
    return (
        <div className="column">
            <Element elementId={elements[0]} />
        </div>
    )
}

export default BuilderColumn