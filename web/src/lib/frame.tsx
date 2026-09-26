"use client";
import { createContext, useContext } from "react";

/** True when rendering inside the portal's phone frame (sheets stay bottom sheets there). */
export const FrameCtx = createContext(false);
export const useInFrame = () => useContext(FrameCtx);
