function App() {
  const getAIStatus = (milk) => {
    if(milk < 15) return "⚠️ Alert: Milk kam hai, Vet se check karwao";
    if(milk > 17) return "✅ Healthy: Production Acha hai";
    return "🟡 Normal";
  }

  return (
    <div style={{padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Livestock Management System</h1>
      <p>Status: {getAIStatus(14)}</p>
    </div>
  )
}

export default App
