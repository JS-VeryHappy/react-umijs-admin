import mockjs from 'mockjs';
import { waitTime } from '../src/utils';

/**
 * mockjs 定义
 * https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
export const response = (data: any) => {
  return mockjs.mock(data);
};

/**
 *
 * @param req 请求实例
 * @param res 返回实例
 * @param data 数据
 * @param timeout 延迟
 */
export const getObj = async (
  data: any,
  timeout: number,
  req: any,
  res: any,
) => {
  if (timeout) {
    await waitTime(timeout);
  }

  return res.send(
    JSON.stringify(
      response({
        data: data,
        code: '0',
        reason: '成功',
      }),
    ),
  );
};

interface pageOptionType {
  total: number;
  list: [];
  nextPage: number;
  prePage: number;
  pageSize: number;
}
/**
 * @param req 请求实例
 * @param res 返回实例
 * @param data 数据
 * @param timeout 延迟
 */
export const getPagination = async (
  data: any,
  timeout: number = 0,
  option: pageOptionType | {},
  req: any,
  res: any,
) => {
  const defaultOption: pageOptionType = {
    ...{
      total: 100,
      list: [],
      nextPage: 1,
      prePage: 1,
      pageSize: 20,
    },
    ...option,
  };

  if (timeout) {
    await waitTime(timeout);
  }

  let body: any = {};
  try {
    body = req.body;
    if (body.page) {
      defaultOption.prePage = body.page + 1;
      defaultOption.nextPage = body.page + 2;
    }
  } catch (error) {}

  defaultOption.list = data;

  return response(defaultOption);
};
