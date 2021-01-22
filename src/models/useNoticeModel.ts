import { useState, useCallback } from 'react';

const useNoticeModel = () => {
  const [notification, _setNotification] = useState<any>([]);
  const [message, _setMessage] = useState<any[]>([]);
  const [event, _setEvent] = useState<any[]>([]);

  const setNotification = useCallback(item => _setNotification(item), []);
  const setMessage = useCallback(item => _setMessage(item), []);
  const setEvent = useCallback(item => _setEvent(item), []);

  return {
    notification,
    message,
    event,
    setNotification,
    setMessage,
    setEvent,
  };
};

export default useNoticeModel;
