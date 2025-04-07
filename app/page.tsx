export default function BarbeariaDmitri() {
  return (
    <main className="min-h-screen bg-zinc-50 p-4 text-zinc-800">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Barbearia Dmitri</h1>
        <p className="text-sm text-zinc-600">
          Rua Tito de Morais Loja 3 A, Lisboa, 1750-455
        </p>
      </header>

      <section className="grid gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Serviços</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Corte de cabelo — 12€</li>
            <li>Pintar o cabelo — 20€</li>
            <li>Barba — 10€</li>
            <li>Produtos para cabelo e barba à venda</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Horário</h2>
          <p>Segunda a Sábado: 9h às 19h</p>
          <p>Domingo: Fechado</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Agendamentos</h2>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-2">
            Marcar horário online
          </button>
          <button className="w-full bg-gray-500 text-white py-2 rounded-lg">
            +351 968 566 669
          </button>
        </div>

        <footer className="text-center text-xs text-zinc-500 mt-6">
          <p>&copy; {new Date().getFullYear()} Barbearia Dmitri. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
