import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity } from 'lucide-react'

export function Apheresis() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Activity className="h-10 w-10 text-cyan-500" />
        <div>
          <h1 className="text-4xl font-bold">Apheresis</h1>
          <p className="text-muted-foreground">
            Therapeutic and donor apheresis procedures
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Therapeutic Plasma Exchange (TPE)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Removal of patient's plasma and replacement with donor plasma or albumin to remove pathogenic substances
          </p>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>ASFA Category I (Standard first-line therapy):</strong>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li><strong>TTP (Thrombotic Thrombocytopenic Purpura):</strong> Life-saving, start immediately</li>
                <li>Goodpasture syndrome (anti-GBM disease)</li>
                <li>Guillain-Barré syndrome</li>
                <li>Chronic inflammatory demyelinating polyneuropathy (CIDP)</li>
                <li>Myasthenia gravis (acute)</li>
                <li>Hyperviscosity in Waldenström macroglobulinemia</li>
              </ul>
            </div>
            <div className="border-t pt-2">
              <strong>Replacement Fluid:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>FFP:</strong> For TTP (replaces ADAMTS13)</li>
                <li><strong>Albumin:</strong> For most other indications</li>
                <li>May use combination (e.g., albumin + FFP)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Red Cell Exchange</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
            <div><strong>Primary Indication: Sickle Cell Disease</strong></div>
            <div>
              <strong>Acute indications:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Acute chest syndrome</li>
                <li>Stroke</li>
                <li>Multi-organ failure</li>
              </ul>
            </div>
            <div>
              <strong>Chronic indications:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Stroke prevention (secondary prevention)</li>
                <li>Recurrent vasoocclusive crises</li>
              </ul>
            </div>
            <div><strong>Goal:</strong> Reduce HbS% while maintaining acceptable Hct</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Therapeutic Apheresis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Leukapheresis:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Hyperleukocytosis with leukostasis symptoms (AML, CML blast crisis)</li>
                <li>Goal: Reduce WBC count to prevent end-organ damage</li>
              </ul>
            </div>
            <div>
              <strong>Plateletpheresis (Therapeutic):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Symptomatic thrombocytosis (rare)</li>
                <li>Essential thrombocythemia with bleeding/thrombosis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donor Apheresis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Plateletpheresis (Donor):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Collect platelets from single donor</li>
                <li>Equivalent to 6-8 whole blood-derived platelet units</li>
                <li>Reduces donor exposure for recipient</li>
              </ul>
            </div>
            <div>
              <strong>Plasmapheresis (Donor):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Collect plasma for transfusion or fractionation</li>
                <li>Donors can donate more frequently than whole blood</li>
              </ul>
            </div>
            <div>
              <strong>Advantages of apheresis products:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Single donor = less donor exposure</li>
                <li>Can collect larger volumes</li>
                <li>Can select HLA-matched donors for platelets</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-500/50 bg-red-500/10">
        <CardHeader>
          <CardTitle>TTP: The Apheresis Emergency</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Classic pentad (rarely all present):</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Thrombocytopenia</li>
              <li>Microangiopathic hemolytic anemia (MAHA)</li>
              <li>Neurologic symptoms</li>
              <li>Renal dysfunction</li>
              <li>Fever</li>
            </ul>
          </div>
          <div className="border-t pt-2">
            <strong>Diagnosis:</strong> Thrombocytopenia + MAHA (schistocytes) is sufficient to start treatment
          </div>
          <div><strong>Treatment:</strong> Daily plasma exchange with FFP until platelets normalize and LDH stable</div>
          <div className="text-red-600 dark:text-red-400">
            <strong>Remember:</strong> Don't wait for pentad or ADAMTS13 results - start TPE immediately if TTP suspected!
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
