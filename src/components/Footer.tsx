import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 px-6 md:px-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tight mb-4 text-black">
              União <span className="text-[#e60000]">Embalagens</span>
            </div>
            <p className="text-[13px] text-[#666] leading-relaxed max-w-sm">
              Sua loja completa para embalagens, produtos de limpeza, artigos para festas e materiais de escritório.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-black mb-5 uppercase tracking-wide">Nossa Loja</h3>
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-4 h-4 text-[#e60000] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p className="text-[13px] text-[#666]">Av. Principal, 1000 - Centro<br />Aracaju - SE, 49000-000</p>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-black mb-5 uppercase tracking-wide">Contato</h3>
            <div className="flex items-center gap-3 mb-3 text-[13px] text-[#666]">
              <svg className="w-4 h-4 text-[#e60000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (11) 99999-9999
            </div>
            <div className="flex items-center gap-3 text-[13px] text-[#666]">
              <svg className="w-4 h-4 text-[#e60000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              contato@uniaoembalagens.com.br
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#999]">© 2026 União Embalagens. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/" className="text-xs text-[#999] hover:text-[#e60000]">Termos</Link>
            <Link href="/" className="text-xs text-[#999] hover:text-[#e60000]">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}