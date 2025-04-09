'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        padding: 0,
        margin: 0,
        backgroundColor: '#f4f4f4',
      }}
    >
      {/* Cabeçalho */}
      <header
        style={{
          backgroundColor: '#1a3d66',
          color: '#fff',
          padding: '20px 10px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="/images/perfil.jpg"
          alt="Logo da Barbearia Dmitri"
          style={{
            width: '80px',
            height: 'auto',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginBottom: '10px',
          }}
        />
        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Barbearia Dmitri
        </h1>
      </header>

      {/* Menu de navegação */}
      <nav
        style={{
          backgroundColor: '#1a3d66',
          padding: '10px 0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {['Serviços', 'Agendamento', 'Contato'].map((item) => (
            <li key={item}>
              <a
                href={item === 'Serviços' ? '/servicos' : `#${item.toLowerCase()}`}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Galeria de cortes */}
      <section id="galeria" style={{ marginTop: '20px', padding: '10px' }}>
        <h2
          style={{
            color: '#1a3d66',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Galeria de Cortes
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '15px',
            marginTop: '20px',
          }}
        >
          {['corte4.jpg', 'corte2.jpg', 'corte3.jpg', 'corte5.jpg'].map((img, i) => (
            <div key={i} style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <img
                src={`/images/${img}`}
                alt={`Corte ${i + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Seção de agendamento */}
      <section id="agendamento" style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1a3d66', fontSize: '1.5rem', fontWeight: 'bold' }}>Agendamento Online</h2>
        <p style={{ fontSize: '.9rem', marginBottom: '.9rem' }}>
          Marque seu horário para não perder tempo:
        </p>
        <a
          href="https://calendly.com/gloriajoaopaulo8/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#0055a5',
            padding: '.7rem 1.5rem',
            borderRadius: '.7rem',
            fontSize: '.9rem',
            display: 'inline-block',
          }}
        >
          Agende agora
        </a>
      </section>

      {/* Seção de contato */}
      <section id="contato" style={{ marginTop: '.7rem', textAlign: 'center' }}>
        <h2 style={{ color: '#1a3d66', fontSize: '1.5rem', fontWeight: 'bold' }}>Contato</h2>
        <p style={{ fontSize: '.9rem' }}>
          Ligue para: <a href="tel:+351968566669" style={{ color: '#0055a5' }}>+351 968 566 669</a>
        </p>
      </section>

      {/* Rodapé com localização */}
      <footer
        style={{
          backgroundColor: '#1a3d66',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 10px',
          fontSize: '0.7rem',
        }}
      >
        <p>Endereço: Rua Tito de Morais Loja 3 A, Lisboa, Portugal, 1750-455</p>
        <p style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} Barbearia Dmitri. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
