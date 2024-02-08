// ShareButton.js
import React, { useState } from 'react';
import { ReactComponent as ShareIcon } from './svgimg/share.svg';
import ShareModal from './ShareModal';

function ShareButton() {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleModalClose = () => {
    setShowShareModal(false);
  };

  return (
    <>
      <li onClick={handleShareClick}>
        <ShareIcon width="25" height="25" />
        <span>Share</span>
      </li>
      <ShareModal show={showShareModal} onClose={handleModalClose} />
    </>
  );
}

export default ShareButton;
