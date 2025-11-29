import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { useAssessmentStore } from '@/store/useAssessmentStore'

const questions = [
  {
    id: 'q1',
    category: 'Immunohematology',
    question: 'Which antibody is most commonly associated with delayed hemolytic transfusion reactions that can "disappear" between transfusions?',
    options: ['Anti-K', 'Anti-Jka', 'Anti-Fya', 'Anti-E'],
    correct: 1,
    explanation: 'Kidd antibodies (Jka, Jkb) are notorious for waning to undetectable levels and then causing delayed hemolytic reactions upon re-exposure. This is why they\'re remembered as antibodies that "play hide and seek."'
  },
  {
    id: 'q2',
    category: 'Transfusion Reactions',
    question: 'A patient develops bilateral pulmonary infiltrates, hypoxemia, and respiratory distress 3 hours after transfusion. Blood pressure is 100/60 mmHg and BNP is normal. What is the most likely diagnosis?',
    options: ['TACO', 'TRALI', 'AHTR', 'Bacterial contamination'],
    correct: 1,
    explanation: 'TRALI presents with respiratory distress, bilateral infiltrates, hypoxemia within 6 hours, with normal/low blood pressure and normal BNP. TACO would show hypertension and elevated BNP.'
  },
  {
    id: 'q3',
    category: 'Blood Components',
    question: 'Which patients MUST receive irradiated blood products?',
    options: [
      'All neonates',
      'All patients with history of transfusion reactions',
      'Stem cell transplant recipients',
      'All Rh-negative patients'
    ],
    correct: 2,
    explanation: 'Irradiation prevents TA-GVHD. Mandatory indications include: stem cell transplant recipients, congenital immunodeficiency, Hodgkin lymphoma, intrauterine transfusions, and HLA-matched/family donations. Remember "SHIP" mnemonic.'
  },
  {
    id: 'q4',
    category: 'Pre-Transfusion Testing',
    question: 'A patient\'s forward type is A but reverse type shows reactions with both A1 and B cells. What is the most likely explanation?',
    options: [
      'Patient is AB not A',
      'Technical error in testing',
      'Extra antibody present (not anti-A or anti-B)',
      'Weak subgroup of A'
    ],
    correct: 2,
    explanation: 'Group A patients should have anti-B only (reacting with B cells, not A1 cells). Reaction with both suggests an extra antibody beyond expected anti-B. This could be an unexpected alloantibody or autoantibody causing the discrepancy.'
  },
  {
    id: 'q5',
    category: 'Compatibility',
    question: 'What ABO type of plasma should be given to a group O patient in an emergency?',
    options: ['O plasma', 'A plasma', 'B plasma', 'AB plasma'],
    correct: 0,
    explanation: 'For plasma, compatibility is REVERSED from RBCs. Group O patients (universal RBC donors) are universal plasma RECIPIENTS and can receive O, A, B, or AB plasma. However, O plasma is preferred to match patient type. AB plasma is the universal plasma DONOR.'
  },
  {
    id: 'q6',
    category: 'Transfusion Reactions',
    question: 'What is the most common cause of fatal acute hemolytic transfusion reactions?',
    options: [
      'ABO incompatibility due to clerical error',
      'Anti-K antibody',
      'Bacterial contamination',
      'Volume overload'
    ],
    correct: 0,
    explanation: 'Clerical errors leading to ABO-incompatible transfusions are the most common cause of fatal AHTR. This is why patient identification and verification are absolutely critical at every step.'
  },
  {
    id: 'q7',
    category: 'Neonatal Transfusion',
    question: 'A term newborn of an O-negative mother is A-positive with a positive DAT and rising bilirubin at 18 hours of life. What is the diagnosis?',
    options: [
      'Rh hemolytic disease',
      'ABO hemolytic disease',
      'Physiologic jaundice',
      'Anti-K hemolytic disease'
    ],
    correct: 1,
    explanation: 'ABO HDFN: O mother has anti-A (IgG form can cross placenta), baby is A-positive. Positive DAT confirms maternal antibody coating baby\'s RBCs. Typically milder than Rh disease. Rh disease is prevented by RhIG in Rh-negative mothers.'
  },
  {
    id: 'q8',
    category: 'Product Selection',
    question: 'Which product modification is indicated for a patient with recurrent severe allergic reactions to transfusions who has documented IgA deficiency with anti-IgA antibodies?',
    options: ['Leukoreduced', 'Irradiated', 'Washed', 'CMV-safe'],
    correct: 2,
    explanation: 'Washed RBCs remove ~95-99% of plasma, which removes IgA and prevents anaphylactic reactions in IgA-deficient patients with anti-IgA. IgA-deficient plasma products should also be used if available.'
  },
  {
    id: 'q9',
    category: 'Apheresis',
    question: 'What is the first-line treatment for TTP (Thrombotic Thrombocytopenic Purpura)?',
    options: [
      'Platelet transfusions',
      'Plasma exchange with FFP',
      'IVIG',
      'Steroids alone'
    ],
    correct: 1,
    explanation: 'Daily plasma exchange with FFP is the life-saving first-line treatment for TTP. Start immediately when TTP is suspected (thrombocytopenia + MAHA). Don\'t wait for ADAMTS13 results. Platelets are generally avoided as they may worsen thrombosis.'
  },
  {
    id: 'q10',
    category: 'Crossmatch',
    question: 'Which type of crossmatch can be used when a patient has a negative antibody screen, no history of clinically significant antibodies, and the computer system validates ABO compatibility?',
    options: [
      'Immediate spin crossmatch',
      'Electronic crossmatch',
      'Full AHG crossmatch',
      'No crossmatch needed'
    ],
    correct: 1,
    explanation: 'Electronic (computer) crossmatch can be used when: negative current antibody screen, no history of significant antibodies, two concordant ABO types on file, and validated computer system. It\'s fast and efficient for routine transfusions.'
  }
]

export function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const { currentAnswers, addAnswer, clearAnswers, getScore } = useAssessmentStore()

  const question = questions[currentQuestion]
  const userAnswer = currentAnswers.find(a => a.questionId === question.id)

  const handleAnswer = (optionIndex: number) => {
    addAnswer({
      questionId: question.id,
      selectedAnswer: question.options[optionIndex],
      isCorrect: optionIndex === question.correct
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restart = () => {
    clearAnswers()
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const score = getScore()

  if (showResults) {
    const percentage = Math.round((score.correct / score.total) * 100)
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <BookOpen className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Assessment Results</h1>
            <p className="text-muted-foreground">Session-only results</p>
          </div>
        </div>

        <Card className={`${
          percentage >= 80
            ? 'border-green-500/50 bg-green-500/10'
            : percentage >= 60
            ? 'border-yellow-500/50 bg-yellow-500/10'
            : 'border-red-500/50 bg-red-500/10'
        }`}>
          <CardHeader>
            <CardTitle className="text-center text-3xl">
              Your Score: {score.correct} / {score.total}
            </CardTitle>
            <div className="text-center text-5xl font-bold mt-4">
              {percentage}%
            </div>
          </CardHeader>
          <CardContent className="text-center">
            {percentage >= 80 && (
              <p className="text-lg">Excellent! You have a strong understanding of transfusion medicine.</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg">Good work! Review the questions you missed to strengthen your knowledge.</p>
            )}
            {percentage < 60 && (
              <p className="text-lg">Keep studying! Review the modules and try again.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Review Your Answers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((q, idx) => {
              const answer = currentAnswers.find(a => a.questionId === q.id)
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border ${
                    answer?.isCorrect
                      ? 'border-green-500/50 bg-green-500/10'
                      : 'border-red-500/50 bg-red-500/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Badge variant={answer?.isCorrect ? 'default' : 'destructive'}>
                      Q{idx + 1}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{q.question}</div>
                      <div className="mt-2 text-sm">
                        <strong>Your answer:</strong> {answer?.selectedAnswer}
                        {!answer?.isCorrect && (
                          <div className="mt-1">
                            <strong>Correct answer:</strong> {q.options[q.correct]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={restart} size="lg" className="gap-2">
            <RotateCcw className="h-5 w-5" />
            Start New Assessment
          </Button>
        </div>

        <Card className="border-yellow-500/50 bg-yellow-500/10">
          <CardContent className="pt-6 text-sm text-center">
            <strong>Note:</strong> Results are session-only and not saved. Close this window to clear all data.
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <BookOpen className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Assessment</h1>
          <p className="text-muted-foreground">Test your transfusion medicine knowledge</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <Badge>{question.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg font-semibold">{question.question}</div>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = userAnswer?.selectedAnswer === option
              const showResult = userAnswer !== undefined
              const isCorrect = idx === question.correct

              return (
                <button
                  key={idx}
                  onClick={() => !userAnswer && handleAnswer(idx)}
                  disabled={userAnswer !== undefined}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : isSelected
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-border opacity-50'
                      : isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  } ${userAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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
                    <span className="flex-1 text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {userAnswer && (
            <Card className={`${
              userAnswer.isCorrect
                ? 'border-green-500/50 bg-green-500/10'
                : 'border-red-500/50 bg-red-500/10'
            }`}>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={userAnswer.isCorrect ? 'default' : 'destructive'}>
                    {userAnswer.isCorrect ? 'Correct!' : 'Incorrect'}
                  </Badge>
                </div>
                <p className="text-sm">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between pt-4 border-t">
            <Button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!userAnswer}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6 text-sm">
          <strong>Note:</strong> This is a session-only assessment. Your answers and score
          will not be saved or tracked. Close the window to clear all data.
        </CardContent>
      </Card>
    </div>
  )
}
