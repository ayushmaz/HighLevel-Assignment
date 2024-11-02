import { useSelector } from "react-redux";
import Section from "./Section";

const WebsiteBuilder = () => {
  const { sectionsOrder } = useSelector((state) => state.sections);
  return (
    <div className="hl_page-creator--content">
      <section className="hl_page-creator--section">
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
        {sectionsOrder.map((sectionId) => {
          return <Section key={sectionId} sectionId={sectionId} />;
        })}
      </section>
    </div>
  );
};

export default WebsiteBuilder;
