import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class MergeExcelHtml extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <h4>Multi color in single cell </h4>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export Excel"
        />
       <br></br> &nbsp;
        <table id="table-to-xls" style={{"border": "1px solid white"}}>
          <tbody>
           
            <tr>
              <th colspan="3">Level-1</th>
              <th colspan="3">Level-2</th>
            </tr>
           
            <tr style={{"border": "1px solid white"}}>
              <th>Intern</th>
              <th>Employee</th>
              <th>Bench</th>
              <th>Intern</th>
              <th>Employee</th>
              <th>Bench</th>
            </tr>
          
            <tr>
              <td><span style={{color: "red"}} >Guru Prakash</span>,<span style={{color: "blue"}}>Poorni</span></td>
              <td>Preethi</td>
              <td>Kalai selvi</td>
              <td>Guru Prakash</td>
              <td>Preethi</td>
              <td>Kalai selvi</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MergeExcelHtml;
