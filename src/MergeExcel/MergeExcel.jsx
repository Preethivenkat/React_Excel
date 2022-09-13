import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";

const MergeExcel = () => {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <div>
      <button onClick={onDownload}> Export excel </button>
      <table ref={tableRef}>
        <tbody>
          <tr>
            <th colspan="2">Name</th>
            <th rowspan="2">Age</th>
          </tr>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Edison</td>
            <td>Padilla</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Alberto</td>
            <td>Lopez</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MergeExcel;
