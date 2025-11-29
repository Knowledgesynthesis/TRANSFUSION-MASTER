import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Droplet } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const scenarios = [
  {
    id: 1,
    patient: 'Stem cell transplant recipient',
    requirements: ['Irradiated', 'CMV-safe', 'Leukoreduced'],
    rationale: 'Irradiated to prevent TA-GVHD, CMV-safe if CMV-negative, leukoreduced standard'
  },
  {
    id: 2,
    patient: 'Sickle cell disease patient',
    requirements: ['Leukoreduced', 'Extended phenotype match (C, E, K)', 'HbS-negative'],
    rationale: 'Reduce alloimmunization with extended matching, prevent sickling, leukoreduced to minimize reactions'
  },
  {
    id: 3,
    patient: 'Premature neonate',
    requirements: ['Irradiated', 'CMV-safe', 'Fresh (<7 days)', 'Volume-reduced'],
    rationale: 'Irradiated for TA-GVHD prevention, CMV-safe, fresh to minimize potassium, volume-reduced for small patient'
  },
  {
    id: 4,
    patient: 'IgA deficiency with anti-IgA',
    requirements: ['Washed RBCs', 'IgA-deficient plasma (if available)'],
    rationale: 'Remove plasma IgA to prevent anaphylaxis'
  },
  {
    id: 5,
    patient: 'Patient with recurrent febrile reactions',
    requirements: ['Leukoreduced'],
    rationale: 'Leukoreduction prevents most febrile non-hemolytic transfusion reactions'
  },
  {
    id: 6,
    patient: 'CHF patient needing transfusion',
    requirements: ['Volume-reduced', 'Slow infusion rate'],
    rationale: 'Prevent TACO in volume-sensitive patient'
  }
]

export function ProductSelector() {
  const [selectedScenario, setSelectedScenario] = useState(0)
  const scenario = scenarios[selectedScenario]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Droplet className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Product Selector</h1>
          <p className="text-muted-foreground">
            Choose appropriate blood product modifications
          </p>
        </div>
      </div>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6 text-sm">
          <strong>Clinical Decision Support:</strong> Learn which product modifications
          are indicated for different patient populations and clinical scenarios.
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-2">
        {scenarios.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setSelectedScenario(idx)}
            className={`p-3 rounded-lg border-2 text-sm transition-all ${
              selectedScenario === idx
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border hover:border-primary/50'
            }`}
          >
            {s.patient}
          </button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Scenario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-lg font-semibold">{scenario.patient}</div>
          </div>

          <div>
            <strong className="text-sm block mb-2">Required Product Modifications:</strong>
            <div className="flex flex-wrap gap-2">
              {scenario.requirements.map((req, idx) => (
                <Badge key={idx} variant="default" className="text-sm">
                  {req}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg">
            <strong className="text-sm block mb-2">Rationale:</strong>
            <p className="text-sm">{scenario.rationale}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Product Modification Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg text-sm">
              <strong>Irradiated:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Stem cell transplant recipients</li>
                <li>Congenital immunodeficiency</li>
                <li>Hodgkin lymphoma</li>
                <li>Intrauterine transfusions</li>
                <li>HLA-matched or family-directed donations</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <strong>Leukoreduced:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Prevent febrile non-hemolytic reactions</li>
                <li>Reduce HLA alloimmunization</li>
                <li>Reduce CMV transmission</li>
                <li>Universal in most blood banks</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <strong>CMV-Safe:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>CMV-negative stem cell transplant patients</li>
                <li>Premature/low birth weight neonates</li>
                <li>CMV-negative pregnant women</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <strong>Washed:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Severe allergic reactions to plasma</li>
                <li>IgA deficiency with anti-IgA</li>
                <li>Paroxysmal nocturnal hemoglobinuria</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <strong>Volume-Reduced:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Neonates and small pediatric patients</li>
                <li>Patients at risk for volume overload</li>
                <li>Severe cardiac or renal disease</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
