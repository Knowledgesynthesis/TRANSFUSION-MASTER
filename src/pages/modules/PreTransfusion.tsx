import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TestTube } from 'lucide-react'
import { useState } from 'react'

export function PreTransfusion() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <TestTube className="h-10 w-10 text-purple-500" />
        <div>
          <h1 className="text-4xl font-bold">Pre-Transfusion Testing</h1>
          <p className="text-muted-foreground">
            Type & screen, antibody identification, and crossmatch logic
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="typescreen">Type & Screen</TabsTrigger>
          <TabsTrigger value="antibody">Antibody ID</TabsTrigger>
          <TabsTrigger value="crossmatch">Crossmatch</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Transfusion Testing Workflow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Pre-transfusion testing ensures compatibility between donor blood and
                recipient. The workflow follows a systematic approach to identify ABO/Rh
                type and detect unexpected antibodies.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Standard Workflow:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge>1</Badge>
                    <div>
                      <strong>Patient Identification</strong>
                      <div className="text-muted-foreground">Verify patient identity, label specimen</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge>2</Badge>
                    <div>
                      <strong>ABO/Rh Typing</strong>
                      <div className="text-muted-foreground">Forward and reverse type</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge>3</Badge>
                    <div>
                      <strong>Antibody Screen</strong>
                      <div className="text-muted-foreground">Screen for unexpected antibodies using reagent cells</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge>4</Badge>
                    <div>
                      <strong>Antibody Identification (if positive)</strong>
                      <div className="text-muted-foreground">Use antibody panel to identify specificity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge>5</Badge>
                    <div>
                      <strong>Crossmatch</strong>
                      <div className="text-muted-foreground">Test patient serum against donor RBCs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge>6</Badge>
                    <div>
                      <strong>Issue Blood Products</strong>
                      <div className="text-muted-foreground">Release compatible units</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typescreen" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Type & Screen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">ABO/Rh Typing</h3>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <strong className="block mb-2">Forward Type (Cell Typing)</strong>
                    <p className="text-sm text-muted-foreground mb-2">
                      Test patient RBCs with anti-A and anti-B reagents
                    </p>
                    <div className="text-sm space-y-1">
                      <div>Anti-A positive, Anti-B negative → <strong>Group A</strong></div>
                      <div>Anti-A negative, Anti-B positive → <strong>Group B</strong></div>
                      <div>Anti-A positive, Anti-B positive → <strong>Group AB</strong></div>
                      <div>Anti-A negative, Anti-B negative → <strong>Group O</strong></div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <strong className="block mb-2">Reverse Type (Serum Typing)</strong>
                    <p className="text-sm text-muted-foreground mb-2">
                      Test patient serum with A1 and B reagent cells
                    </p>
                    <div className="text-sm space-y-1">
                      <div>A1 cells negative, B cells positive → <strong>Group A</strong></div>
                      <div>A1 cells positive, B cells negative → <strong>Group B</strong></div>
                      <div>A1 cells negative, B cells negative → <strong>Group AB</strong></div>
                      <div>A1 cells positive, B cells positive → <strong>Group O</strong></div>
                    </div>
                  </div>

                  <Card className="border-yellow-500/50 bg-yellow-500/10">
                    <CardContent className="pt-4">
                      <strong>Critical: Forward and Reverse Must Match!</strong>
                      <p className="text-sm mt-2">
                        If forward and reverse types don't agree, investigate before issuing blood:
                      </p>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>Weak or missing antigens (newborns, leukemia, bone marrow transplant)</li>
                        <li>Weak or missing antibodies (newborns, elderly, immunodeficiency)</li>
                        <li>Extra antibodies (unexpected alloantibodies, autoantibodies)</li>
                        <li>Technical errors (contamination, reagent issues)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Rh Typing</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Rh-positive:</strong> D antigen present</div>
                  <div><strong>Rh-negative:</strong> D antigen absent</div>
                  <div><strong>Weak D testing:</strong> Performed on initial Rh-negative results</div>
                  <div className="pt-2 border-t">
                    <strong>Clinical approach:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Weak D positive donors → Labeled as Rh-positive</li>
                      <li>Weak D positive recipients → Can receive Rh-positive blood</li>
                      <li>Weak D negative (true Rh-negative) → Receive Rh-negative blood</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Antibody Screen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                The antibody screen detects unexpected antibodies in patient serum using
                commercially prepared screening cells (usually 2-3 cells) with known antigens.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                <div>
                  <strong>Testing Phases:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li><strong>Immediate Spin (IS):</strong> Detects IgM antibodies (ABO, cold antibodies)</li>
                    <li><strong>37°C Incubation:</strong> Allows IgG antibodies to bind</li>
                    <li><strong>Anti-Human Globulin (AHG):</strong> Detects IgG antibodies</li>
                  </ul>
                </div>
                <div className="border-t pt-3">
                  <strong>Interpretation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li><strong>Negative screen:</strong> No unexpected antibodies detected</li>
                    <li><strong>Positive screen:</strong> Proceed to antibody identification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="antibody" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Antibody Identification</CardTitle>
              <CardDescription>
                Systematic approach to identifying unexpected antibodies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">When to Perform</h3>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Positive antibody screen</li>
                    <li>Incompatible crossmatch</li>
                    <li>Positive DAT requiring investigation</li>
                    <li>Suspected HDFN</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Antibody Panel</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An antibody panel consists of 10-20 reagent RBCs with known antigen
                  profiles. Patient serum is tested against each cell.
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <strong>Rule-Out Method:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Cells that are negative (no reaction) rule OUT antibodies to antigens present on those cells</li>
                      <li>Cells that are positive (reaction) suggest possible antibody specificities</li>
                      <li>Must have at least 3 antigen-positive cells showing reactions</li>
                      <li>Must rule out antibodies using antigen-positive cells that don't react</li>
                    </ul>
                  </div>
                  <div className="border-t pt-3">
                    <strong>Pattern Recognition:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Look for consistent patterns across the panel</li>
                      <li>Check for dosage effect (stronger reactions with homozygous cells)</li>
                      <li>Consider phase of reactivity (IS, 37°C, AHG)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Common Antibodies to Know</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                    <div className="font-semibold text-red-500">High Clinical Significance</div>
                    <div><strong>Anti-K (Kell):</strong> Highly immunogenic</div>
                    <div><strong>Anti-Jka, Anti-Jkb:</strong> Can disappear, cause delayed HTR</div>
                    <div><strong>Anti-Fya:</strong> Common, clinically significant</div>
                    <div><strong>Anti-E, Anti-c:</strong> Common Rh antibodies</div>
                    <div><strong>Anti-S, Anti-s:</strong> MNS system antibodies</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                    <div className="font-semibold text-yellow-500">Variable Significance</div>
                    <div><strong>Anti-Lea, Anti-Leb:</strong> Usually IgM, room temp reactive</div>
                    <div><strong>Anti-M, Anti-N:</strong> Usually clinically insignificant</div>
                    <div><strong>Anti-P1:</strong> Cold reactive, rarely significant</div>
                  </div>
                </div>
              </div>

              <Card className="border-blue-500/50 bg-blue-500/10">
                <CardContent className="pt-4">
                  <strong>Pearl: Multiple Antibodies</strong>
                  <p className="text-sm mt-2">
                    Patients can have more than one antibody! If the pattern doesn't fit
                    a single antibody, consider multiple antibodies. Perform additional
                    testing with selected cells to separate specificities.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crossmatch" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crossmatching</CardTitle>
              <CardDescription>
                Final compatibility test before issuing blood
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Types of Crossmatch</h3>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <strong className="block mb-2">Immediate Spin (IS) Crossmatch</strong>
                    <div className="text-sm space-y-2">
                      <div>
                        <strong>Procedure:</strong> Patient serum + Donor RBCs → Immediate centrifuge
                      </div>
                      <div>
                        <strong>Detects:</strong> ABO incompatibility (IgM antibodies)
                      </div>
                      <div>
                        <strong>When used:</strong> Rarely used alone; historical method
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <strong className="block mb-2">Electronic (Computer) Crossmatch</strong>
                    <div className="text-sm space-y-2">
                      <div>
                        <strong>Requirements:</strong>
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Computer system validates ABO compatibility</li>
                          <li>Two concordant ABO types on file</li>
                          <li>Negative antibody screen (current specimen)</li>
                          <li>No history of clinically significant antibodies</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Advantage:</strong> Fast, efficient for routine transfusions
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <strong className="block mb-2">Full Serologic (AHG) Crossmatch</strong>
                    <div className="text-sm space-y-2">
                      <div>
                        <strong>Procedure:</strong> Patient serum + Donor RBCs → 37°C incubation → AHG phase
                      </div>
                      <div>
                        <strong>When required:</strong>
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Positive antibody screen</li>
                          <li>History of clinically significant antibodies</li>
                          <li>Electronic crossmatch not available/validated</li>
                          <li>Special circumstances (massive transfusion protocol)</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Detects:</strong> IgG antibodies, ensures full serologic compatibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Incompatible Crossmatch</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <strong>Investigation Steps:</strong>
                    <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                      <li>Verify patient and donor unit identification</li>
                      <li>Check ABO compatibility</li>
                      <li>Review antibody screen results</li>
                      <li>Perform antibody identification if not already done</li>
                      <li>Test donor RBCs for corresponding antigen</li>
                      <li>Perform DAT on patient sample</li>
                      <li>Select antigen-negative units if specific antibody identified</li>
                    </ol>
                  </div>
                  <div className="border-t pt-3">
                    <strong>Common Causes:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Alloantibody to RBC antigen present on donor cells</li>
                      <li>ABO incompatibility (clerical error)</li>
                      <li>Autoantibody reacting with all cells</li>
                      <li>Passive antibody (recent IVIG, plasma products)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Card className="border-red-500/50 bg-red-500/10">
                <CardContent className="pt-4">
                  <strong>Emergency Release (Uncrossmatched Blood)</strong>
                  <p className="text-sm mt-2">
                    In life-threatening emergencies, blood may be released before completion
                    of crossmatch:
                  </p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li><strong>O-negative RBCs:</strong> Universal donor for emergency</li>
                    <li><strong>AB plasma:</strong> Universal donor plasma</li>
                    <li><strong>Type-specific blood:</strong> If ABO/Rh known</li>
                    <li><strong>Documentation:</strong> Physician must acknowledge emergency release</li>
                    <li><strong>Follow-up:</strong> Complete crossmatch after release, inform clinician of results</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
