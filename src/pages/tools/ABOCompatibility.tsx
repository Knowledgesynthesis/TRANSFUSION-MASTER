import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator } from 'lucide-react'
import { useState } from 'react'

const bloodTypes = ['O', 'A', 'B', 'AB']
const rhTypes = ['Positive', 'Negative']

export function ABOCompatibility() {
  const [recipientABO, setRecipientABO] = useState('O')
  const [recipientRh, setRecipientRh] = useState('Positive')
  const [productType, setProductType] = useState<'RBC' | 'Plasma'>('RBC')

  const getCompatibleRBC = (recipient: string) => {
    switch (recipient) {
      case 'O': return ['O']
      case 'A': return ['A', 'O']
      case 'B': return ['B', 'O']
      case 'AB': return ['AB', 'A', 'B', 'O']
      default: return []
    }
  }

  const getCompatiblePlasma = (recipient: string) => {
    switch (recipient) {
      case 'O': return ['O', 'A', 'B', 'AB']
      case 'A': return ['A', 'AB']
      case 'B': return ['B', 'AB']
      case 'AB': return ['AB']
      default: return []
    }
  }

  const compatible = productType === 'RBC' ? getCompatibleRBC(recipientABO) : getCompatiblePlasma(recipientABO)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Calculator className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">ABO Compatibility Simulator</h1>
          <p className="text-muted-foreground">
            Explore RBC and plasma compatibility patterns
          </p>
        </div>
      </div>

      <Card className="border-blue-500/50 bg-blue-500/10">
        <CardContent className="pt-6 text-sm">
          <strong>Educational Tool:</strong> This simulator helps you understand ABO compatibility
          rules for RBCs and plasma. Remember: plasma compatibility is the reverse of RBC compatibility!
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-semibold mb-2 block">Product Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setProductType('RBC')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    productType === 'RBC'
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  RBCs
                </button>
                <button
                  onClick={() => setProductType('Plasma')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    productType === 'Plasma'
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Plasma
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Recipient ABO Type</label>
              <div className="grid grid-cols-4 gap-2">
                {bloodTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setRecipientABO(type)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      recipientABO === type
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Recipient Rh Type</label>
              <div className="grid grid-cols-2 gap-2">
                {rhTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setRecipientRh(type)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      recipientRh === type
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compatible Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Recipient</div>
                <div className="text-3xl font-bold mt-2">
                  {recipientABO} {recipientRh}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  receiving {productType}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {bloodTypes.map(type => {
                  const isCompatible = compatible.includes(type)
                  return (
                    <div
                      key={type}
                      className={`p-4 rounded-lg border-2 text-center ${
                        isCompatible
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/5 opacity-50'
                      }`}
                    >
                      <div className="text-2xl font-bold">{type}</div>
                      <div className="text-xs mt-1">
                        {isCompatible ? '✓ Compatible' : '✗ Incompatible'}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <strong>Key Points:</strong>
                {productType === 'RBC' ? (
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>O is universal RBC donor</li>
                    <li>AB is universal RBC recipient</li>
                    <li>Can receive same type or O</li>
                    <li>Rh-positive can receive Rh+ or Rh-</li>
                    <li>Rh-negative should receive Rh-</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>AB is universal plasma donor</li>
                    <li>O is universal plasma recipient</li>
                    <li>Reverse of RBC compatibility!</li>
                    <li>Must avoid antibodies against recipient antigens</li>
                  </ul>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compatibility Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2">Recipient →<br/>Donor ↓</th>
                  {bloodTypes.map(type => (
                    <th key={type} className="border p-2">{type}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloodTypes.map(donorType => (
                  <tr key={donorType}>
                    <th className="border p-2 bg-muted">{donorType}</th>
                    {bloodTypes.map(recipientType => {
                      const compatList = productType === 'RBC'
                        ? getCompatibleRBC(recipientType)
                        : getCompatiblePlasma(recipientType)
                      const isCompat = compatList.includes(donorType)
                      return (
                        <td
                          key={recipientType}
                          className={`border p-2 text-center ${
                            isCompat ? 'bg-green-500/20' : 'bg-red-500/20'
                          }`}
                        >
                          {isCompat ? '✓' : '✗'}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Green (✓) = Compatible, Red (✗) = Incompatible
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
