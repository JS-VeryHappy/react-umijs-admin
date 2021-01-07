import React from 'react';

export default function(props: { location: { pathname: string; }; children: {} | null | undefined; }) {
  console.log("我是全局layouts钩子。");
  return (
    <>
      <div>我是公用头部</div>
      { props.children }
      <div>我是公用底部</div>
    </>
  );
}
