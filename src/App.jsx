import { useState } from 'react'
import rules from './data/rules'
import Header from './components/header.jsx'
import RuleList from './components/rulelist.jsx'
import SearchBar from './components/searchbar.jsx'
import Tips from './components/tips.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [allRules] = useState(rules);
  const [filteredRules, setFilteredRules] = useState(rules);
  const [ setCompletedCount] = useState(0);
  function onToggleCompliance(isCompleted) {
    setCompletedCount((prev) => Math.max(0, prev + (isCompleted ? 1 : -1)));
  }
  return (
    <main className="min-h-screen flex flex-col items-center gap-6">
  <Header title="REGLAMENTO SENA" subtitle="Aplicación de Normas y Convivencia"  />

      <section className="grid grid-cols-1 lg:grid-cols-2 w-full  items-center gap-5 px-4 max-w-6xl">
        <SearchBar
          data={allRules}
          setFilteredData={setFilteredRules}
        />
      
      </section>
      <div className="flex flex-col">
        <RuleList rules={filteredRules} onToggleCompliance={onToggleCompliance} />
      </div>
      <div id="tips" className="border-emerald-950 shadow-2xl w-full max-w-6xl p-6 rounded-lg">
  <h2 className="text-3xl font-bold mb-4 text-emerald-950  text-left"><i className="fas fa-lightbulb"></i>Como mejorar el SENA:</h2>
        <ul className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Tips option="Respeta a tus compañeros y sus instructores." />
          <Tips option="Cumple con tus obligaciones" />
          <Tips option="Cumple y respeta los horarios establecidos." />
          <Tips option="Manten limpio el aula y sus centros." />
          <Tips option="Ayuda a la persona que mas lo necesite." />
          <Tips option="Cuida las zonas verdes del centro." />
        </ul>
      </div>
      <Footer copyrightYear={2024}  ancla1="./App.jsx" ancla2="#card" />
    </main>
  )
}

export default App