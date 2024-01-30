import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidedar";
import { FaPlay, FaRegBell, FaUser } from "react-icons/fa";
import {
  Home as HomeIcon,
  Search,
  Library,
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
import { MdDownload } from "react-icons/md";
export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar />
        <main
          className="flex-1 p-6 h-64 custom-height-page
		bg-black"
        >
          <div className="custom-height-page -ml-6 -mr-6 bg-zinc-900 rounded-lg">
            <div
              className="flex-1 p-6 h-64
		bg-gradient-to-b from-indigo-900 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-black p-1">
                  <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/50 p-1">
                  <ChevronRight />
                </button>
              </div>

              <div className="flex justify-end items-center gap-4 mb-4">
                <button className="flex items-center rounded-full p-2 bg-black/55 w-36">
                  <MdDownload className="mr-2" />
                  Install app
                </button>

                <button className="rounded-full bg-black/55 p-2">
                  <FaRegBell />
                </button>

                <button className="rounded-full bg-black/55 p-2">
                  <FaUser />
                </button>
              </div>

              <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/liked.png"
                    width={104}
                    height={104}
                    alt="capa álbum Utopia"
                  />
                  <strong>Liked Songs</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/Utopia.png"
                    width={104}
                    height={104}
                    alt="capa álbum Utopia"
                  />
                  <strong>Utopia</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/heroesVilans.jpeg"
                    width={104}
                    height={104}
                    alt="capa álbum Utopia"
                  />
                  <strong>HEROES E VILLAINS</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/dailyMix.jpeg"
                    width={104}
                    height={104}
                    alt="capa álbum Utopia"
                  />
                  <strong>Daily Mix 3</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/21savage.jpeg"
                    width={104}
                    height={104}
                    alt="capa álbum Savage Mode 2"
                  />
                  <strong>Savage Mode 2</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/drakeAlbum.jpeg"
                    width={104}
                    height={104}
                    alt="capa álbum certified lover boy"
                  />
                  <strong>Certified Lover Boy</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <FaPlay />
                  </button>
                </a>
              </div>

              <h2 className="font-bold text-3xl mt-10">
                Made For You
              </h2>

              <div className="grid grid-cols-8 gap-4 mt-4">
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/drakeAlbum.jpeg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum certified lover boy"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">Certified Lover Boy</strong>
                  <span className="text-sm text-zinc-500">
                    Drake
                  </span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/spiderVerse.jpeg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">
                      METRO BOOMIN PRE...
                  </strong>
                  <span className="text-sm text-zinc-500">Metro Boomin</span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/album.png"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">Utopia</strong>
                  <span className="text-sm text-zinc-500">Travis Scott</span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/future.jpg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">This is Future</strong>
                  <span className="text-sm text-zinc-500">
                    This is Future. Todos os maiores sucessos de Future
                  </span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/21savage.jpeg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">Savage Mode 2</strong>
                  <span className="text-sm text-zinc-500">
                    21 Savage, Metro Boomin
                  </span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/theWeekend.jpeg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">This is The Weeknd</strong>
                  <span className="text-sm text-zinc-500">
                    This is The Weeknd. Todos os maiores sucessos de The Weeknd
                  </span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/daily.jpeg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Utopia"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">Daily Mix 1</strong>
                  <span className="text-sm text-zinc-500">
                    Harry Styles, Dua Lipa, Lady Gaga, Lana Del Rey
                  </span>
                </a>
                <a
                  href=""
                  className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src="/kendrickLamar.jpg"
                    className="w-full"
                    width={120}
                    height={120}
                    alt="capa álbum Mr. Morale & the Big Steppers"
                  />
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible ml-36 -mt-10 ">
                    <FaPlay />
                  </button>
                  <strong className="font-semibold">Mr. Morale & the Big Steppers</strong>
                  <span className="text-sm text-zinc-500">Kendrick Lamar</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
