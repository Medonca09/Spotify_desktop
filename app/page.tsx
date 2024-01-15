import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<aside className="w-72 bg-zinc-950 p-6">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-red-500 rounded-full" />
						<div className="w-3 h-3 bg-yellow-500 rounded-full" />
						<div className="w-3 h-3 bg-green-500 rounded-full" />
					</div>
					<nav className="space-y-5 mt-10">
						<a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
							<HomeIcon />
							Home
						</a>
						<a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
							<Search />
							Search
						</a>
						<nav>
							<a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
								<Library />
								Your Library
							</a>
						</nav>
					</nav>

					<nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
						<a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
						<a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily mix 6</a>
						<a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hits da Internet</a>
						
					</nav>
				</aside>
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
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
						<a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
							<img src='/album.png' width={104} height={104} alt='capa álbum Utopia'/>
							<strong>Utopia</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

					</div>

					<h2 className='font-bold text-3xl mt-10'>Made for Lucas Mendonça Martins</h2>

					<div className="grid grid-cols-8 gap-4 mt-4">
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<img src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<img src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<img src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<img src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
						<a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
						<img src='/album.png' className='w-full' width={120} height={120} alt='capa álbum Utopia'/>
						<strong className='font-semibold'>Daily Mix 1</strong>
						<span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
						</a>
					</div>
				</main> 
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
			<div className='flex items-center gap-3'>
			<img src='/album.png' width={56} height={56} alt='capa álbum Utopia'/>
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
						<Play />
					</button>

					<SkipForward size={20} className='text-zinc-200'/>
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
		</div>
	);
}
