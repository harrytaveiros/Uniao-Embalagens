import React from 'react';
import Link from 'next/link';

export default function RecuperarSenhaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-black text-center text-gray-900 mb-4">
          Recuperar Senha
        </h1>
        
        <p className="text-center text-gray-600 mb-8 text-sm">
          Digite o seu e-mail abaixo e enviaremos as instruções para você redefinir sua senha.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail cadastrado</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e60000] focus:border-[#e60000] outline-none transition-colors"
            />
          </div>

          <button type="submit" className="w-full bg-[#e60000] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
            Enviar instruções
          </button>
        </form>

        <div className="text-center mt-8">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-[#e60000] transition-colors">
            &larr; Voltar para o login
          </Link>
        </div>
      </div>
    </main>
  );
}