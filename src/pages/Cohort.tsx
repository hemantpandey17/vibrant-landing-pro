
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Calendar, Users, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";

const Cohort = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="section-title mb-6">
                🚀 Level Up Your <span className="fun-title">Tech Career</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
                4-Week Mentorship Program
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  4 Weeks + 1:1 Coaching
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  7-10 Participants
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Community
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Designed For Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-center mb-12">
                Designed For
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="feature-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                        <span>Software Engineers with 5+ years of experience</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                        <span>Earning $200K–250K in the US or ₹20–40L in India</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                        <span>Ready to make a big career move</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                        <span>Willing to commit ~10 focused hours/week</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="feature-card border-brand-teal border-2">
                  <CardHeader>
                    <CardTitle className="text-center">🎯 Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-lg">
                      Help you land a <span className="font-bold text-brand-blue">30%+ higher-paying role</span>: 
                      <span className="font-bold"> $300K+ in the US or ₹50L+ in India</span> by identifying your gaps, 
                      sharpening your positioning, and accelerating your interview journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-center mb-12">
                🔥 What You'll Get
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>Gap analysis: What's keeping you from the next comp tier</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>Personalized interview prep roadmap</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>Resume teardown & rewrite</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>Warm intros & referrals from my network</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>Weekly live group sessions (1–1.5 hrs)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                    <span>WhatsApp community for questions, accountability, and support</span>
                  </div>
                </div>
              </div>
              <Card className="mt-8 bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">⚠️</span>
                    <p className="italic">
                      This is not a course or tutorial. I won't be "teaching" — this is coaching to help unblock, accelerate, and guide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Not Join Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-center mb-12">
                Who Should Not Join
              </h2>
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">If you are not a Software Engineer</h3>
                        <p className="text-muted-foreground">If you are a data engineer, ML engineer, or IC in any other role, this cohort might not be the perfect match</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">If you have &lt;4 years of experience</h3>
                        <p className="text-muted-foreground">This might still help you in interviews, but realistically, it is very difficult to get to the goal compensation with this year of experience</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">If you are not looking to switch jobs</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-center mb-12">
                📅 Program Structure
              </h2>
              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <div className="lg:col-span-4 grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="feature-card text-center">
                    <CardContent className="p-6">
                      <Calendar className="w-8 h-8 text-brand-blue mx-auto mb-4" />
                      <h3 className="font-bold mb-2">Duration</h3>
                      <p className="text-sm">4 weeks of group sessions + 1 week of 1:1s</p>
                    </CardContent>
                  </Card>
                  <Card className="feature-card text-center">
                    <CardContent className="p-6">
                      <Users className="w-8 h-8 text-brand-blue mx-auto mb-4" />
                      <h3 className="font-bold mb-2">Cohort Size</h3>
                      <p className="text-sm">7–10 serious participants</p>
                    </CardContent>
                  </Card>
                  <Card className="feature-card text-center">
                    <CardContent className="p-6">
                      <Phone className="w-8 h-8 text-brand-blue mx-auto mb-4" />
                      <h3 className="font-bold mb-2">Weekly Calls</h3>
                      <p className="text-sm">1–1.5 hr live sessions on weekends</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="text-center mb-12">
                <Badge variant="outline" className="px-4 py-2 text-lg">
                  Planning to kick off the cohort on July 2nd week
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Breakdown */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {/* Week 1 */}
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">🧠 WEEK 1: Kickoff, Gap Analysis & Resume Rewrite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Live Session (90 mins):</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Introductions & Goals from the Cohort</li>
                          <li>• What separates $200K/25L from $300K/50L</li>
                          <li>• Gap Analysis Framework: skills, comp, signal, story</li>
                          <li>• Resume teardown: examples of bad vs great</li>
                          <li>• Get your resume drafted by a professional writer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">During Week 1:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Build your career story → target roles</li>
                          <li>• Connect with recruiters from the target companies</li>
                          <li>• Q&A on WhatsApp Group</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 2 */}
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">🧱 WEEK 2: DSA, HLD, LLD & Interview Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Live Session (90 mins):</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• How to prepare *smarter* (not grind endlessly)</li>
                          <li>• Resources for DSA, HLD, LLD and Behavioral</li>
                          <li>• DSA plan for senior engineers (what matters)</li>
                          <li>• HLD frameworks that show maturity</li>
                          <li>• LLD clarity - what's expected at your level</li>
                          <li>• "Think out loud" technique for system design interviews</li>
                          <li>• Mindset shifts: leading vs reacting in interviews</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">During Week 2:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Personalized preparation roadmap (ideally 1-2 months roadmap before you are ready for interviews)</li>
                          <li>• Practice DSA questions and design questions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 3 */}
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">💼 WEEK 3: Job Hunt Strategy, Networking & Referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Live Session (90 mins):</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Why job boards won't get you there</li>
                          <li>• Building a high-signal target company list</li>
                          <li>• How to write cold outreach and referral asks that work</li>
                          <li>• Leveraging weak ties and ex-colleagues</li>
                          <li>• Warm intro strategy (with templates)</li>
                          <li>• How to stand out as a mid-to-senior hire</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">During Week 3:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Share draft outreach (get async feedback)</li>
                          <li>• Start sending DMs/emails</li>
                          <li>• You'll get intros from my network (where applicable)</li>
                          <li>• Share weekly job traction updates in WhatsApp</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 4 */}
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">🎯 WEEK 4: Offer Strategy, Negotiation & Underrated Moves</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Live Session (75 mins):</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• How to stand out in recruiter + HM screens</li>
                          <li>• Framing your experience as "already senior"</li>
                          <li>• Real-world negotiation frameworks</li>
                          <li>• What to do with multiple offers</li>
                          <li>• If you're stuck, how to regain momentum</li>
                          <li>• Long-term growth planning beyond just this offer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">During Week 4:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Polish your LinkedIn & interview pitch</li>
                          <li>• Use WhatsApp for live help with recruiter/offer conversations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 5 */}
                <Card className="feature-card border-brand-teal border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">👤 WEEK 5: 1:1 Coaching (30–45 mins per person)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Personalized feedback on your roadmap</li>
                      <li>• Final adjustments to your prep, positioning, and outreach</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Pricing */}
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">⚡ Outcomes You Can Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                        <span>Clarity on what's *actually* blocking you from $300K+/₹50L+</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                        <span>A great resume that sells your strengths</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                        <span>Clear strategy to interview smarter, not harder</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                        <span>Warm intros to companies you care about</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1" />
                        <span>Real interviews → better offers → more confidence</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="feature-card border-brand-blue border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">💰 Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-2">🇮🇳 ₹16,000</div>
                        <p className="text-muted-foreground">India</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-2">🇺🇸 $300</div>
                        <p className="text-muted-foreground">US and Rest of World</p>
                      </div>
                      <div className="bg-brand-light p-4 rounded-lg">
                        <p className="text-sm text-center">
                          Includes a 6-month subscription to premium newsletter 
                          <a href="https://thehustlingengineer.substack.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline ml-1">
                            (The Hustling Engineer)
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-heading mb-8">
                👉 Interested?
              </h2>
              <Card className="feature-card max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    You can email me at{" "}
                    <a 
                      href="mailto:hemant.pandey17@gmail.com?subject=Mentorship Cohort 1"
                      className="text-brand-blue hover:underline font-semibold"
                    >
                      hemant.pandey17@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Subject: "Mentorship Cohort 1"<br />
                    Please add your LinkedIn profile in the mail
                  </p>
                  <Button className="btn-primary mb-6">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:hemant.pandey17@gmail.com?subject=Mentorship Cohort 1">
                      Send Email
                    </a>
                  </Button>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm">
                      I have already received interest from over 30 people, and I will only pick 10, so it is more focused.
                      <br />
                      <span className="font-semibold">Planning to do this cohort every 3 months</span>
                    </p>
                  </div>
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

export default Cohort;
