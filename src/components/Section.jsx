import { useSelector } from "react-redux"
import Row from "./Row"

const Section = ({sectionId}) => {
    const {sectionsById} = useSelector(state => state.sections)
    const {rows} = sectionsById[sectionId] || {rows: []}
    return (
        <div key={sectionId}>
            {
                rows.map((rowId) => {
                    return <Row key={rowId} rowId={rowId} />
                })
            }
        </div>
    )
}

export default Section