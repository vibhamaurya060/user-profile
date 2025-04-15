import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/actions';

const useLocalStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    dispatch(setUsers(storedUsers));
  }, [dispatch]);

  const updateLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  return updateLocalStorage;
};

export default useLocalStorage;