import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield } from 'lucide-react'

export function Hemovigilance() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Shield className="h-10 w-10 text-yellow-500" />
        <div>
          <h1 className="text-4xl font-bold">Hemovigilance & Quality Systems</h1>
          <p className="text-muted-foreground">
            Safety monitoring, error prevention, and quality assurance
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is Hemovigilance?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            Hemovigilance is the systematic surveillance of adverse reactions and events
            related to transfusion, from collection to follow-up of recipients, to improve
            transfusion safety.
          </p>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
            <div><strong>Goals:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Detect and prevent adverse transfusion events</li>
                <li>Monitor transfusion safety</li>
                <li>Improve transfusion practices</li>
                <li>Provide data for regulatory decisions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error Prevention: The Critical Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-sm space-y-3">
            <div><strong>Patient Identification:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Use two independent identifiers (name, DOB, MRN)</li>
                <li>Never use room number or bed location</li>
                <li>Active patient participation when possible</li>
                <li>Label specimens at bedside</li>
              </ul>
            </div>
            <div><strong>Specimen Labeling:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Label immediately after collection</li>
                <li>Never pre-label tubes</li>
                <li>Include all required information legibly</li>
                <li>Date and time of collection</li>
              </ul>
            </div>
            <div><strong>Pre-Transfusion Checks:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Verify patient identity at bedside</li>
                <li>Match unit to patient using two identifiers</li>
                <li>Check unit number, ABO/Rh, expiration</li>
                <li>Inspect unit for abnormalities</li>
                <li>Two-person verification when required</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temperature Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div><strong>Storage Requirements:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>RBCs:</strong> 1-6°C</li>
                <li><strong>Platelets:</strong> 20-24°C with agitation</li>
                <li><strong>Fresh Frozen Plasma:</strong> ≤-18°C until thawed</li>
                <li><strong>Thawed plasma:</strong> 1-6°C, expires 5 days</li>
                <li><strong>Cryoprecipitate:</strong> ≤-18°C until thawed</li>
              </ul>
            </div>
            <div><strong>Monitoring:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Continuous temperature recording</li>
                <li>Alarm systems for out-of-range temperatures</li>
                <li>Regular calibration of monitoring devices</li>
                <li>Documented response to alarms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transfusion Reaction Reporting</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg text-sm space-y-3">
            <div><strong>Who Reports:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Healthcare provider who observed reaction</li>
                <li>Notification to transfusion service/blood bank</li>
                <li>Documentation in patient medical record</li>
              </ul>
            </div>
            <div><strong>What to Report:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>All suspected transfusion reactions</li>
                <li>Time of onset relative to transfusion</li>
                <li>Signs and symptoms</li>
                <li>Vital signs</li>
                <li>Actions taken</li>
                <li>Volume transfused before reaction</li>
              </ul>
            </div>
            <div><strong>FDA Reporting:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Fatalities:</strong> Must report within 24 hours</li>
                <li><strong>Serious adverse events:</strong> Report within 7 days</li>
                <li>Product deviations and errors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quality Assurance Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div><strong>Reagent QC:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Test reagents with positive and negative controls</li>
                <li>Document lot numbers and expiration dates</li>
                <li>Validate new reagent lots before use</li>
              </ul>
            </div>
            <div><strong>Equipment QC:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Centrifuge calibration and speed verification</li>
                <li>Refrigerator/freezer temperature checks</li>
                <li>Automated analyzer maintenance and QC</li>
              </ul>
            </div>
            <div><strong>Proficiency Testing:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Participate in external proficiency surveys</li>
                <li>CAP, AABB, or other recognized programs</li>
                <li>Review and address failures promptly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inspection Readiness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-3">
            <div><strong>Regulatory Bodies:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>FDA:</strong> Inspects blood collection facilities</li>
                <li><strong>AABB:</strong> Accreditation inspections</li>
                <li><strong>CAP:</strong> Laboratory accreditation</li>
                <li><strong>State agencies:</strong> Vary by location</li>
              </ul>
            </div>
            <div><strong>Key Documentation:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Standard operating procedures (SOPs)</li>
                <li>Training records for all personnel</li>
                <li>Competency assessments</li>
                <li>QC records</li>
                <li>Incident and error reports</li>
                <li>Temperature logs</li>
                <li>Transfusion reaction investigations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardHeader>
          <CardTitle>Key Safety Principles</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>• <strong>Right blood, right patient, right time:</strong> The fundamental rule</div>
          <div>• <strong>Patient identification errors</strong> are the most common cause of fatal transfusion reactions</div>
          <div>• <strong>Culture of safety:</strong> Encourage reporting without blame</div>
          <div>• <strong>Root cause analysis:</strong> Learn from errors to prevent recurrence</div>
          <div>• <strong>Documentation:</strong> If it wasn't documented, it wasn't done</div>
        </CardContent>
      </Card>
    </div>
  )
}
