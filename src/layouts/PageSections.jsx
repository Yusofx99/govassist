import React from "react";

const PageSections = ({ children, className, divClassName }) => {
  return (
    <section className={`sections-padding ${className}`}>
      <div className={`container ${divClassName}`}>{children}</div>
    </section>
  );
};

export default PageSections;
