import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export function Reactions() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <AlertTriangle className="h-10 w-10 text-orange-500" />
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            Transfusion Reactions
            <Badge variant="destructive">Core Module</Badge>
          </h1>
          <p className="text-muted-foreground">
            Recognition, classification, and workup of transfusion reactions
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="acute">Acute Reactions</TabsTrigger>
          <TabsTrigger value="delayed">Delayed Reactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-red-500/50 bg-red-500/10">
            <CardHeader>
              <CardTitle>Initial Management of ALL Suspected Reactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">1</Badge>
                  <strong>STOP the transfusion immediately</strong>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">2</Badge>
                  <strong>Keep IV line open with normal saline</strong>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">3</Badge>
                  <strong>Notify physician and blood bank immediately</strong>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">4</Badge>
                  <strong>Check patient and unit identification (clerical check)</strong>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">5</Badge>
                  <strong>Return unit and tubing to blood bank</strong>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">6</Badge>
                  <strong>Obtain post-transfusion samples</strong>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Transfusion Reaction Workup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
                <div>
                  <strong>Blood Bank Testing:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Clerical check (patient ID, unit numbers)</li>
                    <li>Visual inspection (hemolysis, color change)</li>
                    <li>Direct Antiglobulin Test (DAT) - compare pre/post</li>
                    <li>Repeat ABO/Rh if indicated</li>
                    <li>Repeat crossmatch</li>
                  </ul>
                </div>
                <div>
                  <strong>Laboratory Testing:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>CBC, platelets</li>
                    <li>Coagulation studies (PT, PTT, fibrinogen)</li>
                    <li>Hemolysis markers: LDH, haptoglobin, indirect bilirubin</li>
                    <li>Plasma free hemoglobin</li>
                    <li>Urinalysis for hemoglobinuria</li>
                    <li>Renal function (BUN, creatinine)</li>
                  </ul>
                </div>
                <div>
                  <strong>Bacterial Contamination Workup (if suspected):</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Blood cultures from patient</li>
                    <li>Gram stain and culture of residual unit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acute" className="space-y-4">
          <Card className="border-red-500/50">
            <CardHeader>
              <CardTitle>Acute Hemolytic Transfusion Reaction (AHTR)</CardTitle>
              <Badge variant="destructive">Life-Threatening</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-red-500/10 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> Within minutes to hours (usually &lt;24 hours)</div>
                <div><strong>Mechanism:</strong> Intravascular hemolysis, usually ABO incompatibility</div>
                <div><strong>Most common cause:</strong> Clerical error (wrong blood to wrong patient)</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Fever, chills, rigors</li>
                    <li>Chest pain, back pain, flank pain</li>
                    <li>Hypotension, tachycardia, shock</li>
                    <li>Nausea, vomiting</li>
                    <li>Hemoglobinuria (dark/red urine)</li>
                    <li>DIC, acute renal failure</li>
                    <li>In anesthetized patients: unexplained bleeding, hypotension, hemoglobinuria</li>
                  </ul>
                </div>
                <div><strong>Laboratory:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Positive DAT</li>
                    <li>Elevated free hemoglobin in plasma/urine</li>
                    <li>Decreased haptoglobin</li>
                    <li>Elevated LDH, indirect bilirubin</li>
                    <li>Pink/red plasma on visual inspection</li>
                    <li>Evidence of DIC if severe</li>
                  </ul>
                </div>
                <div className="border-t pt-2"><strong>Management:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>STOP transfusion immediately</li>
                    <li>Aggressive IV fluids to maintain renal perfusion</li>
                    <li>Consider diuretics (furosemide) to maintain urine output</li>
                    <li>Monitor for DIC and renal failure</li>
                    <li>Vasopressor support if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Febrile Non-Hemolytic Transfusion Reaction (FNHTR)</CardTitle>
              <Badge variant="secondary">Common</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> During or within 4 hours of transfusion</div>
                <div><strong>Definition:</strong> Temperature rise ≥1°C (or ≥2°F) during/after transfusion</div>
                <div><strong>Mechanism:</strong> Cytokines or recipient antibodies to donor WBCs/HLA</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Fever, chills, rigors</li>
                    <li>No hypotension (if present, consider AHTR or sepsis)</li>
                    <li>No evidence of hemolysis</li>
                  </ul>
                </div>
                <div><strong>Laboratory:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Negative DAT</li>
                    <li>No hemolysis markers</li>
                    <li>Diagnosis of exclusion (must rule out AHTR and sepsis)</li>
                  </ul>
                </div>
                <div><strong>Management:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Antipyretics (acetaminophen)</li>
                    <li>Meperidine for severe rigors</li>
                    <li>Can often resume transfusion if workup negative</li>
                  </ul>
                </div>
                <div><strong>Prevention:</strong> Leukoreduced blood products (most effective)</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transfusion-Related Acute Lung Injury (TRALI)</CardTitle>
              <Badge variant="destructive">Life-Threatening</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-red-500/10 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> Within 6 hours of transfusion</div>
                <div><strong>Mechanism:</strong> Anti-HLA or anti-neutrophil antibodies → neutrophil activation → capillary leak</div>
                <div><strong>Key Feature:</strong> Non-cardiogenic pulmonary edema</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Acute respiratory distress</li>
                    <li>Hypoxemia (O2 sat &lt;90% on room air)</li>
                    <li>Bilateral pulmonary infiltrates on CXR</li>
                    <li>Normal BNP/pro-BNP (vs elevated in TACO)</li>
                    <li>Fever, hypotension (sometimes)</li>
                    <li>No evidence of volume overload</li>
                  </ul>
                </div>
                <div><strong>Diagnosis:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Clinical presentation within 6 hours</li>
                    <li>Bilateral infiltrates on imaging</li>
                    <li>No circulatory overload</li>
                    <li>PaO2/FiO2 &lt;300 or SpO2 &lt;90%</li>
                  </ul>
                </div>
                <div><strong>Management:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Supportive care, oxygen, ventilation if needed</li>
                    <li>Usually resolves within 48-96 hours</li>
                    <li>Do NOT give diuretics (not volume overload)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transfusion-Associated Circulatory Overload (TACO)</CardTitle>
              <Badge variant="destructive">Common & Serious</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-orange-500/10 border border-orange-500/50 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> During or within 6 hours of transfusion</div>
                <div><strong>Mechanism:</strong> Volume overload → cardiogenic pulmonary edema</div>
                <div><strong>Risk factors:</strong> CHF, renal failure, elderly, rapid transfusion</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Dyspnea, orthopnea</li>
                    <li><strong>Hypertension</strong> (key differentiator from TRALI)</li>
                    <li>Tachycardia</li>
                    <li>Elevated JVP</li>
                    <li>Pulmonary edema on CXR</li>
                    <li><strong>Elevated BNP/pro-BNP</strong> (key differentiator from TRALI)</li>
                  </ul>
                </div>
                <div><strong>Management:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Diuretics (furosemide)</li>
                    <li>Upright positioning</li>
                    <li>Oxygen support</li>
                  </ul>
                </div>
                <div><strong>Prevention:</strong> Slow transfusion rate, consider diuretics prophylactically in high-risk patients</div>
                <div className="border-t pt-2">
                  <strong>TRALI vs TACO:</strong> TACO has hypertension and elevated BNP; TRALI has normal/low BP and normal BNP
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Allergic and Anaphylactic Reactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Mild Allergic (Urticarial):</strong></div>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Presentation: Urticaria, pruritus, no respiratory/cardiovascular symptoms</li>
                  <li>Management: Antihistamines, can resume transfusion if symptoms resolve</li>
                </ul>
                <div className="pt-2 border-t"><strong>Severe Allergic/Anaphylactic:</strong></div>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Presentation: Hypotension, bronchospasm, angioedema, shock</li>
                  <li>Risk: IgA deficiency with anti-IgA antibodies (classic association)</li>
                  <li>Management: Epinephrine, IV fluids, antihistamines, steroids</li>
                  <li>Prevention: Washed products or IgA-deficient products for future</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bacterial Contamination/Septic Transfusion Reaction</CardTitle>
              <Badge variant="destructive">Life-Threatening</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-red-500/10 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Risk:</strong> Highest with platelets (stored at room temperature)</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>High fever (≥2°C rise), severe rigors</li>
                    <li>Hypotension, shock</li>
                    <li>Rapid onset during transfusion</li>
                    <li>Symptoms more severe than typical FNHTR</li>
                  </ul>
                </div>
                <div><strong>Management:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>STOP transfusion</li>
                    <li>Broad-spectrum antibiotics immediately</li>
                    <li>Aggressive supportive care for septic shock</li>
                    <li>Gram stain and culture of unit</li>
                    <li>Blood cultures from patient</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delayed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delayed Hemolytic Transfusion Reaction (DHTR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> 3-14 days after transfusion (usually 5-10 days)</div>
                <div><strong>Mechanism:</strong> Anamnestic response to RBC antigen (secondary immune response)</div>
                <div><strong>Classic antibodies:</strong> Anti-Jka, Anti-Jkb (Kidd antibodies)</div>
                <div><strong>Pathophysiology:</strong> Patient previously exposed → antibody waned to undetectable → re-exposure → rapid antibody rise</div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Fever</li>
                    <li>Decreased hemoglobin (unexplained anemia)</li>
                    <li>Jaundice (elevated indirect bilirubin)</li>
                    <li>Mild symptoms (extravascular hemolysis)</li>
                    <li>Often asymptomatic, found on labs</li>
                  </ul>
                </div>
                <div><strong>Laboratory:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Positive DAT (new or stronger than pre-transfusion)</li>
                    <li>New antibody detected in antibody screen/ID</li>
                    <li>Elevated indirect bilirubin, LDH</li>
                    <li>Decreased haptoglobin</li>
                  </ul>
                </div>
                <div><strong>Management:</strong> Usually supportive only; future transfusions require antigen-negative blood</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delayed Serologic Transfusion Reaction (DSTR)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Definition:</strong> Positive DAT and/or new antibody without clinical or laboratory evidence of hemolysis</div>
                <div><strong>Timing:</strong> Days to weeks after transfusion</div>
                <div><strong>Clinical significance:</strong> No hemolysis, but indicates need for antigen-negative blood in future</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-500/50">
            <CardHeader>
              <CardTitle>Transfusion-Associated Graft-versus-Host Disease (TA-GVHD)</CardTitle>
              <Badge variant="destructive">Fatal</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-red-500/10 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> 8-10 days (up to 30 days) after transfusion</div>
                <div><strong>Mechanism:</strong> Viable donor T-lymphocytes engraft and attack recipient tissues</div>
                <div><strong>Risk factors:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Immunocompromised patients</li>
                    <li>HLA-matched blood transfusions</li>
                    <li>Blood from blood relatives</li>
                    <li>Hematopoietic stem cell transplant recipients</li>
                  </ul>
                </div>
                <div><strong>Presentation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Fever, rash (erythroderma)</li>
                    <li>Severe diarrhea</li>
                    <li>Hepatic dysfunction</li>
                    <li><strong>Pancytopenia</strong> (key feature - distinguishes from GVHD in transplant)</li>
                  </ul>
                </div>
                <div><strong>Outcome:</strong> &gt;90% mortality</div>
                <div><strong>Prevention:</strong> Gamma irradiation of blood products for at-risk patients</div>
                <div className="border-t pt-2">
                  <strong className="text-red-600 dark:text-red-400">Remember:</strong> TA-GVHD is preventable but nearly always fatal - know irradiation indications!
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post-Transfusion Purpura (PTP)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Timing:</strong> 5-10 days after transfusion</div>
                <div><strong>Mechanism:</strong> Alloantibody to platelet antigen (usually anti-HPA-1a)</div>
                <div><strong>Presentation:</strong> Severe thrombocytopenia (often &lt;10,000/μL)</div>
                <div><strong>Patient profile:</strong> Usually multiparous women or previously transfused patients</div>
                <div><strong>Treatment:</strong> IVIG, corticosteroids; self-limited (resolves in 1-4 weeks)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/50 bg-yellow-500/10">
            <CardHeader>
              <CardTitle>High-Yield Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Reaction</th>
                      <th className="text-left p-2">Timing</th>
                      <th className="text-left p-2">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-semibold">AHTR</td>
                      <td className="p-2">&lt;24 hrs</td>
                      <td className="p-2">Hemoglobinuria, positive DAT, ABO error</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">FNHTR</td>
                      <td className="p-2">&lt;4 hrs</td>
                      <td className="p-2">Fever only, negative DAT, no hemolysis</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">TRALI</td>
                      <td className="p-2">&lt;6 hrs</td>
                      <td className="p-2">Respiratory distress, normal BNP, bilateral infiltrates</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">TACO</td>
                      <td className="p-2">&lt;6 hrs</td>
                      <td className="p-2">Hypertension, elevated BNP, volume overload</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">DHTR</td>
                      <td className="p-2">3-14 days</td>
                      <td className="p-2">Kidd antibodies, positive DAT, jaundice</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">TA-GVHD</td>
                      <td className="p-2">8-30 days</td>
                      <td className="p-2">Pancytopenia, rash, diarrhea, nearly fatal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
