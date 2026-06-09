import React from 'react';
import Link from 'next/link';

const produtosMock = [
  { id: 1, nome: 'Caixa de Papelão 20x20x20', marca: 'Klabin', preco: 'R$ 4,50' },
  { id: 2, nome: 'Fita Adesiva Transparente 45mm', marca: 'Eurocel', preco: 'R$ 3,20' },
  { id: 3, nome: 'Copo Descartável 200ml (100 un)', marca: 'Copobras', preco: 'R$ 7,90' },
  { id: 4, nome: 'Vassoura Piaçava sem Cabo', marca: 'Bettanin', preco: 'R$ 12,50' },
  { id: 5, nome: 'Papel Sulfite A4 (500 folhas)', marca: 'Chamex', preco: 'R$ 29,90' },
  { id: 6, nome: 'Saco de Lixo Preto 100L (100 un)', marca: 'Embalixo', preco: 'R$ 45,00' },
];

export default function ProdutosPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#e60000]">Início</Link> &gt; <span className="text-gray-900 font-medium">Catálogo de Produtos</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar (Filtros) - 25% */}
        <aside className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filtros</h2>
          
          {/* Filtro Categoria */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Categorias</h3>
            <div className="space-y-2">
              {['Embalagens', 'Festas', 'Limpeza', 'Escritório'].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#e60000] cursor-pointer" />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtro Marca */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Marcas</h3>
            <div className="space-y-2">
              {['Klabin', 'Eurocel', 'Copobras', 'Bettanin'].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#e60000] cursor-pointer" />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Grade Principal - 75% */}
        <section className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-black text-gray-900">Catálogo de Produtos</h1>
            <span className="text-gray-500">{produtosMock.length} produtos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {produtosMock.map((produto) => (
              <Link 
                href={`/produto/${produto.id}`} 
                key={produto.id}
                className="group flex flex-col bg-gray-50 border border-gray-100 p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="w-full aspect-square bg-white rounded-lg mb-4 shadow-sm" />
                <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">{produto.marca}</span>
                <h3 className="text-gray-800 font-medium mb-2 flex-grow">{produto.nome}</h3>
                <span className="text-xl font-bold text-gray-900">{produto.preco}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}