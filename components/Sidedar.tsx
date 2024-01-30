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
import { FaListUl, FaThumbtack } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LiaThumbtackSolid } from "react-icons/lia";

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
            <div className="flex items-center mt-7">
              <button className="rounded-full bg-white/15 p-2">
                <IoMdClose />
              </button>
              <a
                href=""
                className="text-sm text-white hover:bg-white hover:text-black ml-4 p-1 rounded-full bg-black/30"
              >
                Playlists
              </a>
              <a
                href=""
                className="text-sm text-white hover:bg-white hover:text-black ml-4 p-1 rounded-full bg-black/30"
              >
                Created too...
              </a>
            </div>
            <div className="flex items-center justify-between mt-7 text-zinc-400">
              <div className="rounded-full">
                <button>
                  <IoSearch className="h-7 w-7 hover:bg-zinc-700 focus:bg-zinc-950 active:bg-zinc-950 rounded-full transition-all duration-200 ease-in-out" />
                </button>
              </div>

              <div className="flex items-center gap-2 hover:text-white">
                <span>Recent</span>
                <FaListUl />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/liked.png"
                width={50}
                height={50}
                alt="capa músicas curtidas"
                className="rounded-lg"
              />
              <span>
                Liked Songs
                <div className="flex items-center">
                  <FaThumbtack className="text-green-500 gap-1" />
                  <span className="text-zinc-500">3.648 Songs</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/spiderVerse.jpeg"
                width={50}
                height={50}
                alt="capa Metro boomin presents spider-man across the spider-verse"
                className="rounded-lg"
              />
              <span>
                Metro boomin pres...
                <div className="flex items-center">
                  <span className="text-zinc-500">Metro Boomin</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/drakeAlbum.jpeg"
                width={50}
                height={50}
                alt="capa álbum certified lover boy"
                className="rounded-lg"
              />
              <span>
                Certified Lover Boy
                <div className="flex items-center">
                  <span className="text-zinc-500">Drake</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/theWeekend.jpeg"
                width={50}
                height={50}
                alt="capa this is the weeknd"
                className="rounded-lg"
              />
              <span>
                This is The Weeknd
                <div className="flex items-center">
                  <span className="text-zinc-500">Spotify</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/daily.jpeg"
                width={50}
                height={50}
                alt="capa álbum Utopia"
                className="rounded-lg"
              />
              <span>
                Daily Mix 1
                <div className="flex items-center">
                  <span className="text-zinc-500">Spotify</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/mix.jpeg"
                width={50}
                height={50}
                alt="capa mega hits mix"
                className="rounded-lg"
              />
              <span>
                Mega Hits Mix
                <div className="flex items-center">
                  <span className="text-zinc-500">Spotify</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/kendrickLamar.jpg"
                width={50}
                height={50}
                alt="capa playlsit"
                className="rounded-lg"
              />
              <span>
                Mr. Morale & the Bi...
                <div className="flex items-center">
                  <span className="text-zinc-500">Kendrick Lamar</span>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 p-2 hover:bg-zinc-800 rounded-lg">
              <Image
                src="/metro.jpg"
                width={50}
                height={50}
                alt="capa álbum Utopia"
                className="rounded-lg"
              />
              <span>
                This is Metro Boomin
                <div className="flex items-center">
                  <span className="text-zinc-500">Spotify</span>
                </div>
              </span>
            </div>
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
