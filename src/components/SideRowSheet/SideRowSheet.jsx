import "./sideRowSheet.css";

const SideRowSheet = () => {
  const columnCategories = [
    "1 Column",
    "2 Column",
    "3 Column",
    "4 Column",
    "5 Column",
    "6 Column",
    "Left Sidebar",
    "Right Sidebar",
  ];
  return (
    <div className="add-row-container">
      <h2>Add Row</h2>
      <div className="add-row-wrapper">
        <div className="row-cards">
          {columnCategories.map((category, index) => {
            return (
              <div key={index} className="row-card">
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
