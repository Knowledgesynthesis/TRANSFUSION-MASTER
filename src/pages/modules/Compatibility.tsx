import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GitMerge } from 'lucide-react'

export function Compatibility() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <GitMerge className="h-10 w-10 text-green-500" />
        <div>
          <h1 className="text-4xl font-bold">Compatibility & Special Matching</h1>
          <p className="text-muted-foreground">
            ABO compatibility charts, Rh logic, and antigen-negative unit selection
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ABO Compatibility for RBCs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Recipient Type</th>
                  <th className="border p-3 text-left">Can Receive RBCs From</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border p-3 font-semibold">O</td>
                  <td className="border p-3">O only</td>
                  <td className="border p-3">Universal RBC donor</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">A</td>
                  <td className="border p-3">A, O</td>
                  <td className="border p-3">Has anti-B</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">B</td>
                  <td className="border p-3">B, O</td>
                  <td className="border p-3">Has anti-A</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">AB</td>
                  <td className="border p-3">AB, A, B, O</td>
                  <td className="border p-3">Universal RBC recipient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ABO Compatibility for Plasma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Recipient Type</th>
                  <th className="border p-3 text-left">Can Receive Plasma From</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border p-3 font-semibold">O</td>
                  <td className="border p-3">O, A, B, AB</td>
                  <td className="border p-3">Universal plasma recipient</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">A</td>
                  <td className="border p-3">A, AB</td>
                  <td className="border p-3">Avoid anti-A plasma</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">B</td>
                  <td className="border p-3">B, AB</td>
                  <td className="border p-3">Avoid anti-B plasma</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">AB</td>
                  <td className="border p-3">AB only</td>
                  <td className="border p-3">Universal plasma donor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Note: Plasma compatibility is the reverse of RBC compatibility!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rh Compatibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
            <div><strong>Rh-positive recipients:</strong> Can receive Rh-positive or Rh-negative blood</div>
            <div><strong>Rh-negative recipients:</strong> Should receive Rh-negative blood to prevent alloimmunization</div>
            <div className="border-t pt-2 mt-2">
              <strong>Emergency situations:</strong> Rh-positive blood may be given to Rh-negative recipients if:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Life-threatening emergency</li>
                <li>Rh-negative blood unavailable</li>
                <li>Consider RhIG for Rh-negative females of childbearing potential</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Special Patient Populations Requiring Extended Matching</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Sickle Cell Disease</h3>
            <div className="text-sm space-y-1">
              <div><strong>Minimum matching:</strong> C, E, K antigens</div>
              <div><strong>Rationale:</strong> Reduce alloimmunization in chronically transfused patients</div>
              <div><strong>Additional:</strong> May extend to Fya, Jka, S antigens</div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Alloimmunized Patients</h3>
            <div className="text-sm space-y-1">
              <div>Patients with identified antibodies require antigen-negative units</div>
              <div><strong>Example:</strong> Anti-K → K-negative units</div>
              <div><strong>Multiple antibodies:</strong> Must match all identified specificities</div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Bone Marrow Transplant Recipients</h3>
            <div className="text-sm space-y-1">
              <div><strong>Pre-engraftment:</strong> Compatible with recipient's original type</div>
              <div><strong>Post-engraftment:</strong> Compatible with donor's type</div>
              <div><strong>Major ABO mismatch:</strong> May need plasma-reduced RBCs</div>
              <div><strong>Minor ABO mismatch:</strong> Monitor for passenger lymphocyte syndrome</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardHeader>
          <CardTitle>Key Pearls</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>• <strong>O-negative RBCs</strong> are universal donor for emergencies</div>
          <div>• <strong>AB plasma</strong> is universal donor for plasma/FFP</div>
          <div>• <strong>Platelets:</strong> ABO matching preferred but not required; consider Rh for Rh-negative females</div>
          <div>• <strong>Cryoprecipitate:</strong> ABO matching not required</div>
          <div>• <strong>Minor mismatch</strong> (donor plasma incompatible with recipient RBCs) is generally safe for RBC transfusion</div>
          <div>• <strong>Major mismatch</strong> (donor RBCs incompatible with recipient plasma) is NEVER acceptable</div>
        </CardContent>
      </Card>
    </div>
  )
}
