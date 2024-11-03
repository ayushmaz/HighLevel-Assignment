import { useSelector } from "react-redux";
import "./builderRow.css"
import BuilderColumn from "../BuilderColumn/BuilderColumn";

const Row = ({ rowId }) => {
  const { rowsById } = useSelector((state) => state.rows);
  const {columns} = rowsById[rowId];

  if(columns.length === 0) {
    return (
        <>
          <div href="#" className="new-row-blank">
            <span className="btn btn-light5 btn-slim">Add New Row</span>
          </div>
        </>
      );
  }

  return (
    <div className={`builder-row-container`}>
      <div  style={{'--count': columns.length}} className="columns">
        {
          columns.map((columnId) => {
            return <BuilderColumn columnId={columnId} />
          })
        }
      </div>
    </div>
  )
};

export default Row;
