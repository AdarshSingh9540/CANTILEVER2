"use client";
import { InfiniteScrolling } from "./ui/infiniteScrolling";

export function WallStreet() {
  return (
    <>
    <h1 className='text-white font-bold text-4xl m-6 p-4'>Articles By The Wall Street :</h1>
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteScrolling
        direction="right"
        speed="slow"
      />
    </div>
    </>
  );
}

