import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class MergeExcelHtml extends Component {
  constructor(props) {
    super(props);
    this.state = { levels: [] , userList :[]};
  }
  componentDidMount() {
    this.state.levels = [
      {
        Level: "Level-1",
      },
      {
        Level: "Level-2",
      },
    ];
  }

  render() {
    this.state.levels = [
      {
        Level: "Level-1",
      },
      {
        Level: "Level-2",
      },
    ];
    this.state.empType = [
      {
        empType: "Intern",
      },
      {
        empType: "Emp",
      },
      {
        empType: "Bench",
      },
      {
        empType: "Intern",
      },
      {
        empType: "Emp",
      },
      {
        empType: "Bench",
      },
    ];
    this.state.empList = [
      {
        Intern: "Guru Prakash",
        Emp: "Preethi",
        Bench: "Bannu",
      },
      {
        Intern: "Indhumathi",
        Emp: "Priya",
        Bench: "Safiya",
      },
    ];

    this.state.userList = [
      {
        first_name: "Preethi",
        emp_level: "Level-2",
        emp_category: "",
        project_name: "Bench",
      },
      {
        first_name: "Guru Prakash",
        emp_level: "Level-1",
        emp_category: "permanent",
      },
      {
        first_name: "Poorni",
        emp_level: "Level-1",
        emp_category: "intern",
        project_name: "Bench",
      },
      {
        first_name: "Kalai selvi",
        emp_level: "Level-1",
        emp_category: "permanent",
        project_name: "Reflection",
      },
      
    ];
    return (
      <>
        <div>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <table id="table-to-xls">
            <tbody>
              <tr>
                {this.state.levels.map((levels) => (
                  <th>
                    <span className="PersianBlack-text p-t-5">
                      {levels.Level}
                    </span>
                  </th>
                ))}
              </tr>
              {/* <tr>
                {this.state.empType.map((empType) => (
                  <th>{empType.empType}</th>
                ))}
              </tr> */}

              <tr>
                <td>
                  {this.state.levels.map((levels) => (
                    <td>
                      { this.state.userList.map(
                          (user, keyuser) =>
                          // user.emp_level ==
                          // levels && 
                          user.emp_category &&
                          (
                              <span
                                className={
                                  "resourcenames_span text-truncate " +
                                  (user.emp_category == "permanent" &&
                                  user.project_name == "Bench"
                                    ? "text-color-red"
                                    : user.emp_category == "intern"
                                    ? "text-color-blue"
                                    : user.emp_category == "permanent" &&
                                      user.project_name != "Bench"
                                    ? "text-color-black"
                                    : "")
                                }
                              >
                                {user.first_name} {user.emp_level}
                              </span>
                            )
                        )}
                    </td>
                  ))}

                  {/* <span style={{ color: "red" }}>Guru Prakash,Preethi</span>,
                  <span style={{ color: "blue" }}>Poorni</span> */}
                </td>
                {/* <td>Preethi</td>
                <td>Kalai selvi</td> */}
                {/* <td>Guru Prakash</td>
                <td>Preethi</td>
                <td>Kalai selvi</td> */}
              </tr>

              {/* <tr>
                {this.props.levels.map((levels) => (
                  <td>
                    {this.state.userList &&
                      this.state.userList.map(
                        (user, keyuser) =>
                          user.emp_level == levels &&
                          user.emp_category && (
                            // <span
                            //   className={
                            //     "resourcenames_span text-truncate " +
                            //     (user.emp_category == "bench" &&
                            //     user.project_name == "Bench"
                            //       ? "text-color-red"
                            //       : user.emp_category == "intern"
                            //       ? "text-color-blue"
                            //       : user.emp_category == "emp" &&
                            //         user.project_name != "Bench"
                            //       ? "text-color-black"
                            //       : "")
                            //   }
                            // >
                             <span> {user.first_name}
                            </span>
                          )
                      )}

                
                  </td>
                ))}
              </tr> */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default MergeExcelHtml;
