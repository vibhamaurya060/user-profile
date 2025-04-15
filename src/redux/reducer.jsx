
const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  searchFilter: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers
      };
    case 'DELETE_USER':
      const filteredUsers = state.users.filter(user => user.email !== action.payload);
      localStorage.setItem('users', JSON.stringify(filteredUsers));
      return {
        ...state,
        users: filteredUsers
      };
    case 'UPDATE_USER':
      const updatedUsersList = state.users.map(user => 
        user.email === action.payload.email ? action.payload : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsersList));
      return {
        ...state,
        users: updatedUsersList
      };
    case 'SET_SEARCH_FILTER':
      return {
        ...state,
        searchFilter: action.payload
      };
    default:
      return state;
  }
};

export default userReducer; 