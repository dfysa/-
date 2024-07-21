import axios, { AxiosError, AxiosResponse } from '@ohos/axios';

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://192.168.186.1:3000',
  timeout: 1000
});

// 定义接口
interface GetCodeParams {
  phone: string;
}

interface LoginRequest {
  phone: string;
  code: string;
}

@Entry
@Component
struct AxiosPage {
  @State phone: string = '';
  @State code: string = '';

  build() {
    Column({ space: 40 }) {

      TextInput({ placeholder: '请输入手机号码', text: this.phone })
        .type(InputType.PhoneNumber)
        .onChange((value) => {
          this.phone = value;
        });
      Row({ space: 10 }) {
        TextInput({ placeholder: '请输入验证码', text: this.code })
          .type(InputType.Number)
          .layoutWeight(1)
          .onChange((value) => {
            this.code = value;
          });
        Button('发送验证码')
          .onClick(() => {
            // 发送get请求
            const params: GetCodeParams = { phone: this.phone };
            instance.get('/word/user/code', { params })
              .then((response: AxiosResponse) => {
                this.code = response.data.data;
              })
              .catch((error: AxiosError) => {
                console.log(error.message); // 打印错误消息
              });
          });
      }.width('100%');

      Button('登录')
        .onClick(() => {
          // 发送post请求
          const data: LoginRequest = { phone: this.phone, code: this.code };
          instance.post('/word/user/login', data)
            .then((response: AxiosResponse) => {
              console.log(response.data.data);
            })
            .catch((error: AxiosError) => {
              console.log(error.message); // 打印错误消息
            });
        })
        .width('90%');
    }.width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .padding(20);
  }
}
