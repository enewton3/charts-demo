import React from "react";
import LeftNav from "./LeftNav";

export default function Layout({ children }) {
  return (
    <>
      <LeftNav />
      {children}
    </>
  );
}
