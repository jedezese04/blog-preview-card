'use client';

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();

  return <NextUIProvider navigate={navigate.push}>{children}</NextUIProvider>;
};

export default UIProvider;
