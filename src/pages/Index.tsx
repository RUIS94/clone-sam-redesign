import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Target, Users, Clock, Shield, TrendingUp, Zap, Eye, Puzzle, Heart, ClockIcon, Monitor, Check } from "lucide-react";

const Index = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">
              SAM.Coach
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Solutions
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#resources" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Resources
              </a>
              <a href="#download" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Download
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-foreground">
                Login
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
            35% Boost in Win Rate
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            An <span className="text-accent">AI</span> Sales-Execution Agent to Optimize{" "}
            <span className="text-accent">Deal qualification</span>,{" "}
            <span className="text-accent">Coaching</span> and{" "}
            <span className="text-accent">Forecasting</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            More Revenue, More Time, More Life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              Start a free trial
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              How SAM Can <span className="text-accent">Work For You</span>
            </h2>
          </div>

          <Tabs defaultValue="ae" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 bg-background">
              <TabsTrigger value="ae" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                AE
              </TabsTrigger>
              <TabsTrigger value="leaders" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Sales Leaders
              </TabsTrigger>
              <TabsTrigger value="presales" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Pre-Sales
              </TabsTrigger>
              <TabsTrigger value="sdr" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                SDR
              </TabsTrigger>
              <TabsTrigger value="enablement" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Sales Enablement
              </TabsTrigger>
              <TabsTrigger value="revops" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                RevOps
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ae" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">Before meeting</h4>
                            <h5 className="font-bold mb-2 text-foreground">Be more prepared for client meetings in less time</h5>
                            <p className="text-muted-foreground">
                              Structure meetings around customer pain points and thought-provoking questions for maximum impact.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">During meeting</h4>
                            <h5 className="font-bold mb-2 text-foreground">Amplify listening and question skills</h5>
                            <p className="text-muted-foreground">
                              Build credibility, foster deeper connections, and outshine competitors.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Target className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">After meeting</h4>
                            <h5 className="font-bold mb-2 text-foreground">Know your next best action</h5>
                            <p className="text-muted-foreground">
                              Stay laser-focused on high-priority tasks that drive sales forward.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="leaders" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Eye className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Unlock Real-Time Deal Visibility</h5>
                            <p className="text-muted-foreground">
                              Gain 360° insights into deal qualification to save at-risk deals before it's too late.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Target className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Scale Coaching to Meet Every Rep's Needs</h5>
                            <p className="text-muted-foreground">
                              Empower teams with real-time insights for targeted coaching that drives revenue growth.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Users className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Master Accurate Forecasting</h5>
                            <p className="text-muted-foreground">
                              Balancing optimism with data-driven precision for reliable revenue predictions.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="presales" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Prepare for Meetings Faster</h5>
                            <p className="text-muted-foreground">
                              Streamline research and prep to be more efficient in every client interaction.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Monitor className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Gain Real-Time Visibility into Client Interactions</h5>
                            <p className="text-muted-foreground">
                              Access past meeting notes to understand customer needs and assess solutions effectively.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Puzzle className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Contribute to Deal Qualification</h5>
                            <p className="text-muted-foreground">
                              Collaborate seamlessly with the sales team on deal assessments, track action items, and stay updated with real-time notifications.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sdr" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <ClockIcon className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Secure more qualified leads faster</h5>
                            <p className="text-muted-foreground">
                              Engage prospects with clear, personalized messaging at every stage of the journey.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Zap className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Track and Optimize Outreach Performance</h5>
                            <p className="text-muted-foreground">
                              Measure and refine your approach based on real-time data to improve results.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Heart className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Align with AEs on Lead Quality</h5>
                            <p className="text-muted-foreground">
                              Eliminate friction by ensuring clarity and agreement on sales-qualified leads.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="enablement" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Accelerate Onboarding</h5>
                            <p className="text-muted-foreground">
                              Get new reps up to speed faster with structured learning paths and real-time coaching.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Target className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Track Training Effectiveness</h5>
                            <p className="text-muted-foreground">
                              Measure the impact of enablement programs on sales performance and revenue.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Users className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Scale Best Practices</h5>
                            <p className="text-muted-foreground">
                              Capture and share winning strategies across your entire sales organization.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="revops" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Optimize Revenue Operations</h5>
                            <p className="text-muted-foreground">
                              Streamline processes and eliminate bottlenecks to accelerate revenue growth.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Eye className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Gain Pipeline Visibility</h5>
                            <p className="text-muted-foreground">
                              Get complete visibility into your revenue pipeline with real-time analytics.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                          <div>
                            <h5 className="font-bold mb-2 text-foreground">Ensure Data Accuracy</h5>
                            <p className="text-muted-foreground">
                              Maintain clean, reliable data across all your revenue systems.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-border">
                      Request a Demo
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Join 2,000+ target-hitting enterprise salespeople
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-32 h-16 bg-secondary rounded flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Generation Deal Qualification */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Magic
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Next Generation Deal Qualification
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Powered by AI, SAM helps you focus on high value deals with proven probability of closing and discover sales opportunities that you didn't know existed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">360° Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise sales qualification is a team effort.
                </p>
                <p className="text-muted-foreground">
                  SAM provides a real-time qualification playbook for every customer interaction, giving your team deeper insights. With multi-source assessments, you enhance forecast accuracy and drive better outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Amplified Qualification</h3>
                <p className="text-muted-foreground mb-4">
                  Missed questions lead to missed forecasts.
                </p>
                <p className="text-muted-foreground">
                  SAM sharpens real-time questioning and listening skills, ensuring sales teams capture and validate critical customer insights, boosting forecast accuracy and account strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Exception Alert</h3>
                <p className="text-muted-foreground mb-4">
                  Keeping up with shifting client priorities is tougher than ever, impacting forecast accuracy.
                </p>
                <p className="text-muted-foreground">
                  SAM detects deal risks in real time and suggests follow-up actions to keep opportunities on track.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your team's needs
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-secondary p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === "annual"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
              </button>
            </div>
            {billingCycle === "annual" && (
              <p className="text-sm text-accent mt-2 font-medium">Save up to 20% with annual billing</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI Meeting Recorder */}
            <Card className="border-border relative">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">AI Meeting Recorder</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for individuals and small teams
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${billingCycle === "annual" ? "19" : "24"}
                  </span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-6">
                  Get Started
                </Button>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Unlimited meeting recordings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">AI-powered transcription</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Key moments & highlights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Action item extraction</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">CRM integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Searchable transcript library</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Intelligence */}
            <Card className="border-accent border-2 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground border-0">Most Popular</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Revenue Intelligence</h3>
                <p className="text-muted-foreground mb-6">
                  For growing sales teams seeking insights
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${billingCycle === "annual" ? "49" : "59"}
                  </span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-6">
                  Get Started
                </Button>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-2">Everything in AI Meeting Recorder, plus:</p>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Deal intelligence & scoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Pipeline analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Conversation analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Coaching insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Sales playbook templates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Team collaboration tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Advanced reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Accelerator */}
            <Card className="border-border relative">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Revenue Accelerator</h3>
                <p className="text-muted-foreground mb-6">
                  Enterprise-grade with full customization
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-6">
                  Contact Sales
                </Button>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-2">Everything in Revenue Intelligence, plus:</p>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Custom AI models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Advanced forecasting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Multi-team rollout support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Dedicated success manager</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Priority support & training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Custom integrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">SSO & advanced security</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">SLA guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section id="request" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Request Demo
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Discover how SAM can help you win, keep and grow good customers and salespeople.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">Reduce</p>
                <p className="font-semibold text-foreground">Meeting preparation time</p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">Increase</p>
                <p className="font-semibold text-foreground">ROI on face-to-face selling time</p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">Close</p>
                <p className="font-semibold text-foreground">More deals faster</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <p className="text-sm text-muted-foreground mb-6">
                  "*" indicates required fields
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company / Organization*
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your work e-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-foreground">
                      Company website*
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Your phone number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="salespeople" className="text-sm font-medium text-foreground">
                      How many salespeople in your company*
                    </label>
                    <input
                      type="number"
                      id="salespeople"
                      min="1"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SAM.Coach</h3>
              <p className="text-sm mb-4 opacity-90">
                123 Business Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
              <p className="text-sm opacity-90">
                Email: info@sam.coach<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">What SAM does</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Deal Qualification</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sales Coaching</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Forecasting</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Meeting Intelligence</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Revenue Analytics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Meet SAM</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4 opacity-90">
                Stay connected with the latest updates and insights
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>© 2025 SAM.Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
