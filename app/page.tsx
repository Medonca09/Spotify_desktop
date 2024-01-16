import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidedar';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

import Image from 'next/image';
export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<Sidebar />
				<main className="flex-1 p-6">
					<div className="flex items-center gap-4">
						<button className='rounded-full bg-black/40 p-1'>
							<ChevronLeft />
						</button>
						<button className='rounded-full bg-black/40 p-1'>
							<ChevronRight />
						</button>
					</div>

					<h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>

					<div className='grid grid-cols-3 gap-4 mt-4'>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/Utopia.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/musicasCurtidas.jpeg' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Músicas Curidas</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/heroesVilans.jpeg' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>HEROES E VILLAINS</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/dailyMix.jpeg' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Daily Mix 3</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/topBrasil.jpeg' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Top Brasil</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<Image src='/podpah.jpeg' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>PodPah Podcast</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

					</div>

					<h2 className='font-bold text-3xl mt-10'>Made for Lucas Mendonça Martins</h2>

					<div className="grid grid-cols-8 gap-4 mt-4">
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/funkHits.jpeg' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Funk Hits</strong>
						<span className="text-sm text-zinc-500">Subindo e descendo e os funks mais chave do Brasil</span>
						<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/uqi.jpeg' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Um quebrada Inteligente</strong>
						<span className="text-sm text-zinc-500">Kyan, Mu540</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Utopia</strong>
						<span className="text-sm text-zinc-500">Travis Scott</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/top.webp' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Top Brasil</strong>
						<span className="text-sm text-zinc-500">As músicas que estão em alta no Brasil!</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/future.jpg' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>This is Future</strong>
						<span className="text-sm text-zinc-500">This is Future. Todos os maiores sucessos de Future</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/theWeekend.jpeg' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>This is The Weeknd</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<Image src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
					</div>
				</main> 
			</div>
			<Footer />
		</div> 
	);
}
