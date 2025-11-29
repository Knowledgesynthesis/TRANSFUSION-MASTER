import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dna } from 'lucide-react'

export function Foundations() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Dna className="h-10 w-10 text-blue-500" />
        <div>
          <h1 className="text-4xl font-bold">Foundations of Immunohematology</h1>
          <p className="text-muted-foreground">
            RBC antigens, antibody types, and antiglobulin testing
          </p>
        </div>
      </div>

      <Tabs value="overview" onValueChange={() => {}}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="antigens">Antigens</TabsTrigger>
          <TabsTrigger value="antibodies">Antibodies</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Module Overview</CardTitle>
              <CardDescription>
                Understanding the fundamental principles of blood group immunology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                This module covers the essential immunohematology concepts that form
                the foundation for all transfusion medicine practice. Understanding
                these principles is critical for safe blood transfusion.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Key Learning Objectives:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Understand major RBC antigen systems (ABO, Rh, Kell, Kidd, Duffy, MNS)</li>
                  <li>Differentiate between IgG and IgM antibodies</li>
                  <li>Recognize hemolysis patterns (intravascular vs extravascular)</li>
                  <li>Interpret Direct and Indirect Antiglobulin Tests</li>
                  <li>Apply antigen-antibody principles to transfusion safety</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="antigens" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>RBC Antigen Systems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  ABO System
                  <Badge variant="destructive">Critical</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The most important blood group system. ABO incompatibility causes
                  severe acute hemolytic transfusion reactions.
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Group A:</strong> A antigens, anti-B antibodies</div>
                  <div><strong>Group B:</strong> B antigens, anti-A antibodies</div>
                  <div><strong>Group AB:</strong> A and B antigens, no ABO antibodies (universal recipient)</div>
                  <div><strong>Group O:</strong> No ABO antigens, anti-A and anti-B antibodies (universal donor)</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Key Point:</strong> ABO antibodies are naturally occurring
                  IgM antibodies that can cause immediate intravascular hemolysis.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  Rh System
                  <Badge variant="default">High-Yield</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Second most important system. Five major antigens: D, C, c, E, e
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Rh-positive:</strong> D antigen present</div>
                  <div><strong>Rh-negative:</strong> D antigen absent</div>
                  <div><strong>Weak D:</strong> Reduced D antigen expression</div>
                  <div><strong>Partial D:</strong> Missing portions of D antigen</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Clinical Significance:</strong> Anti-D can cause hemolytic
                  disease of the fetus and newborn (HDFN) and hemolytic transfusion
                  reactions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Kell System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  K (Kell) antigen is highly immunogenic. Anti-K is clinically significant.
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <div><strong>K antigen frequency:</strong> ~9% in Caucasians</div>
                  <div><strong>Anti-K:</strong> Can cause severe HDFN and HTR</div>
                  <div><strong>Transfusion:</strong> Requires K-negative units</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Kidd System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Jka and Jkb antigens. Antibodies are notorious for causing delayed
                  hemolytic transfusion reactions.
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <div><strong>Key Feature:</strong> Antibodies can "disappear" and reappear upon re-exposure</div>
                  <div><strong>Clinical Impact:</strong> Delayed hemolytic reactions</div>
                  <div><strong>Remember:</strong> "Kidd antibodies play hide and seek"</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Duffy System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Fya and Fyb antigens. Clinically significant antibodies.
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <div><strong>Duffy-negative phenotype:</strong> Protective against P. vivax malaria</div>
                  <div><strong>Anti-Fya:</strong> Most common clinically significant Duffy antibody</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">MNS System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  M, N, S, and s antigens. Variable clinical significance.
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <div><strong>Anti-M and Anti-N:</strong> Usually clinically insignificant IgM</div>
                  <div><strong>Anti-S and Anti-s:</strong> Can be clinically significant IgG</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="antibodies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Antibody Classification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">IgM Antibodies</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Size:</strong> Large pentameric molecule</div>
                  <div><strong>Hemolysis:</strong> Intravascular (activates complement efficiently)</div>
                  <div><strong>Temperature:</strong> React best at room temperature or colder</div>
                  <div><strong>Placental transfer:</strong> Cannot cross placenta</div>
                  <div><strong>Examples:</strong> ABO antibodies, anti-M, anti-N, anti-Lea, anti-Leb</div>
                  <div><strong>Detection:</strong> Immediate spin (IS) crossmatch</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">IgG Antibodies</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Size:</strong> Smaller monomeric molecule</div>
                  <div><strong>Hemolysis:</strong> Extravascular (macrophage-mediated)</div>
                  <div><strong>Temperature:</strong> React best at 37°C</div>
                  <div><strong>Placental transfer:</strong> Can cross placenta (causes HDFN)</div>
                  <div><strong>Examples:</strong> Anti-D, anti-K, anti-Jka, anti-Fya, anti-E</div>
                  <div><strong>Detection:</strong> Requires Anti-Human Globulin (AHG) phase</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Clinical Significance</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Determining whether an antibody is clinically significant:
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Clinically Significant:</strong> Can cause HTR or HDFN</div>
                  <div>• React at 37°C (body temperature)</div>
                  <div>• React in AHG phase</div>
                  <div>• Typically IgG antibodies</div>
                  <div className="pt-2"><strong>Clinically Insignificant:</strong> Unlikely to cause harm</div>
                  <div>• React only at room temperature or colder</div>
                  <div>• Do not react at 37°C or AHG phase</div>
                  <div>• Typically IgM antibodies (except ABO)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Antiglobulin Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Direct Antiglobulin Test (DAT)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Detects antibodies or complement already bound to patient's RBCs in vivo
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <strong>Procedure:</strong> Patient's RBCs + Anti-Human Globulin (AHG)
                  </div>
                  <div>
                    <strong>Positive DAT indicates:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Autoimmune hemolytic anemia (AIHA)</li>
                      <li>Hemolytic transfusion reaction</li>
                      <li>Hemolytic disease of fetus/newborn (HDFN)</li>
                      <li>Drug-induced hemolytic anemia</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Interpretation:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>IgG positive: Warm autoantibody, HDFN, delayed HTR</li>
                      <li>C3d positive: Cold agglutinins, acute HTR</li>
                      <li>Both positive: Mixed type AIHA, acute HTR</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Indirect Antiglobulin Test (IAT)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Detects antibodies in patient's serum/plasma
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <strong>Procedure:</strong> Patient's serum + Reagent RBCs → Incubate 37°C → Add AHG
                  </div>
                  <div>
                    <strong>Used for:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Antibody screening (type & screen)</li>
                      <li>Antibody identification</li>
                      <li>Crossmatching</li>
                      <li>Prenatal antibody screening</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Key Point:</strong> The antibody screen is an IAT using screening cells
                    with known antigens to detect unexpected antibodies in patient serum.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Hemolysis Patterns</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                    <div className="font-semibold">Intravascular Hemolysis</div>
                    <div><strong>Mechanism:</strong> RBC destruction in circulation</div>
                    <div><strong>Antibodies:</strong> IgM, ABO incompatibility</div>
                    <div><strong>Complement:</strong> Full complement activation</div>
                    <div><strong>Lab findings:</strong></div>
                    <ul className="list-disc list-inside ml-4">
                      <li>Free hemoglobin in plasma/urine</li>
                      <li>Decreased haptoglobin</li>
                      <li>Hemoglobinuria</li>
                      <li>Hemoglobinemia</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                    <div className="font-semibold">Extravascular Hemolysis</div>
                    <div><strong>Mechanism:</strong> Macrophage-mediated destruction in spleen/liver</div>
                    <div><strong>Antibodies:</strong> IgG antibodies</div>
                    <div><strong>Complement:</strong> Partial or no complement</div>
                    <div><strong>Lab findings:</strong></div>
                    <ul className="list-disc list-inside ml-4">
                      <li>Increased indirect bilirubin</li>
                      <li>Decreased haptoglobin</li>
                      <li>Positive DAT</li>
                      <li>No hemoglobinuria (usually)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/50 bg-yellow-500/10">
            <CardHeader>
              <CardTitle>High-Yield Pearls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• <strong>Always rule out clerical error first</strong> in suspected transfusion reactions</div>
              <div>• <strong>ABO incompatibility</strong> is the most dangerous transfusion error</div>
              <div>• <strong>Kidd antibodies</strong> can disappear and cause delayed hemolytic reactions</div>
              <div>• <strong>Anti-K</strong> is highly immunogenic despite low K antigen frequency</div>
              <div>• <strong>Warm autoantibodies</strong> (IgG) vs <strong>cold agglutinins</strong> (IgM) have different DAT patterns</div>
              <div>• <strong>C3d on DAT</strong> suggests complement activation (cold agglutinins or acute HTR)</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
