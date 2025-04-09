"use client";

import { useEffect } from "react";

const InstagramWidget = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform";
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-4a1d4acb-fe18-4e0f-b240-74d1daec31a9"
      data-elfsight-app-lazy
    ></div>
  );
};

export default InstagramWidget;
