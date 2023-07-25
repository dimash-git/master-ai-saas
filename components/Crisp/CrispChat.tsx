"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2d2cf1fd-f865-48f5-8c91-4702800b86eb");
  }, []);
  return null;
};

export default CrispChat;
