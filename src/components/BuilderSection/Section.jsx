import { useDispatch, useSelector } from "react-redux";
import Row from "../BuilderRow/Row";
import "./builderSection.css";
import { openLeftTab } from "../../reducers/platformReducer";
import { reArrangeSections } from "../../reducers/sectionsReducer";
import ContainerActions from "../reusableComponents/ContainerActions";
import { useState } from "react";

const Section = ({ sectionId }) => {
  const dispatch = useDispatch();
  const { sectionsById, sectionsOrder } = useSelector(
    (state) => state.sections
  );
  const { rows } = sectionsById[sectionId] || { rows: [] };
  const sectionIndex = sectionsOrder.indexOf(sectionId);

  const onAddNewRowClicked = () => {
    dispatch(openLeftTab({ type: "ROW", id: sectionId }));
  };

  const onUpAction = (sectionIndex) => {
    if (sectionIndex === 0) return;
    const newSectionsOrder = [...sectionsOrder];
    [newSectionsOrder[sectionIndex], newSectionsOrder[sectionIndex - 1]] = [
      newSectionsOrder[sectionIndex - 1],
      newSectionsOrder[sectionIndex],
    ];
    dispatch(reArrangeSections(newSectionsOrder));
  };

  const onDownAction = (sectionIndex) => {
    if (sectionIndex === sectionsOrder.length - 1) return;
    const newSectionsOrder = [...sectionsOrder];
    [newSectionsOrder[sectionIndex], newSectionsOrder[sectionIndex + 1]] = [
      newSectionsOrder[sectionIndex + 1],
      newSectionsOrder[sectionIndex],
    ];
    dispatch(reArrangeSections(newSectionsOrder));
  };

  const MoreActions = () => (
    <>
      <ContainerActions onUpAction={() => onUpAction(sectionIndex)} onDownAction={() => onDownAction(sectionIndex)} />
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
      <div onMouseEnter={() => {}} className="hl_page-creator--section section-container">
        <MoreActions />
        <div className="add-new-row-container">
          <span
            onClick={onAddNewRowClicked}
            className="btn btn-light4 btn-slim"
          >
            Add New Row
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="hl_page-creator--section">
      <MoreActions />
      {rows.map((rowId) => {
        return <Row key={rowId} sectionId={sectionId} rowId={rowId} />;
      })}
    </section>
  );
};

export default Section;
