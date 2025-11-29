import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users } from 'lucide-react'

export function Donor() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Users className="h-10 w-10 text-indigo-500" />
        <div>
          <h1 className="text-4xl font-bold">Donor Screening & Testing</h1>
          <p className="text-muted-foreground">
            Blood donor eligibility and infectious disease testing
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Donor Eligibility Criteria (General)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div><strong>Age:</strong> Usually 16-17 years (with parental consent) to no upper limit if healthy</div>
            <div><strong>Weight:</strong> Minimum 110 pounds (50 kg) for whole blood donation</div>
            <div><strong>Hemoglobin:</strong> ≥12.5 g/dL (females), ≥13.0 g/dL (males)</div>
            <div><strong>Temperature:</strong> ≤37.5°C (99.5°F)</div>
            <div><strong>Pulse:</strong> 50-100 bpm (regular)</div>
            <div><strong>Blood Pressure:</strong> Systolic ≤180, Diastolic ≤100 mmHg</div>
            <div className="border-t pt-2">
              <strong>Frequency:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Whole blood: Every 56 days (8 weeks)</li>
                <li>Double RBC apheresis: Every 112 days (16 weeks)</li>
                <li>Platelets: Every 3 days, up to 24 times per year</li>
                <li>Plasma: Every 28 days</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Deferral Reasons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>Permanent Deferrals:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>HIV/AIDS</li>
                <li>Hepatitis B or C</li>
                <li>Babesiosis</li>
                <li>CJD or vCJD risk</li>
                <li>HTLV-I/II</li>
              </ul>
            </div>
            <div>
              <strong>Temporary Deferrals:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Recent tattoo/piercing: 3 months (if not regulated state)</li>
                <li>Malaria exposure/infection: 1-3 years depending on risk</li>
                <li>Recent vaccination: varies by vaccine</li>
                <li>Pregnancy: 6 weeks postpartum</li>
                <li>Recent transfusion: 12 months</li>
                <li>Surgery: varies by procedure</li>
                <li>Medications: varies by drug</li>
                <li>Travel to certain areas: varies by location and risk</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Infectious Disease Testing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg text-sm space-y-3">
            <div>
              <strong>All donated blood is tested for:</strong>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li><strong>HIV-1/2:</strong> Antibody + NAT</li>
                <li><strong>HCV:</strong> Antibody + NAT</li>
                <li><strong>HBV:</strong> HBsAg + HBc antibody + NAT</li>
                <li><strong>HTLV-I/II:</strong> Antibody</li>
                <li><strong>Syphilis:</strong> Serologic test</li>
                <li><strong>West Nile Virus:</strong> NAT (seasonal)</li>
                <li><strong>Zika:</strong> NAT (when indicated)</li>
                <li><strong>Chagas disease:</strong> Antibody (first-time donors or at-risk)</li>
                <li><strong>Babesia:</strong> Antibody or NAT in endemic areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
            <div><strong>Nucleic Acid Testing (NAT):</strong></div>
            <ul className="list-disc list-inside ml-4">
              <li>Detects viral genetic material directly</li>
              <li>Reduces window period significantly</li>
              <li>More sensitive than antibody testing alone</li>
            </ul>
            <div className="border-t pt-2">
              <strong>Window Periods (with NAT):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>HIV: ~10 days</li>
                <li>HCV: ~7-10 days</li>
                <li>HBV: ~20 days</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Blood Collection & Storage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div><strong>Whole Blood Collection:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Volume: ~450-500 mL (± 10%)</li>
                <li>Anticoagulant: CPD, CPDA-1, or other approved solutions</li>
                <li>Collection time: Should be &lt;15 minutes</li>
              </ul>
            </div>
            <div><strong>Component Preparation:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Must be separated within specified time</li>
                <li>Platelets: Room temperature with agitation</li>
                <li>RBCs, Plasma: Refrigerated</li>
              </ul>
            </div>
            <div><strong>Labeling:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>ABO/Rh type</li>
                <li>Unique donation number</li>
                <li>Expiration date</li>
                <li>Required testing results</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardHeader>
          <CardTitle>Key Points</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>• <strong>Donor screening</strong> includes detailed questionnaire to assess risk factors</div>
          <div>• <strong>All units</strong> are tested for infectious diseases regardless of donor history</div>
          <div>• <strong>NAT</strong> has dramatically reduced window periods and improved blood safety</div>
          <div>• <strong>Confidential unit exclusion:</strong> Donors can mark their donation as not for transfusion</div>
          <div>• <strong>Autologous donation:</strong> Increasingly rare, doesn't guarantee safety or need</div>
        </CardContent>
      </Card>
    </div>
  )
}
