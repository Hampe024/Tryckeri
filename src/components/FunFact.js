import React, { useState } from "react";
import "../style/css/components/funFact.css";

export default function FunFact({title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="header" onClick={handleToggle}>
            {title}
            <span className="toggle-icon">
            {isCollapsed ? "+" : "-"}
            </span>
        </div>
        <div className={` ${!isCollapsed ? "content" : "closed"}` }>
            {children}
        </div>
    </div>
  );
}
