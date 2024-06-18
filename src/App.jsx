import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicDetail from './components/BasicDetail'
import TopicSelection from './components/TopicSelection'

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<BasicDetail />} />
        <Route path={"/topicselection"} element={<TopicSelection />} />
      </Routes>
    </div>
  );
}

export default App
