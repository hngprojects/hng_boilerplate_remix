import { useState } from 'react';

interface ActionPopupProps {
  product: [];
  onClose: () => void;
}

const ActionPopup = ({ product, onClose }: ActionPopupProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="action-cell" onClick={() => handlePopup()}  tabIndex={0} >
        {product.action}
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="btn btn-danger" onClick={() => handleDelete(product)}>Delete</button>
            <button className="btn btn-primary" onClick={() => handleEdit(product)}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionPopup;