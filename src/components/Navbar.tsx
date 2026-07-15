'use client';
import Image from 'next/image';
import {useEffect,useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import {navigation} from '@/data/navigation';
import {company} from '@/data/company';

export default function Navbar(){
  const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),[progress,setProgress]=useState(0);
  useEffect(()=>{const on=()=>{setScrolled(scrollY>24);setProgress(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)};addEventListener('scroll',on,{passive:true});return()=>removeEventListener('scroll',on)},[]);
  return <header className="fixed z-50 w-full px-4 pt-4 md:px-8"><div style={{width:`${progress}%`}} className="fixed left-0 top-0 z-50 h-[2px] bg-[#d2a84a]"/><nav className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-full border px-5 py-3 text-white transition-all duration-500 ${scrolled?'border-white/15 bg-[#4e0e0e]/85 shadow-2xl backdrop-blur-xl':'border-white/10 bg-transparent'}`}><a href="#beranda" aria-label="Elang Dua, beranda" className="relative block h-[32px] w-[112px] shrink-0 md:h-[40px] md:w-[132px]"><Image src="/images/logo/elang-dua-logo.png" alt="Elang Dua" fill sizes="(max-width: 768px) 112px, 132px" className="object-contain" priority/></a><div className="hidden items-center gap-7 text-sm text-white/75 lg:flex">{navigation.map(n=><a key={n.href} href={n.href} className="transition hover:text-[#d2a84a]">{n.label}</a>)}</div><a href={company.whatsapp?'https://wa.me/'+company.whatsapp:'#kontak'} className="hidden items-center gap-2 rounded-full bg-[#d2a84a] px-4 py-2 text-sm font-bold text-[#4e0e0e] lg:flex">WhatsApp <ArrowUpRight size={15}/></a><button aria-label="Buka menu" onClick={()=>setOpen(!open)} className="lg:hidden">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mx-2 mt-2 rounded-3xl bg-[#4e0e0e] p-5 text-white lg:hidden">{navigation.map(n=><a onClick={()=>setOpen(false)} key={n.href} href={n.href} className="block border-b border-white/10 py-4">{n.label}</a>)}<a href="#kontak" onClick={()=>setOpen(false)} className="mt-4 block rounded-full bg-[#d2a84a] px-4 py-3 text-center font-bold text-[#4e0e0e]">Hubungi Kami</a></div>}</header>
}
