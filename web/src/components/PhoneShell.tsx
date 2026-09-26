"use client";
import { MotionConfig } from "motion/react";
import Celebration from "./ui/Celebration";
import { LandingPanel } from "./Landing";
import { FrameCtx } from "@/lib/frame";

/** Login portal: hero on the left, the phone on the right. Full screen on a real phone. */
export default function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh w-full overflow-hidden sm:flex sm:items-center sm:justify-center sm:py-6 lg:justify-between lg:px-[max(4rem,calc((100vw-72rem)/2))] sm:bg-[radial-gradient(circle_at_20%_10%,#f7c6d6_0,transparent_35%),radial-gradient(circle_at_85%_80%,#fff1c2_0,transparent_40%),#e9e5f5]">
        <LandingPanel />
        <FrameCtx.Provider value={true}>
          <div className="relative shrink-0">
          <div className="relative w-full h-dvh sm:h-[min(760px,calc(100dvh-48px))] sm:w-[360px] sm:rounded-[46px] sm:border-[9px] sm:border-ink sm:shadow-[0_40px_80px_-30px_rgba(23,21,59,.55)] overflow-hidden app-bg flex flex-col shrink-0"
            style={{ transform: "translateZ(0)" }}>
            <div className="hidden sm:flex items-center justify-between px-8 pt-3 pb-1 text-[13px] font-semibold shrink-0">
              <span>9:41</span><span className="h-6 w-24 rounded-full bg-ink" />
              <span className="flex items-center gap-1">{[5, 7, 9, 11].map((h) => <span key={h} className="w-[3px] bg-ink rounded-sm" style={{ height: h }} />)}</span>
            </div>
            <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
            <Celebration />
          </div>
          </div>
        </FrameCtx.Provider>
      </div>
    </MotionConfig>
  );
}
