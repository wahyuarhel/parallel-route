// 'use client';
// import React from 'react';
// // if you are using Next.js 14, use below import instead. More info: https://github.com/ant-design/ant-design/issues/45567
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';

// import { useServerInsertedHTML } from 'next/navigation';

// const StyledComponentsRegistry = ({ children }) => {
//   const cache = React.useMemo(() => createCache(), []);
//   useServerInsertedHTML(() => (
//     <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
//   ));
//   return <StyleProvider cache={cache}>{children}</StyleProvider>;
// };

// export default StyledComponentsRegistry;

'use client';

import { StyleProvider, extractStaticStyle } from 'antd-style';
import { useServerInsertedHTML } from 'next/navigation';
import { useRef } from 'react';

const StyleRegistry = ({ children }) => {
  const isInsert = useRef(false);

  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    // refs: https://github.com/vercel/next.js/discussions/49354#discussioncomment-6279917
    if (isInsert.current) return;
    isInsert.current = true;
    // @ts-ignore
    return extractStaticStyle().map((item) => item.style);
  });

  return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>;
};

export default StyleRegistry;