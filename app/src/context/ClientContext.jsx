import { createContext, useContext } from 'react';
import { client } from '../config/client-config';

const ClientContext = createContext(client);

export function ClientProvider({ children }) {
  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>;
}

export function useClient() {
  return useContext(ClientContext);
}
