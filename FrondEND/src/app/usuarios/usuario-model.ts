export interface Usuario {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

export interface ResponseUsuarios{
  page: number
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
}
