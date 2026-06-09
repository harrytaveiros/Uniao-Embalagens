import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 md:px-12 md:py-5 border-b border-gray-100 bg-white sticky top-0 z-50 gap-4">
      
      {/* Logo */}
      <Link href="/" className="text-2xl md:text-[26px] font-black text-black tracking-tight cursor-pointer">
        União <span className="text-[#e60000]">Embalagens</span>
      </Link>

      {/* Barra de Pesquisa */}
      <div className="order-3 md:order-none w-full md:flex-1 md:max-w-2xl relative">
        <svg className="w-4 h-4 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          aria-label="Pesquisar produtos"
          placeholder="O que você está procurando?" 
          className="w-full bg-[#fafafa] border border-[#e5e5e5] rounded-full py-3 px-5 pl-12 text-sm outline-none focus:border-gray-300 focus:bg-white transition-all"
        />
      </div>

      {/* Ações */}
      <div className="flex gap-6 md:gap-8 items-center">
        <Link href="/login" className="flex flex-col items-center text-[#666] hover:text-[#e60000] transition-colors group">
          <svg className="w-6 h-6 text-gray-800 group-hover:text-[#e60000] mb-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block">Entrar</span>
        </Link>

        <Link href="/carrinho" className="flex flex-col items-center text-[#666] hover:text-[#e60000] transition-colors relative group">
          <svg className="w-6 h-6 text-gray-800 group-hover:text-[#e60000] mb-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-1 -right-2 bg-[#e60000] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-white">
            2
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block">Sacola</span>
        </Link>
      </div>

    </header>
  );
}