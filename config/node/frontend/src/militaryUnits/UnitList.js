import React from "react";

import "./mu.css";

function UnitList({ units }) {
  return (
    <div className="unitList">
      {units.map((unit) => {
        return (
          <div className="unitListCard" key={unit.id}>
            {unit.short_name} {unit.name}
          </div>
        );
      })}
    </div>
  );
}

export default UnitList;
