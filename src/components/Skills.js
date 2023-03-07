import React from "react";

function Skills(props) {
  return (
    <tr className="dark:bg-alt-800 dark:even:bg-alt-600 dark:hover:bg-alt-700 dark:hover:even:bg-alt-500 bg-alt-200 even:bg-alt-300 hover:bg-primary-200 hover:even:bg-primary-300">
      <td className="px-5  py-3">{props.name}</td>
      <td>
        <img
          src={props.icon}
          width="30px"
          height="30px"
          className="my-3 h-[30px]"
        />
      </td>
    </tr>
  );
}

export default Skills;
