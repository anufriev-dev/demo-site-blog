import { Dispatch, MouseEvent, SetStateAction } from "react"

export interface stringObject {
  [key: string]: string;
}
type PostJoinData = {
  post_id: number,
  summary: string,
  category: string,
  date: string,
  text: string,
  src_img: string,
  comments: number,
  counts: number
}
export interface getPostJoinCommentsData {
  data: PostJoinData[] ,
  allPosts: number,
  maxPages: number
}
export interface DashboardProps {
  data: PostJoinData;
  routh: string;
}

export interface ICategoryPage {
  data,
  currentPage,
  maxPages,
  allPosts
}

export interface DemoCardBlogProps {
  dataBlog: PostJoinData[];
  routherType: string;
}

export interface IBlog extends getPostJoinCommentsData {
  currentPage: number;
}

export interface addCommentBody {
  post_id: number;
  author: string;
  text: string;
  date: string;
}
export interface ISettings{
  activeModal: boolean,
  setActiveModal : Dispatch<SetStateAction<boolean>>
}

export interface UserDB {
  id: number;
  email: string;
  name: string;
  role: string;
  passwd: string;
  date_registration: Date;
}

export interface getCommentsParams {
  comment_id: string;
  author: string;
  date: string;
  text: string;
}

export interface PostDB {
  post_id: string;
  summary: string;
  category: string;
  date: string;
  text: string;
  src_img: string;
}

export interface PostPageProps {
  data: PostDB
  comments: getCommentsParams[]
}

export type insert = "INSERT" | "ERROR"


export type role = "USER" | "ADMIN"

export interface CardFooterProps {
  card: {
    title: string,
    text: string,
    namelink?: string,
    href?: string
  }[]
}

export interface IRow {
  title: string,
  payload?: string,
  bg: string,
  color: string,
  children?: any,
  onClick?(e): void,
  href?: string,
  textLink?: string
}

export interface FormAuthProps {
  title: string;
  children: JSX.Element;
  submitText?: string;
  text?: string;
  id?: any;
}

export interface Burger {
  isActiveBurger: boolean;
  setIsActiveBurger: Dispatch<SetStateAction<boolean>>
}

export type dataLinks = {
  namelink: string,
  href: string
}

export interface NavListProps {
  data: dataLinks[];
  styles: any;
  closeNavBar?(e: MouseEvent<HTMLElement>, href: string): Promise<void> // TODO - зафиксить это недоразумение
}

export interface NavbarProps extends NavListProps  {
  isActiveBurger?: boolean;
}

export interface NavbarItemProps {
  elements: dataLinks;
  className: string;
  id?: any
}

export interface ITextArea {
  state,
  setState,
  placeholder?,
  id?,
  disabled?
}

export interface InputLableProps {
  id: string | number;
  text: string;
  state: string;
  disabled?: boolean,
  setState: Dispatch<SetStateAction<string>>;
}

export interface IMessages {
  state: string,
  setState(e: string): void,
}

export interface InputProps {
  id: string | number;
  state: string;
  disabled: boolean,
  setState: Dispatch<SetStateAction<string>>;
}

export interface LabelProps {
  id: string | number;
  text: string;
  classNames?: string
}

export interface LinksFooterProps {
  data: {
    namelink: string,
    href: string
  }[]
}

export interface AccountProps {
  isAdmin?: boolean,
  date: string
}

export interface IettingsModal {
  setActiveModal(e): void,
  activeModal: boolean
}

export interface IuttonSubmit {
  event,
  text: string,
  className?: string,
  width?: string
}

export interface IModal {
  active: boolean,
  onActive(state): void,
  children: any
}

export interface IUser {
  user?: {
    id?: string,
    email?: string,
    name: string,
    role?: string
    date_registration?: string
  },
}

export interface IHomePage {
  data: ICardBlog[]
}

export interface ICardBlog {
  post_id: string,
  summary: string,
  category: string,
  date: string,
  src_img: string,
  comments: string
}

export interface IAdminProps {
  setState: Dispatch<SetStateAction<string>>;
  state: string;
}

export interface IuseLayoutAdmin {
  [key: string]: IAdminProps
}



export interface IAdminUserPageUsers {
  id: string,
  email: string,
  name: string,
  role: string,
  date_registration: string
}

export interface IAdminUserPage {
  users:IAdminUserPageUsers[]
}

export interface IAdminUser extends IAdminProps {
  users: IAdminUserPageUsers[]
}

interface IAdminPostPagePosts {
  post_id: string,
  summary: string,
  category: string,
  date: string,
  text: string,
  src_img: string
}

export interface IAdminPostPage {
  posts: IAdminPostPagePosts[]
}

export interface IAdminPostsBlog extends IAdminProps {
  posts: IAdminPostPagePosts[]
}


interface AdminCommentsPageComment {
  comment_id: string,
  author: string,
  date: string,
  text: string
}

export interface IAdminCommentsPage {
  comments: AdminCommentsPageComment[]
}

export interface IAdminComments extends IAdminProps {
  comments: AdminCommentsPageComment[]
}

export interface Messages {
  id: string,
  email: string,
  text: string
}

export interface IMessagePage {
  state: string;
  messages: Messages[]
}
