import React from 'react';
import { Link } from 'react-router-dom';

export default function Animals() {
  return (
    <div style={{padding: '40px', background: '#F5F7F6', minHeight: '100vh'}}>
      <Link to="/" style={{color: '#2E7D32', fontWeight: 'bold', textDecoration: 'none'}}>← Back to Dashboard</Link>
      
      <h1 style={{color: '#2E7D32', marginTop: '20px'}}>🐄 Animal Management</h1>
      
      <button style={{padding: '12px 24px', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>
        + Add New Animal
      </button>

      <div style={{marginTop: '30px'}}>
        <div style={{background: 'white', padding: '20px', borderRadius: '16px', marginBottom: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>
          <h3>1. Sundar - Cow</h3>
          <p><b>Breed:</b> Sahiwal | <b>Milk:</b> 18 L/day</p>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>
          <h3>2. Noori - Buffalo</h3>
          <p><b>Breed:</b> Nili-Ravi | <b>Milk:</b> 12 L/day</p>
        </div>
      </div>
    </div>
  );
}