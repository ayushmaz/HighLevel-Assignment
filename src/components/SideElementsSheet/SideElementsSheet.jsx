import React from "react";
import "./sideElementsSheet.css"

const SideElementsSheet = () => {
  return (
    <div className="add-element-body">
      <div className="element-group">
        <h4>Text</h4>
        <div className="element-cards">
          <div className="element-card">
            <div className="icon">
              <i className="fas fa-heading" />
            </div>
            <h5>Headline</h5>
          </div>
          <div className="element-card">
            <div className="icon">
              <i className="fas fa-font" />
            </div>
            <h5>Sub-headline</h5>
          </div>
        </div>
      </div>
      <div className="element-group">
        <h4>Media</h4>
        <div className="element-cards">
          <div className="element-card">
            <div className="icon">
              <i className="fas fa-image" />
            </div>
            <h5>Image</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideElementsSheet;
