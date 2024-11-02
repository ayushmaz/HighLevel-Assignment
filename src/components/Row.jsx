import { useSelector } from "react-redux";

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
    <div></div>
  )
};

export default Row;
