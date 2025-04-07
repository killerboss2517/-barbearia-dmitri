import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', margin: 0 }}>
      {/* Cabeçalho */}
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <h1>Barbearia Dmitri</h1>
        <p>Corte, barba, pintura e muito mais!</p>
      </header>

      {/* Seção de serviços */}
      <section style={{ marginTop: '20px' }}>
        <h2>Serviços</h2>
        <ul>
          <li>Corte de cabelo</li>
          <li>Pintura</li>
          <li>Barba</li>
          <li>Venda de produtos</li>
        </ul>
      </section>

      {/* Seção de agendamento */}
      <section style={{ marginTop: '20px' }}>
        <h2>Agendamento Online</h2>
        <p>Agende seu horário para não perder tempo. Clique abaixo para agendar:</p>
        <a href="https://calendly.com/gloriajoaopaulo8/30min" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>
          Agende agora
        </a>
      </section>

      {/* Seção de contato */}
      <section style={{ marginTop: '20px' }}>
        <h2>Contato</h2>
        <p>Ligue para: <a href="tel:+351968566669" style={{ color: '#007BFF' }}>+351 968 566 669</a></p>
      </section>
    </div>
  );
};

export default HomePage;
