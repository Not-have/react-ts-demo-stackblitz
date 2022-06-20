import * as React from 'react';

import { useState } from 'react';
import { usePow } from './utils';
export default function App() {
  const [flag, setFlag] = useState<boolean>(true);
  const data = usePow([1, 2, 3]);
  return (
    <div>
      <div>数字：{JSON.stringify(data)}</div>
      <button
        color="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        切换
      </button>
      <div>切换状态：{JSON.stringify(flag)}</div>
    </div>
  );
}
