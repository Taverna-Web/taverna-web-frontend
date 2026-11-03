export function HomePage() {
  return (
    <main style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>Taverna Web</h1>
      <p style={{ fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2rem' }}>
        Plataforma moderna para gerenciamento e imersão em campanhas de RPG de mesa.
      </p>
      <div
        style={{
          display: 'inline-block',
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          backgroundColor: '#1f2937',
          border: '1px solid #374151',
          color: '#e5e7eb',
        }}
      >
        <span>Ambiente inicial pronto com arquitetura <strong>Feature-Sliced Design (FSD)</strong>.</span>
      </div>
    </main>
  )
}
