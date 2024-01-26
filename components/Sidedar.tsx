import {
  HomeIcon,
  Library,
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";

import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="w-72 bg-black p-6">
      <nav className="space-y-5 -mt-4">
        <div className="border-spacing-1 rounded-lg -mr-4 -ml-5 p-5 py-6 bg-zinc-900">
          <a
            href=""
            className="flex items-center gap-6 text-sm font-semibold text-zinc-200 mb-5"
          >
            <HomeIcon />
            Home
          </a>
          <a
            href=""
            className="flex items-center gap-6 text-sm font-semibold text-zinc-200"
          >
            <Search />
            Search
          </a>
        </div>
        <nav>
            <div className="border-spacing-1 rounded-lg -mr-4 -ml-5 bg-zinc-900 h-96 p-5 custom-height">
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
          >
            <Library />
            Your Library
          </a>
          </div>
        </nav>
      </nav>

      {/* <nav className="mt-10 pt-10  border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Daily mix 6
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hits da Internet
        </a>
      </nav> */}
    </aside>
  );
}
