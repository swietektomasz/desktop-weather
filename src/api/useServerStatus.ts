import { useState } from "react";

type StatusResponse = {
  server: string;
  locationDb: string;
};

export const useServerStatus = () => {
  const [status, setStatus] = useState<StatusResponse>();

  const checkStatus = async () => {
    await fetch("http://localhost:3000/status")
      .then((res) => res.json())
      .then((serverStatus) => setStatus(serverStatus))
      .catch(() => setStatus({ server: "offline", locationDb: "offline" }));
  };

  return { checkStatus, status };
};
