import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Requests } from '../types';
import { CartContext } from './CartContext';

interface RequestsContextType {
  addToRequests: (request: Requests) => void;
  requests: Requests[];
  removeRequest: (request: Requests) => void;
  readyRequests: Requests[];
  addReadyRequests: (request: Requests) => void;
  removeReadyRequest: (request: Requests) => void;
}

export const RequestsContext = createContext({} as RequestsContextType);

export function RequestsProvider({ children }: PropsWithChildren) {
  const [requests, setRequests] = useState<Requests[]>([]);
  const [readyRequests, setReadyRequests] = useState<Requests[]>([]);

  const { cleanCart, addClient, addPaymentForm } = useContext(CartContext);

  function addToRequests(request: Requests) {
    setRequests([...requests, request]);
    cleanCart();
    addClient('');
    addPaymentForm('');
  }

  function addReadyRequests(request: Requests) {
    setReadyRequests([...readyRequests, request]);

    const filteredRequests = requests.filter(req => req !== request);
    setRequests(filteredRequests);
  }

  function removeRequest(request: Requests) {
    const filteredRequests = requests.filter(req => req !== request);
    setRequests(filteredRequests);
  }

  function removeReadyRequest(request: Requests) {
    const filteredRequests = requests.filter(req => req !== request);
    setReadyRequests(filteredRequests);
  }

  const value = useMemo(
    () => ({
      addToRequests,
      requests,
      removeRequest,
      addReadyRequests,
      readyRequests,
      removeReadyRequest,
    }),
    [requests, readyRequests],
  );

  return (
    <RequestsContext.Provider value={value}>
      {children}
    </RequestsContext.Provider>
  );
}
