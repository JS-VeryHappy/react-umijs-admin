// 我们约定了 src/access.ts 为我们的权限定义文件，该文件需要默认导出一个方法，
// 导出的方法会在项目初始化时被执行。该方法需要返回一个对象，对象的每一个值就对应定义了一条权限

import { history } from 'umi';

export default function(initialState: any) {
  // const {  role } = initialState;

  return {
    checkAuth:(access:any)=>{
      if(access.path === '/noAuth'){
         return false;
      }
      return true;
    },
    authShow: true,
    canUpdateFoo:false,
    canDeleteFoo: (cid: number) => {
      return cid === 1;
    },
  };
}
