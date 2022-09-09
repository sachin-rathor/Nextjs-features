import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toISOString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "55px", margin: "20px", textAlign: "center" }}>{clockState}</div>;
}

export default Clock;