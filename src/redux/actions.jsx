
export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user
  });
  
  export const deleteUser = (email) => ({
    type: 'DELETE_USER',
    payload: email
  });
  
  export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user
  });
  
  export const setSearchFilter = (filter) => ({
    type: 'SET_SEARCH_FILTER',
    payload: filter
  });