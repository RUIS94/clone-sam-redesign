import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Target, Users, Clock, Shield, TrendingUp, Zap, Eye, Puzzle, Heart, ClockIcon, Monitor } from "lucide-react";

const Index = () => {
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

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2025 SAM.Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
