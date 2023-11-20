import {
  DomainContextActions,
  DomainContextPrivate,
  DomainContextProps,
} from 'models/domain.model';

export function domainActions(
  contextState: DomainContextPrivate,
): DomainContextActions {
  const [, setContext] = contextState;

  return {
    incrementCount: (): void => {
      setContext((current) => {
        return {
          ...current,
          countDemo: current?.countDemo || 0 + 1,
        };
      });
    },
    login: (): void => {
      setContext((current): DomainContextProps => {
        return {
          ...current,
          authId: '1234',
        };
      });
    },
    logout: (): void => {
      setContext((current): DomainContextProps => {
        return {
          ...current,
          authId: null,
        };
      });
    },
  };
}
