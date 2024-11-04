import React from "react";
import "./sideElementsSheet.css"
import { useDispatch, useSelector } from "react-redux";
import { getUUID } from "../../utils/platformUtils";
import { addElement } from "../../reducers/elementsReducer";
import { addElementInColumn } from "../../reducers/columnsReducer";
import { closeLeftTab } from "../../reducers/platformReducer";

const SideElementsSheet = () => {
  const dispatch = useDispatch()
  const {leftTab} = useSelector(state => state.platform)
  const {id} = leftTab

  const onHeadlineClicked = () => {
    const newElement = {
      elementType: 'HEADLINE',
      elementId: `element-${getUUID()}`,
      metadata: {
        content: 'This is a Headline Text'
      }
    }
    dispatch(addElement({...newElement}))
    dispatch(addElementInColumn({colId: id, elementId: newElement.elementId}))
    dispatch(closeLeftTab())
  }

  const onImageClicked = () => {
    const newElement = {
      elementType: 'IMAGE',
      elementId: `element-${getUUID()}`,
      metadata: {
        url: 'https://images.pexels.com/photos/2130475/pexels-photo-2130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: ''
      }
    }
    dispatch(addElement({...newElement}))
    dispatch(addElementInColumn({colId: id, elementId: newElement.elementId}))
    dispatch(closeLeftTab())
  }
  return (
    <div className="add-element-body">
      <div className="element-group">
        <h4>Text</h4>
        <div className="element-cards">
          <div onClick={onHeadlineClicked} className="element-card">
            <div className="icon">
              <i className="fas fa-heading" />
            </div>
            <h5>Headline</h5>
          </div>
          {/* <div className="element-card">
            <div className="icon">
              <i className="fas fa-font" />
            </div>
            <h5>Sub-headline</h5>
          </div> */}
        </div>
      </div>
      <div className="element-group">
        <h4>Media</h4>
        <div className="element-cards">
          <div onClick={onImageClicked} className="element-card">
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
