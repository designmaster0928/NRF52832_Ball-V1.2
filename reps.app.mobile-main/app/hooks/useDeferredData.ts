import { useEffect, useState } from 'react';

export function useDeferredData<T>(data: T | undefined): T | undefined {
  const [internalData, setInternalData] = useState<T>();

  useEffect(() => {
    setTimeout(() => {
      setInternalData(data);
    }, 0);
  }, [data]);

  return internalData;
}
