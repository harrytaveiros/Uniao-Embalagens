"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CarrinhoPage() {
  const [itens, setItens] = useState([
    { id: 1, nome: 'Caixa de Papelão 20x20x20', preco: 4.50, quantidade: 10 },
    { id: 2, nome: 'Fita Adesiva Transparente 45mm', preco: 3.20, quantidade: 3 },
  ]);

  const alterarQuantidade = (id: number, delta: number) => {
    setItens(itens.map(item => {
      if (item.id === id) {
        const novaQuantidade = Math.max(1, item.quantidade + delta);
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    }));
  };

  const removerItem = (id: number) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const subtotal = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 lg:py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-8">Seu Carrinho</h1>

      {itens.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <p className="text-lg text-gray-600 mb-6">Seu carrinho está vazio no momento.</p>
          <Link href="/produtos" className="inline-block bg-[#e60000] text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Lista de Produtos - 65% */}
          <section className="w-full lg:w-[65%] space-y-6">
            {itens.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm gap-4">
                
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-md shrink-0 flex-none" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.nome}</h3>
                    <p className="text-[#e60000] font-bold mt-1">
                      R$ {item.preco.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-4 sm:mt-0">
                  {/* Controle de Quantidade */}
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => alterarQuantidade(item.id, -1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
                    >
                      -
                    </button>
                    <span className="px-4 font-medium text-gray-800">{item.quantidade}</span>
                    <button 
                      onClick={() => alterarQuantidade(item.id, 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal do Item & Remover */}
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-900 whitespace-nowrap hidden sm:inline-block">
                      R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                    </span>
                    <button 
                      onClick={() => removerItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                      aria-label="Remover item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </section>

          {/* Resumo do Pedido - 35% */}
          <aside className="w-full lg:w-[35%] bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo do Pedido</h2>
            
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <span>Frete</span>
              <span>A combinar</span>
            </div>
            
            <div className="flex justify-between font-black text-xl text-gray-900 mb-8">
              <span>Total</span>
              <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>

            <button className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition shadow-lg shadow-green-600/20">
              Finalizar Compra via WhatsApp
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}