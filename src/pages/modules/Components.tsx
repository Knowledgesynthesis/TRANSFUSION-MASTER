import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Droplet } from 'lucide-react'

export function Components() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Droplet className="h-10 w-10 text-red-500" />
        <div>
          <h1 className="text-4xl font-bold">Blood Components & Modifications</h1>
          <p className="text-muted-foreground">
            PRBCs, platelets, plasma, and product modifications
          </p>
        </div>
      </div>

      <Tabs value="overview" onValueChange={() => {}}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Components</TabsTrigger>
          <TabsTrigger value="modifications">Modifications</TabsTrigger>
          <TabsTrigger value="indications">Indications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Packed Red Blood Cells (PRBCs)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Volume:</strong> ~350 mL</div>
                <div><strong>Hematocrit:</strong> 55-65%</div>
                <div><strong>Storage:</strong> 1-6°C for up to 35-42 days (depends on anticoagulant)</div>
                <div><strong>Expected increase:</strong> Hgb +1 g/dL, Hct +3% per unit</div>
                <div><strong>Indications:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Symptomatic anemia</li>
                    <li>Acute blood loss</li>
                    <li>Hgb &lt;7 g/dL (restrictive strategy in stable patients)</li>
                    <li>Higher thresholds for cardiac patients, active bleeding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platelets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Apheresis platelets:</strong> From single donor, ~3×10¹¹ platelets</div>
                <div><strong>Pooled platelets:</strong> From 4-6 whole blood donations</div>
                <div><strong>Storage:</strong> 20-24°C with continuous agitation for 5-7 days</div>
                <div><strong>Expected increase:</strong> 30,000-50,000/μL per unit</div>
                <div><strong>ABO matching:</strong> Preferred but not required (plasma antibodies can cause reactions)</div>
                <div><strong>Rh matching:</strong> Rh-negative females of childbearing potential should receive Rh-negative platelets</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg text-sm">
                <strong>Transfusion Thresholds:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>&lt;10,000/μL: Prophylactic in stable patients</li>
                  <li>&lt;20,000/μL: Fever, minor procedures</li>
                  <li>&lt;50,000/μL: Active bleeding, major surgery</li>
                  <li>&lt;100,000/μL: Neurosurgery, ocular surgery</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plasma Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Fresh Frozen Plasma (FFP):</strong></div>
                <ul className="list-disc list-inside ml-4">
                  <li>Volume: ~250 mL</li>
                  <li>Contains all coagulation factors</li>
                  <li>Must be ABO compatible</li>
                  <li>Indications: Coagulopathy, massive transfusion, TTP</li>
                </ul>
                <div className="pt-2"><strong>Cryoprecipitate:</strong></div>
                <ul className="list-disc list-inside ml-4">
                  <li>Volume: 10-15 mL per unit (pool of 5-10 units typically given)</li>
                  <li>Rich in: Fibrinogen, Factor VIII, vWF, Factor XIII</li>
                  <li>Indications: Hypofibrinogenemia (&lt;100 mg/dL), vWD (if no concentrate)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Granulocytes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Collection:</strong> Apheresis from stimulated donors</div>
                <div><strong>Storage:</strong> Room temperature, must transfuse within 24 hours</div>
                <div><strong>Indications:</strong> Severe neutropenia with infection unresponsive to antibiotics (rare)</div>
                <div><strong>Special considerations:</strong> Must be irradiated, ABO/Rh compatible</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leukoreduced</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Definition:</strong> Removal of white blood cells to &lt;5×10⁶ per unit</div>
                <div><strong>Method:</strong> Filtration (prestorage or bedside)</div>
                <div><strong>Benefits:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Reduces febrile non-hemolytic transfusion reactions</li>
                    <li>Reduces HLA alloimmunization</li>
                    <li>Reduces CMV transmission risk</li>
                    <li>May reduce immunomodulation</li>
                  </ul>
                </div>
                <div><strong>Universal:</strong> Most blood banks use universal leukoreduction</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Irradiated</CardTitle>
              <Badge variant="destructive" className="ml-2">Critical</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-sm space-y-2">
                <div><strong>Purpose:</strong> Prevent transfusion-associated graft-versus-host disease (TA-GVHD)</div>
                <div><strong>Method:</strong> Gamma irradiation (25 Gy minimum) inactivates T-lymphocytes</div>
                <div><strong>Effect on RBCs:</strong> Increases potassium leak, shortens shelf life to 28 days</div>
                <div><strong>Mandatory Indications:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Hematopoietic stem cell transplant recipients</strong></li>
                    <li><strong>Congenital immunodeficiency syndromes</strong></li>
                    <li><strong>Hodgkin lymphoma</strong></li>
                    <li><strong>Intrauterine transfusions</strong></li>
                    <li><strong>HLA-matched or family-directed donations</strong></li>
                    <li>Intensive chemotherapy patients (per institutional policy)</li>
                    <li>Neonates receiving exchange transfusion</li>
                  </ul>
                </div>
                <div className="border-t pt-2 mt-2">
                  <strong className="text-red-600 dark:text-red-400">Remember:</strong> "SHIP" - Stem cell, SCID/immunodeficiency, Hodgkin's, Intrauterine, HLA-matched/family donor
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CMV-Safe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Methods:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>CMV-seronegative blood (from CMV-negative donors)</li>
                    <li>Leukoreduced blood (CMV resides in WBCs)</li>
                  </ul>
                </div>
                <div><strong>Indications:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>CMV-negative pregnant women</li>
                    <li>CMV-negative stem cell transplant candidates/recipients</li>
                    <li>Premature/low birth weight neonates</li>
                    <li>Severely immunocompromised patients</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Washed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Process:</strong> Saline washing removes plasma proteins and electrolytes</div>
                <div><strong>Shelf life:</strong> 24 hours after washing (open system)</div>
                <div><strong>Indications:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Severe allergic/anaphylactic reactions to plasma proteins</li>
                    <li>IgA deficiency with anti-IgA antibodies</li>
                    <li>Paroxysmal nocturnal hemoglobinuria (PNH) - removes complement</li>
                  </ul>
                </div>
                <div><strong>Note:</strong> Removes ~95-99% of plasma but not 100%</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume-Reduced</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <div><strong>Process:</strong> Centrifugation and removal of supernatant plasma</div>
                <div><strong>Indications:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Neonates and small pediatric patients</li>
                    <li>Patients at risk for volume overload</li>
                    <li>Severe cardiac or renal disease</li>
                  </ul>
                </div>
                <div><strong>Shelf life:</strong> 24 hours (if open system used)</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indications" className="space-y-4">
          <Card className="border-blue-500/50 bg-blue-500/10">
            <CardHeader>
              <CardTitle>Special Patient Populations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Sickle Cell Disease Patients</h3>
                <div className="text-sm space-y-1">
                  <div><Badge variant="outline">Leukoreduced</Badge> - Reduce alloimmunization</div>
                  <div><Badge variant="outline">Extended antigen matching</Badge> - C, E, K at minimum</div>
                  <div><Badge variant="outline">Hemoglobin S-negative</Badge> - Prevent sickling</div>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Bone Marrow/Stem Cell Transplant Recipients</h3>
                <div className="text-sm space-y-1">
                  <div><Badge variant="destructive">Irradiated</Badge> - Prevent TA-GVHD</div>
                  <div><Badge variant="outline">CMV-safe</Badge> - If recipient is CMV-negative</div>
                  <div><Badge variant="outline">Leukoreduced</Badge> - Standard</div>
                  <div><Badge variant="outline">ABO-compatible</Badge> - With donor type post-engraftment</div>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Neonates</h3>
                <div className="text-sm space-y-1">
                  <div><Badge variant="destructive">Irradiated</Badge> - Especially for exchange transfusion</div>
                  <div><Badge variant="outline">CMV-safe</Badge> - For premature/LBW infants</div>
                  <div><Badge variant="outline">Hemoglobin S-negative</Badge> - Per institutional policy</div>
                  <div><Badge variant="outline">Fresh units (&lt;7 days)</Badge> - Minimize potassium load</div>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-semibold mb-2">IgA Deficiency with Anti-IgA</h3>
                <div className="text-sm space-y-1">
                  <div><Badge variant="outline">Washed RBCs</Badge> - Remove plasma IgA</div>
                  <div><Badge variant="outline">IgA-deficient plasma/platelets</Badge> - If available</div>
                  <div>Risk of severe anaphylaxis with plasma-containing products</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/50 bg-yellow-500/10">
            <CardHeader>
              <CardTitle>Quick Reference: Product Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2">
                <div><strong>Febrile reactions (recurrent):</strong> Leukoreduced</div>
                <div><strong>Allergic reactions (severe):</strong> Washed</div>
                <div><strong>Immunocompromised:</strong> Irradiated + CMV-safe + Leukoreduced</div>
                <div><strong>Neonates:</strong> Irradiated + CMV-safe + Fresh (&lt;7 days)</div>
                <div><strong>Sickle cell:</strong> Leukoreduced + Extended phenotype match + HbS-negative</div>
                <div><strong>Volume overload risk:</strong> Volume-reduced</div>
                <div><strong>Massive transfusion:</strong> Emergency release protocol, consider warmer</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
