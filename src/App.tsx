import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { Foundations } from './pages/modules/Foundations'
import { PreTransfusion } from './pages/modules/PreTransfusion'
import { Components } from './pages/modules/Components'
import { Compatibility } from './pages/modules/Compatibility'
import { Reactions } from './pages/modules/Reactions'
import { Pediatrics } from './pages/modules/Pediatrics'
import { Apheresis } from './pages/modules/Apheresis'
import { Donor } from './pages/modules/Donor'
import { Hemovigilance } from './pages/modules/Hemovigilance'
import { Cases } from './pages/modules/Cases'
import { Assessment } from './pages/Assessment'
import { ABOCompatibility } from './pages/tools/ABOCompatibility'
import { AntibodyScreen } from './pages/tools/AntibodyScreen'
import { ReactionClassifier } from './pages/tools/ReactionClassifier'
import { ProductSelector } from './pages/tools/ProductSelector'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="foundations" element={<Foundations />} />
          <Route path="pretransfusion" element={<PreTransfusion />} />
          <Route path="components" element={<Components />} />
          <Route path="compatibility" element={<Compatibility />} />
          <Route path="reactions" element={<Reactions />} />
          <Route path="pediatrics" element={<Pediatrics />} />
          <Route path="apheresis" element={<Apheresis />} />
          <Route path="donor" element={<Donor />} />
          <Route path="hemovigilance" element={<Hemovigilance />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="tools/abo-compatibility" element={<ABOCompatibility />} />
          <Route path="tools/antibody-screen" element={<AntibodyScreen />} />
          <Route path="tools/reaction-classifier" element={<ReactionClassifier />} />
          <Route path="tools/product-selector" element={<ProductSelector />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
