import React, { Component } from "react";
import '../index.css';
import '../App.css';

class AddNewRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excel: {},
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target; // 2 way binding
        let { excel } = this.state; //destructuring
        this.setState({
            excel: {
                ...excel,
                [name]: value,
            },
        });
    }

    addData = () => {
        this.props.addNewExcelRow(this.state.excel)
    }

    render() {
        return (
            <div>
                <label for="intern">Enter Intern</label><br />
                <input type="text" id="intern" name="intern" value={this.state.excel.intern} onChange={(e) => this.handleChange(e)} /><br />
                <label for="emp">Enter Employee </label><br />
                <input type="text" id="emp" name="emp" value={this.state.excel.emp} onChange={(e) => this.handleChange(e)} /><br />
                <label for="bemch">Enter Bench </label><br />
                <input type="text" id="bench" name="bench" value={this.state.excel.bench} onChange={(e) => this.handleChange(e)} /><br />
                <button className="loadDataClass" onClick={() => this.addData()}>Add data</button>
            </div>
        )
    }
}
export default AddNewRow;
