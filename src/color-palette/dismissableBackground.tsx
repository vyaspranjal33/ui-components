import React, { SFC } from 'react';

import Styles from '../styles/color-palette.module.scss';

const DismissableBackground: SFC<{
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ children, onClick }) => {
  let dismissableBackground: Element;
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === dismissableBackground) {
      onClick(event);
    }
  };

  return (
    <div
      ref={element => {
        dismissableBackground = element;
      }}
      className={Styles['dismissable-background']}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default DismissableBackground;
