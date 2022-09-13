export function getUserList() {
  const data = {
    level: [
      {
        Level: "Level-1",
      },
    ],
    listEmp: [
      {
        "list": "Intern",
      },{
        "list": "Employee",
      },{
        "list": "Bench",
      },
    ],

    user: [
      {
        intern: "Guru Prakash",
        emp: "Preethi",
        bench: "Bannu",
        Level: "Level-1",
      },
      {
        intern: "Indhumathi",
        emp: "Priya",
        bench: "Safiya",
        Level: "Level-2",
      },
    ],
  
  };
  return (dispatch, getState) => {
    dispatch({
      type: "user_list",
      payload: data,
    });
  };
}
