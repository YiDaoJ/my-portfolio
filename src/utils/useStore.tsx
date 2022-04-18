import { createContext, PropsWithChildren, useContext } from 'react'
import ApplicationStore from '../store/ApplicationStore'

export const AppStore = new ApplicationStore()

const StoreContext = createContext<ApplicationStore>(AppStore)

export const StoreProvider: React.FC = ({
  children,
}: // eslint-disable-next-line @typescript-eslint/ban-types
PropsWithChildren<{}>) => (
  <StoreContext.Provider value={AppStore}>{children}</StoreContext.Provider>
)

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
