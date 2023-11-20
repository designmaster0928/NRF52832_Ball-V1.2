import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DomainContextProps, DomainContextPublic } from 'models/domain.model';

import { domainActions } from './actions/domain';

const defaultValues: DomainContextProps = {};

const DomainContext: Context<DomainContextPublic> = createContext([
  {},
  null as any,
]);

export function useDomainContext(): DomainContextPublic {
  const context = useContext(DomainContext);

  if (!context) {
    throw new Error('useDomainContext must be used within a global provider');
  }

  return context;
}

function DomainContextProvider({ children }: PropsWithChildren): JSX.Element {
  const [domainContext, setDomainContext] =
    useState<DomainContextProps>(defaultValues);

  const providerValue: DomainContextPublic =
    useMemo<DomainContextPublic>(() => {
      return [domainContext, domainActions([domainContext, setDomainContext])];
    }, [domainContext]);

  useEffect(() => {
    setDomainContext((current: DomainContextProps): DomainContextProps => {
      return {
        ...current,
        initialized: true,
      };
    });
  }, []);

  return domainContext?.initialized ? (
    <DomainContext.Provider value={providerValue}>
      {children}
    </DomainContext.Provider>
  ) : (
    <></>
  );
}

export default DomainContextProvider;
