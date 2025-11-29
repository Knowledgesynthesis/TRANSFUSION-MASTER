import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dna,
  TestTube,
  Droplet,
  GitMerge,
  AlertTriangle,
  Baby,
  Activity,
  Users,
  Shield,
  Briefcase,
  Calculator,
  BookOpen,
} from 'lucide-react'

const modules = [
  {
    id: 'foundations',
    title: 'Foundations of Immunohematology',
    description: 'RBC antigens, antibody types, hemolysis patterns, DAT/IAT',
    icon: Dna,
    color: 'text-blue-500',
    route: '/foundations',
  },
  {
    id: 'pretransfusion',
    title: 'Pre-Transfusion Testing',
    description: 'Type & screen, antibody identification, crossmatch logic',
    icon: TestTube,
    color: 'text-purple-500',
    route: '/pretransfusion',
  },
  {
    id: 'components',
    title: 'Blood Components & Modifications',
    description: 'PRBCs, platelets, plasma, irradiated, washed, leukoreduced',
    icon: Droplet,
    color: 'text-red-500',
    route: '/components',
  },
  {
    id: 'compatibility',
    title: 'Compatibility & Special Matching',
    description: 'ABO compatibility, Rh logic, antigen-negative selection',
    icon: GitMerge,
    color: 'text-green-500',
    route: '/compatibility',
  },
  {
    id: 'reactions',
    title: 'Transfusion Reactions',
    description: 'AHTR, FNHTR, TRALI, TACO, delayed reactions, workups',
    icon: AlertTriangle,
    color: 'text-orange-500',
    route: '/reactions',
    badge: 'Core',
  },
  {
    id: 'pediatrics',
    title: 'Pediatric & Neonatal Transfusion',
    description: 'Neonatal alloimmune hemolysis, DAT-positive newborns, exchange transfusion',
    icon: Baby,
    color: 'text-pink-500',
    route: '/pediatrics',
  },
  {
    id: 'apheresis',
    title: 'Apheresis',
    description: 'Therapeutic apheresis, TTP, plasma exchange, donor apheresis',
    icon: Activity,
    color: 'text-cyan-500',
    route: '/apheresis',
  },
  {
    id: 'donor',
    title: 'Donor Screening',
    description: 'Donor eligibility, infectious disease testing, NAT logic',
    icon: Users,
    color: 'text-indigo-500',
    route: '/donor',
  },
  {
    id: 'hemovigilance',
    title: 'Hemovigilance & Quality',
    description: 'Error reporting, reaction tracking, temperature monitoring',
    icon: Shield,
    color: 'text-yellow-500',
    route: '/hemovigilance',
  },
  {
    id: 'cases',
    title: 'Integrated Decision-Making',
    description: 'Full transfusion cases from pre-transfusion to post-reaction',
    icon: Briefcase,
    color: 'text-teal-500',
    route: '/cases',
  },
]

const tools = [
  {
    title: 'ABO Compatibility Simulator',
    description: 'Explore RBC/Plasma compatibility matrices',
    icon: Calculator,
    route: '/tools/abo-compatibility',
  },
  {
    title: 'Antibody Screen Interpreter',
    description: 'Evaluate positive antibody screens',
    icon: TestTube,
    route: '/tools/antibody-screen',
  },
  {
    title: 'Reaction Classifier',
    description: 'Identify transfusion reaction types',
    icon: AlertTriangle,
    route: '/tools/reaction-classifier',
  },
  {
    title: 'Product Selector',
    description: 'Choose appropriate product modifications',
    icon: Droplet,
    route: '/tools/product-selector',
  },
]

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Transfusion Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From pre-transfusion to post-reaction workup. Master transfusion medicine
          for pathology residents and fellows.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">Modules</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Interactive Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Practice Questions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Tracking</div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Section */}
      <div id="modules" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Learning Modules</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link key={module.id} to={module.route}>
                <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Icon className={`h-8 w-8 ${module.color}`} />
                      {module.badge && (
                        <Badge variant="default">{module.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Interactive Tools Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Interactive Tools</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link key={tool.title} to={tool.route}>
                <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Assessment CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <BookOpen className="h-12 w-12" />
              <div>
                <CardTitle className="text-2xl">Ready to Test Your Knowledge?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Session-only assessments with immediate feedback
                </CardDescription>
              </div>
            </div>
            <Link to="/assessment">
              <Button size="lg" variant="secondary">
                Start Assessment
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>

      {/* Disclaimer */}
      <Card className="border-yellow-500/50 bg-yellow-500/10">
        <CardContent className="pt-6">
          <p className="text-sm text-center">
            <strong>Educational Use Only:</strong> This application is designed for
            educational purposes and is not intended for medical decision-making or
            patient care. Always consult appropriate clinical resources and guidelines
            for patient management.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
