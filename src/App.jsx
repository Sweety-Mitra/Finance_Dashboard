import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        Finance Dashboard
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        Main Content
      </main>
    </div>
  );
}

export default App;
