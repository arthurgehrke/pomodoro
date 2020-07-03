import React, { createContext, useCallback, useContext, useState } from 'react';
import uid from 'uid';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: string;
  title: string;
  message?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// eslint-disable-next-line react/prop-types
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, message }: Omit<ToastMessage, 'id'>) => {
      const id = uid();

      const toast = {
        id,
        type,
        title,
        message,
      };

      setMessages((state) => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}

export { ToastProvider, useToast };
