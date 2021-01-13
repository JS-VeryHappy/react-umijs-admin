import mockjs from 'mockjs';

/**
 * mockjs 定义
 * https://www.jianshu.com/p/d812ce349265
 */
const response = (data: any) => {
    return mockjs.mock(data)
};

/**
 * 返回普通对象
 * @param data 
 */
export const list = (data: {}) => {
    return response({
        data: data,
        code: '0',
        reason: '成功',
    })
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
export const pagination = (list: []) => {

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

export default response;