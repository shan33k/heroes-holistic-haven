import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Gift, ExternalLink, Snowflake } from 'lucide-react';

const Donate = () => {
  const goalAmount = 1000000;
  const currentAmount = 125000; // Example current amount
  const progressPercentage = (currentAmount / goalAmount) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healing-blue-light to-nature-green-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us reach our goal of $1,000,000 to bring life-changing holistic practices to veterans nationwide.
            </p>
          </div>
        </section>

        {/* BlueCube Icebath Raffle - Featured Section */}
        <section className="py-16 bg-gradient-to-r from-healing-blue to-calm-teal text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Snowflake className="h-8 w-8 mr-2" />
                <Gift className="h-8 w-8 ml-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WIN A BLUECUBE ICEBATH
              </h2>
              <p className="text-2xl font-semibold mb-4">
                Valued at $30,000
              </p>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Enter our exclusive raffle for a chance to win this premium cold exposure therapy unit. 
                Perfect for veterans seeking the benefits of cold therapy in their own home.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Raffle Details */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Cold Exposure Therapy?</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-white/80 mr-3">•</span>
                      Reduces inflammation and stress hormones
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-3">•</span>
                      Improves mental clarity and focus
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-3">•</span>
                      Enhances recovery and immune function
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-3">•</span>
                      Builds mental resilience and discipline
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Raffle Entry */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6">Enter the Raffle</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get your BlueCube raffle tickets and support our mission while having a chance to win this incredible prize!
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="btn-raffle-primary text-lg px-8 py-4 h-auto"
                  >
                    <a 
                      href="https://www.zeffy.com/en-US/ticketing/159b6e65-31f9-4317-b217-b1b94b7f11e7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>GET YOUR BLUECUBE RAFFLE TICKETS HERE!!</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <p className="text-sm opacity-80 mt-4">
                    *Raffle tickets support Holistic Heroes Coalition's veteran programs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fundraising Goal */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card border-2 border-healing-blue/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-healing-blue mb-4">Fundraising Goal</h2>
                  <div className="text-6xl font-bold text-healing-blue mb-2">
                    ${goalAmount.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">Target Amount</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised: ${currentAmount.toLocaleString()}</span>
                    <span className="text-muted-foreground">{progressPercentage.toFixed(1)}% Complete</span>
                  </div>
                  <Progress value={progressPercentage} className="h-4" />
                  <p className="text-center text-muted-foreground">
                    ${(goalAmount - currentAmount).toLocaleString()} remaining to reach our goal
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-healing-blue">Make a Direct Donation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preset Amounts */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[25, 50, 100, 250].map((amount) => (
                      <Button 
                        key={amount} 
                        variant="outline" 
                        className="h-12 text-healing-blue border-healing-blue hover:bg-healing-blue hover:text-white"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input 
                    id="custom-amount" 
                    type="number" 
                    placeholder="Enter amount" 
                    className="text-lg h-12"
                  />
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First Name" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last Name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="donation-frequency">Donation Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full h-12 text-lg bg-gradient-to-r from-healing-blue to-calm-teal hover:opacity-90 transition-opacity">
                  Donate Securely
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your donation is secure and helps veterans access life-changing holistic practices.
                  Holistic Heroes Coalition is a 501(c)(3) organization. Your donation is tax-deductible.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-healing-blue">How Your Donation Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-healing-blue mb-2">$50</div>
                  <h3 className="font-semibold mb-2">Basic Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Provides educational materials and basic breathwork training for one veteran
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-healing-blue mb-2">$150</div>
                  <h3 className="font-semibold mb-2">Complete Program</h3>
                  <p className="text-muted-foreground text-sm">
                    Funds a complete holistic wellness program including breathwork and cold therapy
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-healing-blue mb-2">$500</div>
                  <h3 className="font-semibold mb-2">Community Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    Sponsors multiple veterans and helps build local support communities
                  </p>
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

export default Donate;