import { createContext, useContext } from 'react';
import { client } from '../config/client-config';

export const ClientContext = createContext(client);
export const useClient = () => useContext(ClientContext);
