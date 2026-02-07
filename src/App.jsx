import { StrictMode, useState } from 'react'
import './App.css'
import { CheckCircle } from 'lucide-react'
import "tailwindcss"
import '@fontsource/pixelify-sans';
import TodoApp from './Main/TodoApp';

function App() {

  return (
    
  // Hapus p-4 dan items-center yang bikin sempit
    <main className="min-h-screen w-full">
      <TodoApp />
    </main>
    
  )
}

export default App
