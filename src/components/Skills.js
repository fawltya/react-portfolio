import React from "react";

function Skills(props) {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Web Development</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td></td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Always learning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Skills;
