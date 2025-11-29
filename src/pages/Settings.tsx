import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/useThemeStore'
import { Sun, Moon, Info, AlertTriangle } from 'lucide-react'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your learning experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose your preferred color theme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <div>
                <div className="font-medium">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </div>
                <div className="text-sm text-muted-foreground">
                  Currently using {theme} theme
                </div>
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            <CardTitle>About Transfusion Master</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Purpose</h3>
            <p className="text-sm text-muted-foreground">
              Transfusion Master is a comprehensive educational platform designed for
              pathology residents, hematology-pathology fellows, and transfusion
              medicine fellows during their transfusion medicine rotations.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>10 comprehensive learning modules covering all aspects of transfusion medicine</li>
              <li>Interactive tools for ABO compatibility, antibody screening, and reaction classification</li>
              <li>Session-only assessments with immediate feedback</li>
              <li>Mobile-first, offline-capable design</li>
              <li>Dark mode optimized for extended study sessions</li>
              <li>No data tracking or user account required</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Learning Objectives</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Understand ABO/Rh and antigen-antibody principles</li>
              <li>Perform and interpret type-and-screen and crossmatch logic</li>
              <li>Recognize and classify transfusion reactions</li>
              <li>Select appropriate blood components and modifications</li>
              <li>Navigate transfusion algorithms and decision-making pathways</li>
              <li>Understand apheresis indications and procedures</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Version</h3>
            <p className="text-sm text-muted-foreground">1.0.0</p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <CardTitle>Important Disclaimers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              Educational Use Only
            </h3>
            <p className="text-sm text-muted-foreground">
              This application is designed exclusively for educational purposes. It is
              NOT intended for medical decision-making, patient care, or clinical use.
              Always consult appropriate clinical resources, institutional protocols,
              and guidelines for patient management.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              No Patient Data
            </h3>
            <p className="text-sm text-muted-foreground">
              All cases, scenarios, and examples presented in this application use
              synthetic data only. No real patient information or identifiers are used
              or should be entered into this application.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              No Clinical Recommendations
            </h3>
            <p className="text-sm text-muted-foreground">
              This application does not provide clinical recommendations, dosing
              information, or treatment protocols. All transfusion decisions should be
              made by qualified healthcare professionals based on current guidelines,
              institutional policies, and individual patient circumstances.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              Session-Only Data
            </h3>
            <p className="text-sm text-muted-foreground">
              No user data, assessment scores, or progress information is stored,
              tracked, or transmitted. All quiz results and interactions are
              session-only and will be cleared when you close the application.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              Consult Current Guidelines
            </h3>
            <p className="text-sm text-muted-foreground">
              Transfusion medicine practices and guidelines evolve. Always refer to the
              most current AABB standards, CAP guidelines, FDA recommendations, and your
              institution's policies for up-to-date information.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
              No Warranty
            </h3>
            <p className="text-sm text-muted-foreground">
              This educational tool is provided "as is" without any warranties, express
              or implied. While every effort has been made to ensure accuracy, users
              should verify information with authoritative sources.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Transfusion Master does not collect, store, or transmit any personal
            information or usage data. The application functions entirely within your
            browser, and all quiz results are session-only.
          </p>
          <p className="text-sm text-muted-foreground">
            No user accounts, login systems, or tracking mechanisms are implemented or
            required to use this application.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
