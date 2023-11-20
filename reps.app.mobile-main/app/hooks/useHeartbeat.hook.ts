import { useEffect, useState } from 'react';

export function useHeartbeat(isPaused?: boolean): number {
  const [heartbeat, setHeartbeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat((prev) => prev + 1);
    }, 1000);

    if (isPaused) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return heartbeat;
}
