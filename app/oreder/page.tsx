'use client';
import { useState } from 'react';

export default function OrderPage() {
  const [formData, setFormData] = useState({ name: '', date: '', location: '', category: 'Maulid' });
  const [aiResult, setAiResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateAI = async () => {
    setLoading(true);
    try {
      const prompt = `Buatkan teks undangan puitis dalam Bahasa Banjar Halus untuk acara ${formData.category}. Nama: ${formData.name}, Tanggal: ${formData.date}, Lokasi: ${formData.location}.`;
      
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setAiResult(data.text);
    } catch (error) {
      alert("Gagal memanggil AI. Pastikan GEMINI_API_KEY sudah diisi di Vercel.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
        <h1 className="text-2xl font-bold mb-6 text-slate-800 text-center">Buat Undangan Digital</h1>
        
        <div className="space-y-4">
          <input 
            type="text" placeholder="Nama Acara (Contoh: Pernikahan Budi & Ani)" 
            className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="date" 
            className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none"
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
          <textarea 
            placeholder="Lokasi Lengkap" 
            className="w-full p-4 rounded-2xl bg-slate-50 border-none h-24 outline-none"
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          ></textarea>

          <button 
            onClick={handleGenerateAI}
            disabled={loading}
            className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-md disabled:bg-slate-300"
          >
            {loading ? 'AI Sedang Mengetik...' : '🪄 Karangkan Teks Pakai AI'}
          </button>

          {aiResult && (
            <div className="mt-6 p-5 bg-emerald-50 rounded-2xl border border-emerald-100 animate-fade-in">
              <h3 className="text-xs font-black text-emerald-800 mb-3 uppercase tracking-widest">Hasil Karangan AI:</h3>
              <p className="text-slate-700 leading-relaxed italic whitespace-pre-wrap text-sm">{aiResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}