import React from "react";
import "./ToDo_List.css";

function ToDo_List() {
  return (
    <div className="list">
      <div className="window">
        <div className="list_heading">
          <span>Today's List</span>
        </div>
        <div className="task">
            <div className="add_task">
                <span><i class="fa fa-plus" aria-hidden="true"></i></span>
                <span>Add New Task</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo_List;
