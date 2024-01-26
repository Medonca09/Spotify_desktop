import { HomeIcon, Library, Search, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from "lucide-react";

import Image from "next/image";
import { CgPlayTrackNext } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
			<div className='flex items-center gap-3'>
			<Image src='/album.png' width={56} height={56} alt='capa álbum Utopia'/>
			<div className='flex flex-col'>
				<strong className='font-normal'>FE!N(feat.Playboi Carti)</strong>
				<span className='text-xs text-zinc-400'>Travis Scott, Playboi Carti</span>
			</div>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<div className='flex items-center gap-6'>
					<Shuffle size={20} className='text-zinc-200'/>
					<SkipBack size={20} className='text-zinc-200'/>

					<button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
					<FaPlay />
					</button>

					<CgPlayTrackNext size={30} className='text-zinc-200'/>
					<Repeat size={20} className='text-zinc-200'/>
				</div>
				<div className='flex items-center gap-2'>
					<span className="text-xs text-zinc-400">1:24</span>
					<div className='h-1 rounded-full w-96 bg-zinc-600'>
						<div className='bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-600 transition-colors'></div>
					</div>
					<span className="text-xs text-zinc-400">3:11</span>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<Mic2 size={20}/>
				<LayoutList size={20}/>
				<Laptop2 size={20}/>
				<div className='flex items-center gap-2'>
					<Volume size={20}/>
					<div className='h-1 rounded-full w-24 bg-zinc-600'>
						<div className='bg-zinc-200 w-10 h-1 rounded-full hover:bg-green-600 transition-colors'></div>
					</div>
				</div>
				<Maximize2 size={20}/>
			</div>
			</footer>
    )
}