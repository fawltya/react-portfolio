import React from "react";

function Skills(props) {
  return (
    <tr className=" border-2 border-primary-800 dark:border-primary-100 rounded-lg">
      <td className="px-3 py-3">{props.name}</td>
      <td>
        <img src={props.icon} width="30px" className="mr-3" />
      </td>
    </tr>
  );
}

export default Skills;
