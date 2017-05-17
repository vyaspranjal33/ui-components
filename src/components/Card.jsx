import React from "react";
import cx from "classnames";

export type CardProps = {
  text?: string,
  small?: boolean,
  style?: string,
  centered?: boolean,
  inline?: boolean,
  module?: boolean,
  children?: string
};

const Card = ({
  style,
  small = false,
  centered = false,
  inline = false,
  module = false,
  children
}: CardProps) => {
  return (
    <div
      className={cx("card", {
        "is-thin": small,
        "is-centered": centered,
        "is-inline": inline,
        "is-module": module
      })}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  centered: false,
  inline: false,
  module: false,
  small: false
};

export default Card;
