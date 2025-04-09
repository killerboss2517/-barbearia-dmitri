'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: 0, margin: 0, backgroundColor: '#f4f4f4' }}>
      {/* Cabeçalho */}
      <header
        style={{
          backgroundColor: '#1a3d66',
          color: '#fff',
          padding: '40px 0',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/perfil.jpg"
          alt="Logo da Barbearia Dmitri"
          style={{
            width: '110px',
            height: 'auto',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginBottom: '10px',
            transition: 'transform 0.3s ease',
          }}
        />
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Barbearia Dmitri
        </h1>
      </header>

      {/* Menu de navegação */}
      <nav style={{ backgroundColor: '#1a3d66', padding: '15px 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {['Serviços', 'Agendamento', 'Contato'].map((item) => (
            <li key={item} style={{ margin: '0 25px' }}>
              <a
                href={item === 'Serviços' ? '/servicos' : `#${item.toLowerCase()}`}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  transition: 'color 0.3s, transform 0.3s',
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.color = '#5cb85c'}
                onMouseOut={(e) => (e.target as HTMLElement).style.color = '#fff'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Galeria de cortes */}
      <section id="galeria" style={{ marginTop: '40px', padding: '0 20px' }}>
        <h2 style={{ color: '#1a3d66', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          Galeria de Cortes
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '30px',
          }}
        >
          {['corte4.jpg', 'corte2.jpg', 'corte3.jpg', 'corte5.jpg'].map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <img
                src={`/images/${img}`}
                alt={`Corte ${i + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Seção de agendamento */}
      <section id="agendamento" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#1a3d66', fontSize: '2rem', fontWeight: 'bold' }}>Agendamento Online</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 300, margin: '20px 0' }}>
          Marque seu horário para não perder tempo. Clique abaixo para marcar:
        </p>
        <a
          href="https://calendly.com/gloriajoaopaulo8/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#0055a5',
            padding: '15px 30px',
            borderRadius: '30px',
            fontSize: '1.4rem',
            display: 'inline-block',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#004285';
            (e.target as HTMLElement).style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#0055a5';
            (e.target as HTMLElement).style.transform = 'scale(1)';
          }}
        >
          Agende agora
        </a>
      </section>

      {/* Seção de contato */}
      <section id="contato" style={{ marginTop: '40px', textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ color: '#1a3d66', fontSize: '2rem', fontWeight: 'bold' }}>Contato</h2>
        <p style={{ fontSize: '1.2rem' }}>
          Ligue para: <a href="tel:+351968566669" style={{ color: '#0055a5' }}>+351 968 566 669</a>
        </p>
      </section>

      {/* Rodapé com localização */}
      <footer
        style={{
          backgroundColor: '#1a3d66',
          color: '#fff',
          textAlign: 'center',
          padding: '30px 20px',
          fontSize: '0.9rem',
        }}
      >
        <p>Endereço: Rua Tito de Morais Loja 3 A, Lisboa, Portugal, 1750-455</p>
        <p style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} Barbearia Dmitri. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
