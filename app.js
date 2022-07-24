import React, { useState, useEffect } from "react";
// import {Input} from 'bootstrap'
import axios from "axios";
import Datatable from "./datatables";

require("es6-promise").polyfill();
require("es6-promise/auto");

// require("isomorphic-fetch");

const FormTable = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //2-usul qidirish
  // function search(rows) {
  //   return rows.filter(
  //     (rows) =>
  //       row.name.toLowerCase().indexOf(q) > -1 ||
  //       row.surname.toLowerCase().indexOf(q) > -1
  //   );
  // }

  function search(rows) {
    // console.log(columns);
    // console.log(rows);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
};

export default FormTable;
