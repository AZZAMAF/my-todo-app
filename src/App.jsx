import { StrictMode, useState } from 'react'
import './App.css'
import { CheckCircle } from 'lucide-react'
import "tailwindcss"
import '@fontsource/pixelify-sans';
import Mood from './Components/Mood';
import InputTv from './Main/TodoApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    
  // Hapus p-4 dan items-center yang bikin sempit
    <main className="min-h-screen w-full">
      <InputTv />
    </main>
    
  )
}

export default App
