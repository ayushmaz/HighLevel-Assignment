import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateElement } from "../../reducers/elementsReducer";
import { closeLeftTab } from "../../reducers/platformReducer";

const HeadlineConfiguration = ({elementId}) => {
    const dispatch = useDispatch()
    const [headlineText, setHeadlineText] = useState("")
    const {elementsById} = useSelector(state => state.elements)
    const element = elementsById[elementId]
    const onSubmit = (event) => {
        event.preventDefault();
        const newMetadata = {
            ...element.metadata,
            content: headlineText
        }
        dispatch(updateElement({elementId, metadata: newMetadata}))
        dispatch(closeLeftTab())
    }

    const onTextChange = (event) => {
        setHeadlineText(event.target.value)
    }
    useEffect(() => {
        if(element) {
            setHeadlineText(element?.metadata?.content ?? "")
        }
    }, [])
    return (
        <form style={{marginTop: "3rem"}} className="form-group" onSubmit={onSubmit}>
            <input className="form-control" type="text" placeholder="" value={headlineText} onChange={onTextChange} />
            <button style={{marginTop: "1rem"}} className="btn btn-light5" type="submit">Save</button>
        </form>
    );
}

export default HeadlineConfiguration