import React from 'react';
import Link from 'next/link';

const categorias = [
  { nome: 'Embalagens', icone: '📦', href: '/produtos?categoria=embalagens' },
  { nome: 'Festas', icone: '🎈', href: '/produtos?categoria=festas' },
  { nome: 'Limpeza', icone: '🧹', href: '/produtos?categoria=limpeza' },
  { nome: 'Escritório', icone: '📎', href: '/produtos?categoria=escritorio' },
];

export default function HomePage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 max-w-4xl leading-tight">
          Tudo o que você precisa em <span className="text-[#e60000]">um só lugar</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
          A sua loja completa com os melhores produtos, qualidade garantida e preço justo.
        </p>
      </section>

      {/* Categorias */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Nossas Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria) => (
            <Link 
              key={categoria.nome} 
              href={categoria.href}
              className="flex flex-col items-center justify-center p-8 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="text-5xl mb-4" role="img" aria-label={categoria.nome}>
                {categoria.icone}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {categoria.nome}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}