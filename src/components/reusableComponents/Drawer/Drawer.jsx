import "./drawer.css"

const Drawer = ({ isOpen, onClose, children }) => {
    return (
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`}>
        <div className="drawer">
          <button className="close-btn" onClick={onClose}><i className="icon icon-close" /></button>
          {children}
        </div>
      </div>
    );
};

export default Drawer