const loaderUtils =  require('loader-utils');


module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    source = source.replace(/我是首页了/,'loader替换成功')
    return source;
}