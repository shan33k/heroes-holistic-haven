import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Heart, Shield, Brain, Leaf, Target, Users, Snowflake, Gift } from 'lucide-react';

const Index = () => {
  const goalAmount = 1000000;
  const currentAmount = 125000;
  const progressPercentage = (currentAmount / goalAmount) * 100;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/lovable-uploads/ee48565e-c22d-42cb-b7cd-5b3e482fae8b.png';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(/lovable-uploads/ee48565e-c22d-42cb-b7cd-5b3e482fae8b.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Hero background image of veterans in nature"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Empowering Veterans Through Holistic Healing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transforming lives through natural, drug-free alternatives that promote well-being, 
              resilience, and inner strength for those who have served our country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-4">
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button asChild size="lg" variant="hero-outline" className="text-lg px-8 py-4">
                <Link to="/donate">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-br from-healing-blue-light to-nature-green-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 text-healing-blue">Our Mission</h2>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Holistic Heroes Coalition is a 501(c)(3) non-profit organization dedicated to empowering veterans 
                  through education and access to holistic practices like breathwork and cold exposure therapy. 
                  We provide natural, evidence-based tools to improve well-being and quality of life for those 
                  who have served our country with honor.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" aria-labelledby="benefits-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-16 text-healing-blue">Benefits of Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Leaf className="h-12 w-12 text-nature-green mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Natural & Drug-Free</h3>
                  <p className="text-muted-foreground">
                    Safe, natural alternatives for stress and anxiety management without pharmaceutical dependency.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-healing-blue mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Empowers Self-Regulation</h3>
                  <p className="text-muted-foreground">
                    Learn to regulate your nervous system and emotional responses through proven techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-calm-teal mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Enhances Relaxation</h3>
                  <p className="text-muted-foreground">
                    Experience deep relaxation and stress relief through guided breathwork and mindfulness practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-nature-green mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Reduces Stress</h3>
                  <p className="text-muted-foreground">
                    Scientifically-backed methods to lower cortisol levels and manage daily stress effectively.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Brain className="h-12 w-12 text-healing-blue mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Improves Mental Clarity</h3>
                  <p className="text-muted-foreground">
                    Enhance cognitive function, focus, and decision-making abilities through holistic practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-calm-teal mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4">Builds Community</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow veterans on a shared journey of healing and personal growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Goal Section */}
        <section className="py-20 bg-gradient-to-r from-healing-blue to-calm-teal text-white" aria-labelledby="donation-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="donation-heading" className="text-4xl font-bold mb-8">Help Us Reach Our Goal</h2>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-6xl font-bold mb-4">
                  ${goalAmount.toLocaleString()}
                </div>
                <p className="text-xl mb-6 opacity-90">Fundraising Goal</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Raised: ${currentAmount.toLocaleString()}</span>
                    <span>{progressPercentage.toFixed(1)}% Complete</span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className="h-4 bg-white/20" 
                    aria-label={`Fundraising progress: ${progressPercentage.toFixed(1)}% complete`}
                  />
                  <p className="text-sm opacity-80">
                    ${(goalAmount - currentAmount).toLocaleString()} remaining to transform veteran lives nationwide
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button asChild size="lg" className="btn-raffle-primary text-lg px-8 py-4">
                    <Link to="/donate">Donate Now</Link>
                  </Button>
                  <Button asChild size="lg" className="btn-raffle-outline text-lg px-8 py-4">
                    <Link to="/donate">Enter BlueCube Raffle</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 text-healing-blue">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of veterans who have discovered the transformative power of holistic healing practices. 
              Take the first step toward a healthier, more balanced life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-healing-blue to-calm-teal text-lg px-8 py-4">
                <Link to="/programs">View Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-healing-blue text-healing-blue hover:bg-healing-blue hover:text-white text-lg px-8 py-4">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* BlueCube Raffle Promo */}
        <section className="py-20 bg-gradient-to-r from-healing-blue to-calm-teal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Snowflake className="h-8 w-8 mr-2" />
              <Gift className="h-8 w-8 ml-2" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WIN A BLUECUBE ICEBATH
            </h2>
            <p className="text-xl font-semibold mb-4">
              Valued at $30,000
            </p>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Enter our exclusive raffle for a chance to win this premium cold exposure therapy unit. 
              Perfect for veterans seeking the benefits of cold therapy in their own home.
            </p>
            <Button asChild size="lg" className="btn-raffle-primary text-lg px-8 py-4">
              <Link to="/donate">Enter the Raffle</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
