import { useState } from 'react';
import { calculateBMR, calculateTDEE } from '../utils/fitnessLogic';

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male'
  });
  const [targetCalories, setTargetCalories] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const bmr = calculateBMR(userInfo.weight, userInfo.height, userInfo.age, userInfo.gender);
    const tdee = calculateTDEE(bmr);
    setTargetCalories(tdee);
    
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">caloris</h2>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">calculer</h3>
        <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="number" 
            placeholder="(kg)" 
            className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setUserInfo({...userInfo, weight: e.target.value})}
            required 
          />
          <input 
            type="number" 
            placeholder="(cm)" 
            className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setUserInfo({...userInfo, height: e.target.value})}
            required 
          />
          <input 
            type="number" 
            placeholder="age" 
            className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
            required 
          />
          <select 
            className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setUserInfo({...userInfo, gender: e.target.value})}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button 
            type="submit" 
            className="md:col-span-2 bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            add
          </button>
        </form>

        {targetCalories && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
            <p className="text-gray-700">les caloris par jours:</p>
            <span className="text-3xl font-black text-green-600">{targetCalories} kcal</span>
          </div>
        )}
      </div>
    </div>
  );
}