export default function Home() {
  const categories = [
    { id: 1, name: 'Maulid & Habsyi', icon: '🕌', color: 'bg-emerald-500' },
    { id: 2, name: 'Pernikahan', icon: '💍', color: 'bg-rose-500' },
    { id: 3, name: 'Haul & Tahlil', icon: '🌙', color: 'bg-indigo-600' },
    { id: 4, name: 'Baayun Maulid', icon: '👶', color: 'bg-amber-500' },
    { id: 5, name: 'Acara Kantor', icon: '🏢', color: 'bg-slate-700' },
    { id: 6, name: 'Khitanan', icon: '🧒', color: 'bg-blue-500' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Undangan Digital Tapin</h1>
        <p className="text-slate-500">Pilih kategori undangan sesuai kebutuhan Anda</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.id} className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center">
            <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <h3 className="font-semibold text-slate-800 text-center">{cat.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}