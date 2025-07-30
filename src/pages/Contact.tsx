import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healing-blue-light to-nature-green-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to support you on your holistic healing journey. Reach out with questions, 
              feedback, or to learn more about our programs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-healing-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Send us a message</p>
                  <a 
                    href="mailto:david@holisticheroes.org" 
                    className="text-healing-blue hover:text-calm-teal transition-colors font-medium"
                  >
                    david@holisticheroes.org
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-healing-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm mb-2">Based in</p>
                  <p className="text-healing-blue font-medium">Austin, Texas</p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-healing-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground text-sm mb-2">We typically respond within</p>
                  <p className="text-healing-blue font-medium">24 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-healing-blue">Drop Us a Line</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-first-name">First Name *</Label>
                    <Input id="contact-first-name" placeholder="First Name" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-last-name">Last Name *</Label>
                    <Input id="contact-last-name" placeholder="Last Name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                {/* Inquiry Type */}
                <div>
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What is this regarding?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="partnership">Partnership/Collaboration</SelectItem>
                      <SelectItem value="media">Media/Press</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="contact-subject">Subject *</Label>
                  <Input id="contact-subject" placeholder="Brief subject line" required />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Tell us how we can help you or share your thoughts with us..."
                    className="min-h-32"
                    required
                  />
                </div>

                {/* Veteran Status */}
                <div>
                  <Label htmlFor="veteran-status">Are you a veteran?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I am a veteran</SelectItem>
                      <SelectItem value="family">Veteran family member</SelectItem>
                      <SelectItem value="supporter">Supporter/Advocate</SelectItem>
                      <SelectItem value="professional">Healthcare Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Newsletter Signup */}
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-300" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for updates on programs and events
                  </Label>
                </div>

                <Button className="w-full h-12 text-lg bg-gradient-to-r from-healing-blue to-calm-teal hover:opacity-90 transition-opacity">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information with third parties. 
                  Your message will be reviewed by our team and we'll respond as soon as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-healing-blue">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-healing-blue">How do I join a program?</h3>
                  <p className="text-muted-foreground text-sm">
                    Visit our Programs page and fill out the sign-up form for the program you're interested in. 
                    We'll contact you with next steps and scheduling information.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-healing-blue">Are programs free for veterans?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! All our programs are provided at no cost to veterans thanks to the generous support 
                    of our donors and community partners.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-healing-blue">Do I need prior experience?</h3>
                  <p className="text-muted-foreground text-sm">
                    Not at all! Our programs are designed for all experience levels. We provide comprehensive 
                    guidance and support for beginners through advanced practitioners.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-healing-blue">How can I support the mission?</h3>
                  <p className="text-muted-foreground text-sm">
                    You can donate, volunteer, share our mission with others, or help us connect with veterans 
                    who could benefit from our programs.
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

export default Contact;