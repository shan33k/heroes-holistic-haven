import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Resolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healing-blue-light to-nature-green-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resolution Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to resolving any concerns and ensuring the best experience for all veterans in our programs.
            </p>
          </div>
        </section>

        {/* Policy Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="mb-8 border-healing-blue/30 bg-healing-blue-light/20">
              <AlertCircle className="h-4 w-4 text-healing-blue" />
              <AlertDescription className="text-healing-blue">
                <strong>Important Notice:</strong> If Holistic Heroes Coalition is unable to help, you can file a case in our Resolution Center by January 25, 2026. You may be eligible for Buyer Protection.
              </AlertDescription>
            </Alert>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-healing-blue">Resolution Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  At Holistic Heroes Coalition, we strive to provide exceptional service and support to all veterans. 
                  Our Resolution Center is designed to address any concerns, disputes, or issues that may arise 
                  during your participation in our programs.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-healing-blue">What We Cover:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Program delivery issues</li>
                    <li>• Service quality concerns</li>
                    <li>• Communication problems</li>
                    <li>• Billing or donation disputes</li>
                    <li>• Accessibility accommodation requests</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-healing-blue">Resolution Process:</h3>
                  <ol className="space-y-2 text-muted-foreground ml-4">
                    <li>1. Submit your case using the form below</li>
                    <li>2. Our team will review your case within 48 hours</li>
                    <li>3. We'll contact you to discuss resolution options</li>
                    <li>4. If needed, we'll escalate to our board of directors</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Case Filing Form */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-healing-blue">File a Resolution Case</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="case-first-name">First Name *</Label>
                    <Input id="case-first-name" placeholder="First Name" required />
                  </div>
                  <div>
                    <Label htmlFor="case-last-name">Last Name *</Label>
                    <Input id="case-last-name" placeholder="Last Name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="case-email">Email Address *</Label>
                  <Input id="case-email" type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <Label htmlFor="case-phone">Phone Number</Label>
                  <Input id="case-phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                {/* Case Information */}
                <div>
                  <Label htmlFor="case-type">Case Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="program-issue">Program Delivery Issue</SelectItem>
                      <SelectItem value="service-quality">Service Quality Concern</SelectItem>
                      <SelectItem value="communication">Communication Problem</SelectItem>
                      <SelectItem value="billing">Billing/Donation Dispute</SelectItem>
                      <SelectItem value="accessibility">Accessibility Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="case-program">Related Program</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program (if applicable)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breathwork">Breathwork Program</SelectItem>
                      <SelectItem value="cold-therapy">Cold Exposure Therapy</SelectItem>
                      <SelectItem value="general">General Services</SelectItem>
                      <SelectItem value="not-applicable">Not Applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="case-date">Date of Incident</Label>
                  <Input id="case-date" type="date" />
                </div>

                <div>
                  <Label htmlFor="case-description">Case Description *</Label>
                  <Textarea 
                    id="case-description" 
                    placeholder="Please provide a detailed description of your concern or issue. Include any relevant dates, names, and circumstances."
                    className="min-h-32"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="case-resolution">Desired Resolution</Label>
                  <Textarea 
                    id="case-resolution" 
                    placeholder="What would you like us to do to resolve this issue?"
                    className="min-h-24"
                  />
                </div>

                <div>
                  <Label htmlFor="case-attempts">Previous Resolution Attempts</Label>
                  <Textarea 
                    id="case-attempts" 
                    placeholder="Have you tried to resolve this issue before? If so, please describe what was attempted."
                    className="min-h-20"
                  />
                </div>

                <Button className="w-full h-12 text-lg bg-gradient-to-r from-healing-blue to-calm-teal hover:opacity-90 transition-opacity">
                  Submit Resolution Case
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to work with Holistic Heroes Coalition in good faith to resolve your concern. 
                  We will contact you within 48 hours of receiving your case.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Alternative */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-healing-blue">Need Immediate Assistance?</h2>
            <Card className="shadow-card max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  For urgent matters or if you prefer to speak directly with our team, 
                  please don't hesitate to reach out.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Email: <a href="mailto:david@holisticheroes.org" className="text-healing-blue hover:text-calm-teal">david@holisticheroes.org</a></p>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
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

export default Resolution;