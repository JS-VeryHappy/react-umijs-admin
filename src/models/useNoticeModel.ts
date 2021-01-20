import { useState, useCallback } from 'react';

const useNoticeModel = () => {
  const [notification, _setNotification] = useState<any>([]);
  const [message, _setMessage] = useState<any[]>([]);

  const setNotification = useCallback(item => {
    // debugger
    _setNotification(item);
  }, []);

  return {
    notification,
    setNotification,
  };
};

export default useNoticeModel;
