import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './index.css';
import './App.css';

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
          filename="Resource-List"
          sheet="Resource-List"
          buttonText="Export Excel"
          style={{"background-color": "red"}}
        />
       <br></br> &nbsp;
        <table id="table-to-xls" className = "tableData" style={{"border": "1px solid white"}}>
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
              <td style={{color: "pink"}} >Kalai selvi,Sharmila</td>
              <td style={{color: "red"}}>Ramani</td>
              <td>Raja vignesh</td>
              <td>Mohan</td>
              
            </tr>

            <tr>
              <td><span style={{color: "green"}} > Prakash</span>,<span style={{color: "violet"}}>Smarshi</span></td>
              <td>Venkat</td>
              <td>Selvi</td>
              <td style={{color: "red"}}>Santhosh</td>
              <td>Preethi</td>
              <td>Arasi</td>
              
            </tr>
           
          </tbody>
        </table>
      </div>
    );
  }
}

export default MergeExcelHtml;
