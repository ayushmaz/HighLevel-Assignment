import { useDispatch, useSelector } from "react-redux"
import "./builderColumn.css"
import Element from "../Element/Element"
import { openLeftTab } from "../../reducers/platformReducer"


const BuilderColumn = ({columnId}) => {
    const dispatch = useDispatch()
    const {columnsById} = useSelector(state => state.columns)
    const {elements} = columnsById[columnId] || {elements: []}

    const onAddNewElementClicked = () => {
        dispatch(openLeftTab({type: 'ELEMENT'}))
    }

    if(elements.length === 0) {
        return (
            <div className="hl_page-creator--column">
                <div className="new-element-blank">
                    <span onClick={onAddNewElementClicked} className="btn btn-light6 btn-slim">Add New Element</span>
                </div>
            </div>
        )
    }
    return (
        <div className="hl_page-creator--column">
            <Element elementId={elements[0]} />
        </div>
    )
}

export default BuilderColumn