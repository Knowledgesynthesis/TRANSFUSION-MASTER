import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TestTube } from 'lucide-react'

export function AntibodyScreen() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <TestTube className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Antibody Screen Interpreter</h1>
          <p className="text-muted-foreground">
            Understand antibody screening patterns
          </p>
        </div>
      </div>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6">
          <p className="text-sm">
            <strong>Educational Resource:</strong> The antibody screen uses 2-3 reagent RBCs
            with known antigens to detect unexpected antibodies in patient serum. This tool
            demonstrates common screening patterns and their interpretation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How Antibody Screening Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Testing Phases:</strong>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Immediate Spin (IS):</strong> Detects IgM antibodies (ABO, cold antibodies)</li>
                <li><strong>37°C Incubation:</strong> Allows IgG antibodies to bind</li>
                <li><strong>Anti-Human Globulin (AHG):</strong> Detects bound IgG antibodies</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Screening Cell Panel (Example):</strong>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-background">
                      <th className="border p-2">Cell</th>
                      <th className="border p-2">D</th>
                      <th className="border p-2">C</th>
                      <th className="border p-2">E</th>
                      <th className="border p-2">c</th>
                      <th className="border p-2">e</th>
                      <th className="border p-2">K</th>
                      <th className="border p-2">Jka</th>
                      <th className="border p-2">Jkb</th>
                      <th className="border p-2">Fya</th>
                      <th className="border p-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 font-semibold">SC I</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2 bg-green-500/20">Negative</td>
                    </tr>
                    <tr>
                      <td className="border p-2 font-semibold">SC II</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2 bg-green-500/20">Negative</td>
                    </tr>
                    <tr>
                      <td className="border p-2 font-semibold">SC III</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2 bg-green-500/20">Negative</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-muted-foreground">
                <strong>Interpretation:</strong> Negative antibody screen. No unexpected antibodies detected.
                Electronic crossmatch may proceed if all criteria met.
              </p>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Positive Screen Example (Anti-K suspected):</strong>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-background">
                      <th className="border p-2">Cell</th>
                      <th className="border p-2">K</th>
                      <th className="border p-2">k</th>
                      <th className="border p-2">Other Antigens</th>
                      <th className="border p-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 font-semibold">SC I</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">Multiple positive</td>
                      <td className="border p-2 bg-red-500/20">Positive (2+)</td>
                    </tr>
                    <tr>
                      <td className="border p-2 font-semibold">SC II</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">+</td>
                      <td className="border p-2">Multiple positive</td>
                      <td className="border p-2 bg-green-500/20">Negative</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2">
                <strong>Interpretation:</strong> Positive antibody screen. Only K-positive cell reacted.
                Likely anti-K antibody. Proceed to antibody identification panel for confirmation.
                Select K-negative units for transfusion.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps for Positive Screen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm">
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Antibody Identification Panel:</strong> Test patient serum against 10-20 cells with known antigen profiles</li>
              <li><strong>Rule-Out Method:</strong> Use negative reactions to exclude antibodies</li>
              <li><strong>Pattern Recognition:</strong> Identify which antigen(s) correlate with positive reactions</li>
              <li><strong>Select Antigen-Negative Units:</strong> Crossmatch with compatible blood</li>
              <li><strong>Document Antibody:</strong> Maintain records for future transfusions</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
