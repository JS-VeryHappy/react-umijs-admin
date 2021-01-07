// 我是约定@umijs/plugin-model写法、可以写很多全局状态管理
import { useState, useCallback } from 'react';

export default function useUserModel() {

  const [user, setUserModel] = useState<any>({});

  const setUser = useCallback((user) => {
    return setUserModel(user);
  }, []);

  const deleteUser = useCallback((user) => {
    return setUserModel({});
  }, []);

  return {
    user,
    setUser,
    deleteUser,
  };
}
