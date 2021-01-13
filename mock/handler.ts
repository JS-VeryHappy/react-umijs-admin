import mockjs from 'mockjs';

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

/**
 * mockjs 定义
 * https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
export const response = (data: any) => {
    return mockjs.mock(data);
};

/**
 * 返回普通对象
 * @param data 
 */
export const objData = (data: {}) => {
    return response({
        data: data,
        code: '0',
        reason: '成功',
    })
};
/**
 * 延迟执行返回
 * @param req 
 * @param res 
 * @param data 
 */
export const objDataTimeout = async (req: any,res:any,data:any,timeout:number = 1000) => {
   
    await waitTime(timeout);

    return  res.send(JSON.stringify(objData(data)));
};

interface pageOptionType {
    total: number,
    list: [],
    size: number,
    nextPage: number,
    prePage: number,
    pageSize: number,
}
/**
 * 返回分页数据
 * @param list 
 */
export const paginationData = (list: []) => {

    const defaultOption: pageOptionType = {
        total: 20,
        list: [],
        size: 20,
        nextPage: 1,
        prePage: 1,
        pageSize: 20,
    }

    defaultOption.list = list;

    return response(defaultOption);
};

