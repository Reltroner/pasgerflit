export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}
