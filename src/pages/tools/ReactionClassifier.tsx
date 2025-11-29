import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const scenarios = [
  {
    id: 1,
    symptoms: ['Fever 39°C', 'Rigors', 'Chills', 'No hypotension'],
    timing: 'Within 2 hours',
    labs: ['Negative DAT', 'No hemolysis'],
    diagnosis: 'Febrile Non-Hemolytic Transfusion Reaction (FNHTR)',
    severity: 'Mild',
    management: 'Antipyretics, can resume if workup negative'
  },
  {
    id: 2,
    symptoms: ['Fever', 'Hemoglobinuria', 'Hypotension', 'Back pain'],
    timing: 'Within 30 minutes',
    labs: ['Positive DAT', 'Elevated free Hgb', 'Pink plasma'],
    diagnosis: 'Acute Hemolytic Transfusion Reaction (AHTR)',
    severity: 'Life-Threatening',
    management: 'Stop transfusion, IV fluids, maintain renal perfusion'
  },
  {
    id: 3,
    symptoms: ['Dyspnea', 'Hypertension 180/100', 'Bilateral crackles', 'JVD'],
    timing: 'During transfusion',
    labs: ['Elevated BNP'],
    diagnosis: 'Transfusion-Associated Circulatory Overload (TACO)',
    severity: 'Serious',
    management: 'Diuretics, oxygen, upright positioning'
  },
  {
    id: 4,
    symptoms: ['Respiratory distress', 'Hypoxemia', 'Bilateral infiltrates'],
    timing: 'Within 4 hours',
    labs: ['Normal BNP', 'PaO2/FiO2 <300'],
    diagnosis: 'Transfusion-Related Acute Lung Injury (TRALI)',
    severity: 'Life-Threatening',
    management: 'Supportive care, oxygen/ventilation, do NOT give diuretics'
  },
  {
    id: 5,
    symptoms: ['Urticaria', 'Pruritus', 'No respiratory symptoms'],
    timing: 'During transfusion',
    labs: ['Normal'],
    diagnosis: 'Mild Allergic Reaction',
    severity: 'Mild',
    management: 'Antihistamines, can resume if symptoms resolve'
  }
]

export function ReactionClassifier() {
  const [selectedScenario, setSelectedScenario] = useState(0)
  const scenario = scenarios[selectedScenario]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <AlertTriangle className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Reaction Classifier</h1>
          <p className="text-muted-foreground">
            Identify transfusion reaction types
          </p>
        </div>
      </div>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6 text-sm">
          <strong>Interactive Tool:</strong> Review common transfusion reaction presentations
          and learn to classify them based on symptoms, timing, and laboratory findings.
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-2">
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
            Scenario {idx + 1}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Clinical Presentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <strong className="text-sm">Timing:</strong>
              <div className="bg-muted p-3 rounded-lg mt-2 text-sm">
                {scenario.timing}
              </div>
            </div>

            <div>
              <strong className="text-sm">Symptoms:</strong>
              <div className="bg-muted p-3 rounded-lg mt-2">
                <ul className="space-y-1 text-sm">
                  {scenario.symptoms.map((symptom, idx) => (
                    <li key={idx}>• {symptom}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <strong className="text-sm">Laboratory Findings:</strong>
              <div className="bg-muted p-3 rounded-lg mt-2">
                <ul className="space-y-1 text-sm">
                  {scenario.labs.map((lab, idx) => (
                    <li key={idx}>• {lab}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Diagnosis & Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <strong className="text-sm">Diagnosis:</strong>
              <div className={`p-4 rounded-lg mt-2 ${
                scenario.severity === 'Life-Threatening'
                  ? 'bg-red-500/10 border border-red-500/50'
                  : scenario.severity === 'Serious'
                  ? 'bg-orange-500/10 border border-orange-500/50'
                  : 'bg-yellow-500/10 border border-yellow-500/50'
              }`}>
                <div className="font-bold text-lg">{scenario.diagnosis}</div>
                <Badge
                  variant={scenario.severity === 'Life-Threatening' ? 'destructive' : 'secondary'}
                  className="mt-2"
                >
                  {scenario.severity}
                </Badge>
              </div>
            </div>

            <div>
              <strong className="text-sm">Management:</strong>
              <div className="bg-muted p-4 rounded-lg mt-2 text-sm">
                {scenario.management}
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/50 p-3 rounded-lg text-sm">
              <strong>Remember:</strong> Always stop the transfusion first, keep IV open
              with saline, and notify blood bank and physician immediately!
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Differentiating Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Reaction</th>
                  <th className="border p-2 text-left">Key Feature</th>
                  <th className="border p-2 text-left">Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">AHTR</td>
                  <td className="border p-2">Hemoglobinuria, positive DAT</td>
                  <td className="border p-2">&lt;24 hrs</td>
                </tr>
                <tr>
                  <td className="border p-2">FNHTR</td>
                  <td className="border p-2">Fever only, negative DAT</td>
                  <td className="border p-2">&lt;4 hrs</td>
                </tr>
                <tr>
                  <td className="border p-2">TRALI</td>
                  <td className="border p-2">Respiratory distress, normal BNP</td>
                  <td className="border p-2">&lt;6 hrs</td>
                </tr>
                <tr>
                  <td className="border p-2">TACO</td>
                  <td className="border p-2">Hypertension, elevated BNP</td>
                  <td className="border p-2">&lt;6 hrs</td>
                </tr>
                <tr>
                  <td className="border p-2">Allergic</td>
                  <td className="border p-2">Urticaria, pruritus</td>
                  <td className="border p-2">During</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
