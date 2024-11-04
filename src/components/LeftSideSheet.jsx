import { useDispatch, useSelector } from "react-redux";
import SideRowSheet from "./SideRowSheet/SideRowSheet";
import { closeLeftTab } from "../reducers/platformReducer";
import Drawer from "./reusableComponents/Drawer/Drawer"
import SideElementsSheet from "./SideElementsSheet/SideElementsSheet";

const LeftSideSheet = () => {
  const { leftTab } = useSelector((state) => state.platform);
  const dispatch = useDispatch()
  const {open, type} = leftTab

  const onTabClose = () => {
    dispatch(closeLeftTab())
  }
  
  return (
    <Drawer isOpen={open} onClose={onTabClose}>
      <div>
        {
            type === 'ROW' ? <SideRowSheet /> : <></>
        }
        {
            type === 'ELEMENT' ? <SideElementsSheet /> : <></>
        }
      </div>
    </Drawer>
  );
};

export default LeftSideSheet;
