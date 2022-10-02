interface Icon {
  file: string,
  backgroundColor: string
}

interface Project {
  id: string,
  title: string,
  description: string,
  image: string | string[],
  type: string,
  buttons?: AccessTypes,
  hidden: boolean,
  incomplete: boolean
}

interface SubNavLink {
  title: string,
  to: string,
}

interface NavLink {
  title: string,
  to: string,
  subpages?: SubNavLink[]
}

interface AccessTypes {
  ios?: string,
  android?: string,
  web?: string,
  github?: string
}