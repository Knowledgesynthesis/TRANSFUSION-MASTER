import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Baby } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Pediatrics() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Baby className="h-10 w-10 text-pink-500" />
        <div>
          <h1 className="text-4xl font-bold">Pediatric & Neonatal Transfusion</h1>
          <p className="text-muted-foreground">
            Special considerations for neonates and pediatric patients
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Neonatal Transfusion Principles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Key Differences from Adults:</strong>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Neonates (&lt;4 months) don't produce ABO antibodies yet</li>
                <li>ABO testing uses forward typing only (reverse type not reliable)</li>
                <li>Maternal antibodies may be present in infant's plasma</li>
                <li>Smaller blood volumes require careful dosing</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg text-sm">
            <strong>Product Selection for Neonates:</strong>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><Badge variant="destructive">Irradiated</Badge> - Prevent TA-GVHD</li>
              <li><Badge variant="outline">CMV-safe</Badge> - Especially for premature/LBW infants</li>
              <li><Badge variant="outline">Fresh units (&lt;7 days old)</Badge> - Minimize potassium</li>
              <li><Badge variant="outline">HbS-negative</Badge> - Per institutional policy</li>
              <li><Badge variant="outline">Compatible with maternal antibodies</Badge></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hemolytic Disease of the Fetus and Newborn (HDFN)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Mechanism:</strong> Maternal IgG antibodies cross placenta and destroy fetal RBCs
            </div>
            <div>
              <strong>Common Antibodies:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Anti-D (most common and severe historically)</li>
                <li>Anti-K (Kell) - can cause severe anemia</li>
                <li>Anti-c, Anti-E (Rh antibodies)</li>
                <li>Anti-Fya, Anti-Jka</li>
              </ul>
            </div>
            <div>
              <strong>Note:</strong> ABO HDFN is usually mild (maternal IgM anti-A/B doesn't cross placenta well; IgG form is weaker)
            </div>
          </div>

          <div className="bg-red-500/10 p-4 rounded-lg text-sm space-y-2">
            <strong>DAT-Positive Newborn Workup:</strong>
            <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
              <li>Confirm positive DAT</li>
              <li>Check cord bilirubin and hemoglobin</li>
              <li>Perform antibody screen on mother and/or infant</li>
              <li>Identify antibody specificity</li>
              <li>Monitor infant for anemia and hyperbilirubinemia</li>
              <li>Phototherapy and/or exchange transfusion if needed</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exchange Transfusion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
            <div><strong>Indications:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Severe hyperbilirubinemia unresponsive to phototherapy</li>
                <li>Severe anemia in HDFN</li>
              </ul>
            </div>
            <div><strong>Blood Selection:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>ABO: Group O or compatible with maternal antibodies</li>
                <li>Rh: Negative if maternal anti-D present</li>
                <li>Antigen-negative for identified maternal antibodies</li>
                <li>Fresh (&lt;7 days), irradiated, CMV-safe</li>
                <li>Reconstituted to Hct 50-60% with plasma</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>RhIG (RhoGAM) Administration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg text-sm space-y-2">
            <div><strong>Purpose:</strong> Prevent Rh alloimmunization in Rh-negative mothers</div>
            <div><strong>Indications:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Rh-negative mother with Rh-positive (or unknown) fetus</li>
                <li>Given at 28 weeks gestation (antenatal)</li>
                <li>Given within 72 hours after delivery (postnatal)</li>
                <li>After miscarriage, abortion, amniocentesis, trauma</li>
              </ul>
            </div>
            <div><strong>Dose:</strong> 300 μg IM (covers ~30 mL fetal blood or 15 mL RBCs)</div>
            <div><strong>Testing:</strong> Kleihauer-Betke or flow cytometry if large fetal-maternal hemorrhage suspected</div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardHeader>
          <CardTitle>Pediatric Transfusion Pearls</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>• <strong>Neonates &lt;4 months:</strong> Use maternal plasma for compatibility testing</div>
          <div>• <strong>Type O neonates:</strong> Can receive type O or type-specific RBCs</div>
          <div>• <strong>Non-type O neonates with maternal ABO antibodies:</strong> Use type O RBCs</div>
          <div>• <strong>Transfusion volume:</strong> 10-15 mL/kg typical for neonates</div>
          <div>• <strong>Split units:</strong> Use sterile connecting device to create multiple aliquots from single unit</div>
          <div>• <strong>Washed units:</strong> Consider for high-volume or exchange transfusions to reduce potassium</div>
        </CardContent>
      </Card>
    </div>
  )
}
