import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import coldTherapyImage from '@/assets/cold-therapy-nature.jpg';

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healing-blue-light to-nature-green-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Healing Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover transformative holistic practices designed specifically for veterans.
              Natural, drug-free approaches to wellness and personal empowerment.
            </p>
          </div>
        </section>

        {/* Breathwork Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-healing-blue">Breathwork Techniques</h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Discover the power of conscious breathing to regulate your nervous system, 
                    reduce anxiety, and enhance mental clarity. Our breathwork programs teach 
                    evidence-based techniques that you can practice anywhere, anytime.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Box breathing for stress management</li>
                    <li>• Wim Hof method for resilience building</li>
                    <li>• Coherent breathing for emotional regulation</li>
                    <li>• Breathwork for sleep improvement</li>
                  </ul>
                </div>
              </div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-healing-blue">Join Breathwork Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="breathwork-name">Full Name</Label>
                    <Input id="breathwork-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="breathwork-email">Email</Label>
                    <Input id="breathwork-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="breathwork-experience">Previous Experience</Label>
                    <Textarea id="breathwork-experience" placeholder="Tell us about your breathing practice experience" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-healing-blue to-calm-teal">
                    Sign Up for Breathwork
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cold Exposure Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-healing-blue">Join Cold Exposure Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cold-name">Full Name</Label>
                    <Input id="cold-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="cold-email">Email</Label>
                    <Input id="cold-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="cold-health">Health Considerations</Label>
                    <Textarea id="cold-health" placeholder="Any health conditions we should know about?" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-healing-blue to-calm-teal">
                    Sign Up for Cold Therapy
                  </Button>
                </CardContent>
              </Card>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-healing-blue">Cold Exposure Therapy</h2>
                <div className="space-y-4 mb-6">
                  <p className="text-lg text-muted-foreground">
                    Learn to harness the power of controlled cold exposure to build mental resilience, 
                    boost immune function, and enhance overall well-being. Our guided approach ensures 
                    safe and effective practice for all experience levels.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cold shower protocols for beginners</li>
                    <li>• Ice bath techniques for advanced practitioners</li>
                    <li>• Breathing methods for cold exposure</li>
                    <li>• Mental resilience building through cold</li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-card">
                  <img 
                    src={coldTherapyImage} 
                    alt="Veteran practicing cold exposure therapy in nature" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-healing-blue">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-healing-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-healing-blue font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Natural Stress Relief</h3>
                  <p className="text-muted-foreground text-sm">Drug-free alternatives for managing stress and anxiety</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-nature-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-nature-green font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Self-Regulation</h3>
                  <p className="text-muted-foreground text-sm">Learn to regulate your nervous system and emotional responses</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-calm-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-calm-teal font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mental Clarity</h3>
                  <p className="text-muted-foreground text-sm">Improve focus, decision-making, and overall cognitive function</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;