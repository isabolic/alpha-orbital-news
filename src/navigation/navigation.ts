
export const Routes = {
  home: "/",
  about: "/about",
  skills: "/skills",
  contact: "/contact",
};

interface NavigationItem {
  name: string;
  path: string;
  text: string;
  allowAnonymous?: boolean;
  component: () => JSX.Element;
}

const navigationList: NavigationItem[] = [];
/* TODO route list */

export { navigationList };
