import React, { useCallback, useState } from "react";
import './MainText.sass';

const MainText = ({ html }) => {
  const [isExpanded, toggleExpanded] = useState(false);
  const firstCollumn = html.match(/^<.*?>*<\/.*?>/);

  const onReadAllPressed = useCallback(() => {
    toggleExpanded(prev => !prev);
  }, [toggleExpanded]);

  return (
    <>
      <div className="main-text-container" dangerouslySetInnerHTML={{__html: isExpanded ? html : firstCollumn}} />
      {!isExpanded && (
        <div className="main-text-container-expand">
          <a id="expand-all-link" onClick={onReadAllPressed}>Читать все...</a>
        </div>
      )}
    </>
  );
};

export default MainText;
