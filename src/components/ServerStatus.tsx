import { useServerStatus } from "../api/useServerStatus";

export const ServerStatus = () => {
  const { status, checkStatus } = useServerStatus();

  return (
    <div>
      {status?.server}
      <button onClick={() => checkStatus()}>refresh</button>
    </div>
  );
};
