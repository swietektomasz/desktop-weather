import { useEffect } from "react";
import { useServerStatus } from "../api/useServerStatus";

export const ServerStatus = () => {
  const { status, checkStatus } = useServerStatus();

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="flex p-1 m-1 text-center">
      <div
        className={`${
          status?.server === "online" ? "bg-green-600" : "bg-red-600"
        } p-1 rounded-md`}
      >
        {status?.server ?? "offline"}
      </div>
      <button className="flex items-center ml-2" onClick={() => checkStatus()}>
        <i className="iconoir-refresh" />
      </button>
    </div>
  );
};
