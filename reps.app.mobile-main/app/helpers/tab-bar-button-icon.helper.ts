import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faFutbol } from '@fortawesome/free-solid-svg-icons/faFutbol';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

export function tabBarButtonIconHelper(route: string): IconProp {
  switch (route.toLocaleLowerCase()) {
    case 'home':
      return faHouse;
    case 'training':
      return faFutbol;
    case 'profile':
      return faUser;
    default:
      return faBan;
  }
}
