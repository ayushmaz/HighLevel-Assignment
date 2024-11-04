import { useDispatch, useSelector } from "react-redux";
import { getUUID } from "../../utils/platformUtils";
import "./sideRowSheet.css";
import { reArrangeRows } from "../../reducers/sectionsReducer";
import { addCol } from "../../reducers/columnsReducer";
import { addRow } from "../../reducers/rowsReducer";
import { closeLeftTab } from "../../reducers/platformReducer";

const SideRowSheet = () => {
  const dispatch = useDispatch();
  const { leftTab } = useSelector((state) => state.platform);
  const { sectionsById } = useSelector((state) => state.sections);
  const onClick = (index) => {
    debugger
    let newRow = {
      rowId: `row-${getUUID()}`,
      columns: []
    }
    for (let i = 0; i <= index; i++) {
      let colId = `col-${getUUID()}`
      dispatch(addCol({ colId, newCol: { elements: [] } }));
      newRow.columns.push(colId)
    }
    dispatch(addRow({ rowId: newRow.rowId, newRow }));
    const sectionId = leftTab.id;
    let newRows = [...sectionsById[sectionId].rows];
    newRows.push(newRow.rowId);
    dispatch(reArrangeRows({ sectionId, rows: newRows }));
    dispatch(closeLeftTab())
  }
  const columnCategories = [
    "1 Column",
    "2 Column",
    "3 Column",
    "4 Column",
    "5 Column",
    "6 Column",
  ];
  return (
    <div className="add-row-container">
      <h2>Add Row</h2>
      <div className="add-row-wrapper">
        <div className="row-cards">
          {columnCategories.map((category, index) => {
            return (
              <div onClick={() => onClick(index)} key={index} className="row-card">
                <div className="icon">
                  <i className="fas fa-columns" />
                </div>
                <h5>{category}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideRowSheet;
