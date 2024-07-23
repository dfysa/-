import { PostInfo } from '../model/PostInfo';
import { instance } from './Axios';

//获取验证码
export function sendCode(phone: string) {
  return instance.get('/word/user/code', { params: { phone: phone } });
}

// 定义一个接口来表示登录请求的参数
interface LoginRequest {
  phone: string;
  code: string;
}

// 登录函数
export function login(phone: string, code: string) {
  const loginData: LoginRequest = { phone, code };
  return instance.post('/word/user/login', loginData);
}

// 打卡
interface GeneratedTypeLiteralInterface_1 {
  rightCount: number;
  answeredCount: number;
  timeUsed: number;
}

export function createPost(post: GeneratedTypeLiteralInterface_1) {
  return instance.post('/word/post/create', post)
}



// 包含分页信息的响应类型
interface PagedResponse<T> {
  total: number;
  page: number;
  size: number;
  records: T[];
}

// 包含数据部分的API响应类型
interface GeneratedTypeLiteralInterface_2 {
  data: PagedResponse<PostInfo>;
}

interface GetAllPostResponse {
  data: GeneratedTypeLiteralInterface_2;
}

// 获取全部打卡列表的API函数
export function getAllPost(page: number, size: number): Promise<GetAllPostResponse> {
  return instance.get('/word/post/getAll', { params: { page, size } });
}

//点赞
export function like(postId: number) {
  return instance.get('/word/like/create', { params: { postId: postId } })
}

//取消点赞
export function cancelLike(postId: number) {
  return instance.get('/word/like/cancel', { params: { postId: postId } })
}

//获取登录用户信息
export function info() {
  return instance.get('/word/user/info')
}

//获取我的登录打卡记录
export function getMyPost(page: number, size: number) {
  return instance.get('/word/post/getMine', { params: { page: page, size: size } })
}