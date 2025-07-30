import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healing-blue-light to-nature-green-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Holistic Heroes Coalition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a mission to bring transformative holistic practices to veterans,
              empowering them with natural tools for healing and well-being.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-healing-blue">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  Holistic Heroes Coalition is a 501(c)(3) non-profit organization dedicated to empowering veterans 
                  through education and access to holistic practices like breathwork and cold exposure therapy. 
                  We believe in the power of natural, drug-free alternatives to support mental health, reduce stress, 
                  and improve overall quality of life for those who have served our country.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-healing-blue">Our Founder</h2>
              <Card className="shadow-card max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">David Shipp</h3>
                  <p className="text-muted-foreground mb-4">Austin, Texas</p>
                  <p className="text-lg leading-relaxed">
                    David founded Holistic Heroes Coalition with a vision to bridge the gap between 
                    traditional wellness practices and veteran care. Based in Austin, Texas, David 
                    recognized the unique challenges veterans face and the tremendous potential of 
                    holistic healing approaches to transform lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-healing-blue">Our Community</h2>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Join our growing community of veterans and supporters on Instagram to see stories 
                  of transformation, healing practices in action, and connect with others on the journey.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href="https://instagram.com/holisticheroes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-healing-blue hover:text-calm-teal transition-colors font-semibold text-lg"
                  >
                    @holisticheroes on Instagram
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;