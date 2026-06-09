import React from 'react';
import Link from 'next/link';

export default function CadastroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-black text-center text-gray-900 mb-8">
          Crie sua conta
        </h1>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
            <input 
              type="text" 
              placeholder="João da Silva" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e60000] focus:border-[#e60000] outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e60000] focus:border-[#e60000] outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e60000] focus:border-[#e60000] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e60000] focus:border-[#e60000] outline-none transition-colors"
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-[#e60000] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
              Cadastrar
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-8">
          Já tem uma conta? <Link href="/login" className="text-[#e60000] font-semibold hover:underline">Faça login</Link>
        </p>
      </div>
    </main>
  );
}
