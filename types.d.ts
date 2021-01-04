interface Icon {
  file: string,
  backgroundColor: string
}

interface Project {
  id: string,
  title: string,
  shortDescription: string,
  image: string | string[],
  type: string
}