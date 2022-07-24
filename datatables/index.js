import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  const [edit, setedit] = useState();
  const onEdit = (e) => {
    console.log(e);
    console.log(e.target.value);
  };
  return (
    <Table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr>
            {columns.map((column) => (
              <>
                <td>{row[column]}</td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
