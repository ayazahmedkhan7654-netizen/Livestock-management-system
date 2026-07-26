const getAIStatus = (milk) => {
  if(milk < 15) return "⚠️ Alert: Milk kam hai, Vet se check karwao";
  if(milk > 17) return "✅ Healthy: Production Acha hai";
  return "🟡 Normal";
}