import React, { useState, useEffect } from 'react';

export default function App() {
  const [counties, setCounties] = useState([]);
  const [threshold, setThreshold] = useState(65000);

  useEffect(() => {
    // Fetching Alabama Census Data
    fetch("https://api.census.gov/data/2023/acs/acs5?get=NAME,B19013_001E,B01003_001E&for=county:*&in=state:01")
      .then(res => res.json())
      .then(data => {
        const formatted = data.slice(1).map(row => ({
          name: row[0].replace(", Alabama", ""),
          income: parseInt(row[1]),
          pop: parseInt(row[2])
        })).sort((a, b) => b.income - a.income);
        setCounties(formatted);
      });
  }, []);

  return (
    // bg-slate-50: Professional light gray background
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      
      {/* Header Section */}
      <header className="mb-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Alabama Philanthropic <span className="text-red-600">Prospector</span>
        </h1>
        <p className="text-slate-600 mt-2 text-lg">Identifying high-capacity donor hubs for $1M+ initiatives.</p>
        
        {/* Filter Bar */}
        <div className="mt-6 flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <label className="font-semibold text-slate-700">Min. Median Income:</label>
          <input 
            type="range" min="30000" max="100000" step="5000"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            className="w-48 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="font-mono text-blue-700 font-bold">${parseInt(threshold).toLocaleString()}</span>
        </div>
      </header>

      {/* Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {counties.filter(c => c.income >= threshold).map(county => (
          <div key={county.name} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800">{county.name}</h2>
              {/* Conditional Badging */}
              {county.income > 75000 && (
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  High Capacity
                </span>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Median Income:</span>
                <span className="font-semibold text-slate-900">${county.income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Est. Population:</span>
                <span className="font-semibold text-slate-900">{county.pop.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}