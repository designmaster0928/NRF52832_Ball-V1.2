import { ContextPrivate, ContextPublic } from './context.model';

export type DomainContextPrivate = ContextPrivate<DomainContextProps>;
export type DomainContextPublic = ContextPublic<
  DomainContextProps,
  DomainContextActions
>;

export interface DomainContextPropsRequired {
  authId: string | null;
  initialized: boolean;
  countDemo: number;
}

export type DomainContextProps = Partial<DomainContextPropsRequired>;

export interface DomainContextActions {
  incrementCount: () => void;
  login: () => void;
  logout: () => void;
}
