import { createContext, PropsWithChildren, useState } from 'react';
import { Requests } from '../types';

interface RequestsContextType {
  addToRequests: (cart: Requests) => void;
  requests: Requests[];
}

export const RequestsContext = createContext({} as RequestsContextType);

export function RequestsProvider({ children }: PropsWithChildren) {
  const [requests, setRequests] = useState<Requests[]>([]);

  function addToRequests(cart: Requests) {
    setRequests([...requests, cart]);
  }

  return (
    <RequestsContext.Provider value={{ addToRequests, requests }}>
      {children}
    </RequestsContext.Provider>
  );
}
