import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const cases = [
  {
    id: 1,
    title: 'Positive Antibody Screen in Surgical Patient',
    presentation: 'A 65-year-old woman is scheduled for hip replacement surgery. Her type and screen shows: ABO/Rh: A positive, Antibody screen: Positive at AHG phase.',
    question: 'What is the next step?',
    options: [
      'Proceed with crossmatch using any A-positive units',
      'Perform antibody identification panel',
      'Issue O-negative emergency release blood',
      'Cancel surgery due to positive antibody screen'
    ],
    correct: 1,
    explanation: 'A positive antibody screen requires antibody identification to determine specificity. Once identified, antigen-negative units must be selected for crossmatch. The surgery can proceed once compatible units are identified.'
  },
  {
    id: 2,
    title: 'Transfusion Reaction: Fever and Rigors',
    presentation: 'A 45-year-old male receiving his second unit of PRBCs develops fever (39°C, up from 37°C), rigors, and chills 30 minutes into the transfusion. Blood pressure is 110/70 mmHg. Patient is alert and oriented.',
    question: 'What is the most likely diagnosis?',
    options: [
      'Acute hemolytic transfusion reaction',
      'Febrile non-hemolytic transfusion reaction',
      'Septic transfusion reaction',
      'TRALI'
    ],
    correct: 1,
    explanation: 'FNHTR is the most common reaction, characterized by fever ≥1°C rise and chills/rigors without hypotension or hemolysis. Must still rule out AHTR and bacterial contamination with workup. AHTR would typically show hypotension and hemoglobinuria. Septic reactions have more severe symptoms with hypotension.'
  },
  {
    id: 3,
    title: 'Respiratory Distress After Transfusion',
    presentation: 'A 70-year-old with CHF receives 2 units of PRBCs over 2 hours. Develops dyspnea, hypertension (180/100), and bilateral crackles. BNP is elevated.',
    question: 'What is the diagnosis and management?',
    options: [
      'TRALI - supportive care, do not give diuretics',
      'TACO - give diuretics and oxygen',
      'AHTR - stop transfusion, maintain renal perfusion',
      'Allergic reaction - give antihistamines'
    ],
    correct: 1,
    explanation: 'TACO (volume overload) presents with hypertension, elevated BNP, and pulmonary edema. Treatment includes diuretics. TRALI would have normal/low BP and normal BNP, and diuretics would not be helpful.'
  },
  {
    id: 4,
    title: 'Incompatible Crossmatch',
    presentation: 'A 55-year-old woman needs transfusion. Type: O positive. Antibody screen: Positive. Antibody ID reveals anti-K. Crossmatch with first 5 units: All incompatible.',
    question: 'What is the most likely explanation?',
    options: [
      'All donor units are K-positive',
      'ABO incompatibility error',
      'Patient has additional unidentified antibodies',
      'Autoantibody causing pan-reactivity'
    ],
    correct: 0,
    explanation: 'K antigen is present in ~9% of the population. Finding 5 K-positive units in a row is statistically unlikely but possible. The blood bank should specifically request K-negative units. If those are also incompatible, then consider additional antibodies or autoantibody.'
  },
  {
    id: 5,
    title: 'Newborn with Jaundice',
    presentation: 'A term newborn develops jaundice at 18 hours of life. Mother is O-negative, baby is A-positive. DAT is positive. Bilirubin is rising.',
    question: 'What is the most likely diagnosis?',
    options: [
      'ABO hemolytic disease of the newborn',
      'Rh (anti-D) hemolytic disease',
      'Physiologic jaundice',
      'Breast milk jaundice'
    ],
    correct: 0,
    explanation: 'ABO HDFN: Mother is O (has anti-A, anti-B), baby is A-positive. Positive DAT confirms maternal IgG anti-A coating baby RBCs. Usually mild, but monitor bilirubin and treat with phototherapy. Rh HDFN is prevented by RhIG in Rh-negative mothers.'
  }
]

export function Cases() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({})

  const handleAnswer = (caseId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [caseId]: optionIndex }))
    setShowExplanations(prev => ({ ...prev, [caseId]: true }))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Briefcase className="h-10 w-10 text-teal-500" />
        <div>
          <h1 className="text-4xl font-bold">Integrated Transfusion Cases</h1>
          <p className="text-muted-foreground">
            Apply your knowledge to realistic clinical scenarios
          </p>
        </div>
      </div>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6">
          <p className="text-sm">
            These cases integrate pre-transfusion testing, compatibility, product selection,
            and reaction management. Work through each case systematically, considering the
            full transfusion medicine workflow.
          </p>
        </CardContent>
      </Card>

      {cases.map((case_, index) => (
        <Card key={case_.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="outline">Case {index + 1}</Badge>
                <CardTitle className="mt-2">{case_.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <strong className="text-sm">Presentation:</strong>
              <p className="text-sm mt-2">{case_.presentation}</p>
            </div>

            <div>
              <strong className="text-sm">{case_.question}</strong>
              <div className="mt-3 space-y-2">
                {case_.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[case_.id] === optionIndex
                  const isCorrect = optionIndex === case_.correct
                  const showResult = showExplanations[case_.id]

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(case_.id, optionIndex)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        showResult
                          ? isCorrect
                            ? 'border-green-500 bg-green-500/10'
                            : isSelected
                            ? 'border-red-500 bg-red-500/10'
                            : 'border-border'
                          : isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          showResult && isCorrect
                            ? 'border-green-500 bg-green-500 text-white'
                            : showResult && isSelected && !isCorrect
                            ? 'border-red-500 bg-red-500 text-white'
                            : isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border'
                        }`}>
                          {showResult && isCorrect && '✓'}
                          {showResult && isSelected && !isCorrect && '✗'}
                        </div>
                        <span className="text-sm flex-1">{option}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {showExplanations[case_.id] && (
              <div className={`p-4 rounded-lg ${
                selectedAnswers[case_.id] === case_.correct
                  ? 'bg-green-500/10 border border-green-500/50'
                  : 'bg-red-500/10 border border-red-500/50'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {selectedAnswers[case_.id] === case_.correct ? (
                    <>
                      <Badge variant="default" className="bg-green-500">Correct!</Badge>
                    </>
                  ) : (
                    <>
                      <Badge variant="destructive">Incorrect</Badge>
                      <span className="text-sm">The correct answer is: {case_.options[case_.correct]}</span>
                    </>
                  )}
                </div>
                <p className="text-sm mt-2"><strong>Explanation:</strong> {case_.explanation}</p>
              </div>
            )}

            {!showExplanations[case_.id] && selectedAnswers[case_.id] !== undefined && (
              <Button
                onClick={() => setShowExplanations(prev => ({ ...prev, [case_.id]: true }))}
                className="w-full"
              >
                Show Explanation
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardContent className="pt-6">
          <p className="text-sm">
            <strong>Remember:</strong> These cases use synthetic data for educational purposes only.
            In real clinical scenarios, always follow your institution's protocols and consult
            with transfusion medicine specialists when needed.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
