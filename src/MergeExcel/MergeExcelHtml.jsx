import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import '../index.css';
import '../App.css';
import {
  getUserList
} from "../Action";
import { connect } from "react-redux";
import AddNewRow from "./AddNewRow";

class MergeExcelHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData: false,
      isAddNewRow: false,
      userDetails:[]
    };
  }

  componentDidMount() {
    this.props.getUserList();
    this.setState({
      loadData: false,
      userDetails: []
    });

  }
  loadDataDetails = () => {
    this.setState({
      loadData: true,
      userDetails: this.props.userDetails.user
    });
  }

  addNewRow = () => {
    this.setState({
      isAddNewRow: true
    })
  }

  addNewExcelRow = (data) => {
    this.props.userDetails.user.push(data)
    this.setState({
      userDetails: this.props.userDetails.user,
      isAddNewRow: false
    })
    this.render();
  }

  closeForm = () => {
    this.setState({
      isAddNewRow: false
    })
  }


  render() {
    return (
      <div>
        <h4>Convert HTML table into export excel</h4>
        {this.state.loadData == false && (
          <button className="loadDataClass" onClick={this.loadDataDetails}> Load data</button>
        )}
        {this.state.loadData == true && (
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="Resource-List"
            sheet="Resource-List"
            buttonText="Export Excel"
            header="list"
            style={{ "background-color": "red" }}
          />
        )}&nbsp;&nbsp;

        {this.state.loadData && !this.state.isAddNewRow &&(
          <button className="loadDataClass" onClick={() => this.addNewRow()}> Add row</button>
        )}&nbsp;&nbsp;

        {this.state.loadData && this.state.isAddNewRow && (
          <button className="loadDataClass" onClick={() => this.closeForm()}> Cancel</button>
        )}&nbsp;&nbsp;
        {this.state.isAddNewRow && (
          <AddNewRow
            addNewExcelRow={(data) => this.addNewExcelRow(data)}
          />

        )}
        <br></br> &nbsp;
        {this.state.loadData == true && (
          <table id="table-to-xls" className="tableData" style={{ "border": "1px solid white" }}>
            <tbody>
              <tr>
                {this.props.userDetails.level && this.props.userDetails.level.map(
                  (level) => (
                    <th colSpan="3">  <span >{level.Level}</span> </th>
                  )
                )}
              </tr>
              {this.props.userDetails.listEmp && this.props.userDetails.listEmp.map(
                (listEmp) => (
                  <th>  <span>{listEmp.list}</span> </th>
                )
              )}
              {this.state.userDetails && this.state.userDetails.map(
                (user, key) => (
                  <tr>
                    <td>  <span style={{ color: "blue" }} className="text-color-blue">{user.intern}</span> </td>
                    <td>  <span style={{ color: "green" }} className="text-color-green">{user.emp}</span> </td>
                    <td>  <span style={{ color: "red" }} className="text-color-red">{user.bench}</span> </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}

      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("stae", state)
  return {
    userDetails: state.userDetails.userDetails
  };
};

const mapDispatchToProps = {
  getUserList,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MergeExcelHtml);
