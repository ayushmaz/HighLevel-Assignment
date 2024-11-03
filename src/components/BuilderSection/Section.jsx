import { useDispatch, useSelector } from "react-redux";
import Row from "../BuilderRow/Row";
import "./builderSection.css";
import { openLeftTab } from "../../reducers/platformReducer";

const Section = ({ sectionId }) => {
    const dispatch = useDispatch()
  const { sectionsById } = useSelector((state) => state.sections);
  const { rows } = sectionsById[sectionId] || { rows: [] };

  const onAddNewRowClicked = () => {
    dispatch(openLeftTab({type: 'ROW'}))
  }

  const MoreActions = () => (
    <>
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span data-tooltip="tooltip" data-placement="right" title="Up">
            <i className="icon icon-arrow-up-2" />
          </span>
          <span data-tooltip="tooltip" data-placement="right" title="Down">
            <i className="icon icon-arrow-down-2" />
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="left" title="Settings">
            <i className="fas fa-cog" />
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Clone">
            <i className="far fa-eye" />
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Save">
            <i className="far fa-copy" />
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Delete">
            <i className="far fa-trash-alt" />
          </span>
        </div>
      </div>
      <span
        className="add-new-section"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Section"
      >
        <i className="icon icon-plus" />
      </span>
    </>
  );

  if (rows.length === 0) {
    return (
      <div className="hl_page-creator--section section-container">
        <MoreActions />
        <div className="add-new-row-container">
            <span onClick={onAddNewRowClicked} className="btn btn-light4 btn-slim">Add New Row</span>
        </div>
      </div>
    );
  }

  return (
    <section className="hl_page-creator--section">
      <MoreActions />
      {rows.map((rowId) => {
        return <Row key={rowId} rowId={rowId} />;
      })}
    </section>
  );
};

export default Section;
