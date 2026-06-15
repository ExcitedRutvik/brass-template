import { ClientContext } from './clientStore';
import { client } from '../config/client-config';

export function ClientProvider({ children }) {
  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>;
}
