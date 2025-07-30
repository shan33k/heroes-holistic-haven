import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

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
                <CardTitle className="text-2xl text-center text-healing-blue">Make a Donation</CardTitle>
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