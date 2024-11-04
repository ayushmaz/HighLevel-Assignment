import { useDispatch, useSelector } from "react-redux";
import "./builderRow.css";
import BuilderColumn from "../BuilderColumn/BuilderColumn";
import ContainerActions from "../reusableComponents/ContainerActions";
import { reArrangeRows } from "../../reducers/sectionsReducer";
import { useId, useState } from "react";
import { addRow } from "../../reducers/rowsReducer";
import { addCol } from "../../reducers/columnsReducer";

const Row = ({sectionId,  rowId }) => {
  const dispatch = useDispatch()
  const id = useId()
  const [active, setActive] = useState(false)
  const { rowsById } = useSelector((state) => state.rows);
  const { sectionsById } = useSelector((state) => state.sections);
  const { columns } = rowsById[rowId];
  const {rows} = sectionsById[sectionId];


  const onRowUpAction = () => {
    let newRow = [...rows];
    const index = newRow.indexOf(rowId);
    if (index === 0) return;
    [newRow[index], newRow[index - 1]] = [newRow[index - 1], newRow[index]];
    dispatch(reArrangeRows({sectionId, rows: newRow}));
  }

  const onRowDownAction = () => {
    let newRow = [...rows];
    const index = newRow.indexOf(rowId);
    if (index === newRow.length - 1) return;
    [newRow[index], newRow[index + 1]] = [newRow[index + 1], newRow[index]];
    dispatch(reArrangeRows({sectionId, rows: newRow}));
  }

  const addNewRow = () => {
    let rowId = `row-${id}`
    let colId = `col-${id}`
    let newRow = {
      rowId: rowId,
      columns: [colId]
    }

    let newRows = [...rows];
    const index = newRows.indexOf(rowId);
    newRows.splice(index, 0, rowId);
    dispatch(addCol({colId: colId, newCol: {elements: []}}));
    dispatch(addRow({rowId, newRow}));
    dispatch(reArrangeRows({sectionId, rows: newRows}));
  }

  const RowMoreActions = () => {
    return (
      <>
        <ContainerActions onUpAction={onRowUpAction} onDownAction={onRowDownAction}/>
        <span
          className="add-new-row"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Row"
        >
          <i onClick={addNewRow} className="icon icon-plus" />
        </span>
      </>
    );
  };


  return (
    <div onMouseEnter={() => setActive(true)} onMouseLeave={() => {setActive(false)}}  className={`hl_page-creator--row ${active? "active": ""}`}>
      <RowMoreActions />
      {columns.map((columnId) => {
          return <BuilderColumn key={columnId} columnId={columnId} />;
        })}
    </div>
  );
};

export default Row;
