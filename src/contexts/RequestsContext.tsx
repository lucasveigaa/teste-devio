import { createContext, PropsWithChildren, useState } from 'react';
import { Requests } from '../types';

interface RequestsContextType {
  addToRequests: (request: Requests) => void;
  requests: Requests[];
  removeRequest: (request: Requests) => void;
}

export const RequestsContext = createContext({} as RequestsContextType);

export function RequestsProvider({ children }: PropsWithChildren) {
  const [requests, setRequests] = useState<Requests[]>([]);

  function addToRequests(request: Requests) {
    setRequests([...requests, request]);
  }

  function removeRequest(request: Requests) {
    const filteredRequests = requests.filter(req => req !== request);
    setRequests(filteredRequests);
  }

  return (
    <RequestsContext.Provider
      value={{ addToRequests, requests, removeRequest }}
    >
      {children}
    </RequestsContext.Provider>
  );
}
