const INITIAL_STATE = {
    userDetails: [],
  };
  
  export function getUserList(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'user_list':
        return {
          ...state,
          userDetails: action.payload,
        };
     
      case "2":
        break;
      default:
        return state;
    }
  }