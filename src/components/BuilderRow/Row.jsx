import { useSelector } from "react-redux";
import "./builderRow.css";
import BuilderColumn from "../BuilderColumn/BuilderColumn";
import ContainerActions from "../reusableComponents/ContainerActions";

const Row = ({ rowId }) => {
  const { rowsById } = useSelector((state) => state.rows);
  const { columns } = rowsById[rowId];

  const RowMoreActions = () => {
    return (
      <>
        <ContainerActions />
        <span
          className="add-new-row"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Row"
        >
          <i className="icon icon-plus" />
        </span>
      </>
    );
  };


  return (
    <div className={`hl_page-creator--row`}>
      <RowMoreActions />
      {columns.map((columnId) => {
          return <BuilderColumn key={columnId} columnId={columnId} />;
        })}
    </div>
  );
};

export default Row;
