import { Card, CardContent } from '@/components/ui/card'
import { Camera, ArrowLeft, FileText, CheckCircle, AlertCircle, Users, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="ARI HATTA ILHAMI Logo" width={40} height={40} className="object-cover" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ARI HATTA ILHAMI
              </span>
            </div>
            <Link href="/">
              <Button variant="ghost" className="hover:text-purple-400 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-gray-300 text-lg">
              Please read these terms and conditions carefully before using our photography services.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Agreement to Terms */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By engaging <span className="font-semibold text-purple-400">ARI HATTA ILHAMI Photography</span> for photography services, you agree to be bound by these Terms and Conditions. 
                    These terms constitute a legally binding agreement between you (the "Client") and ARI HATTA ILHAMI Photography (the "Photographer").
                  </p>
                  <p>
                    If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, 
                    and such modifications shall be effective immediately upon posting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Camera className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Photography Services</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    ARI HATTA ILHAMI Photography provides professional photography services including but not limited to:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Wedding Photography:</strong> Full-day wedding coverage and engagement sessions</p>
                    <p>• <strong>Portrait Photography:</strong> Individual, family, and professional portraits</p>
                    <p>• <strong>Event Photography:</strong> Corporate events, parties, and special occasions</p>
                    <p>• <strong>Commercial Photography:</strong> Product, business, and marketing photography</p>
                    <p>• <strong>Custom Photography:</strong> Specialized photography projects as agreed upon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking and Payment */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Booking and Payment Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Booking Requirements</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• A signed contract/agreement is required to confirm booking</li>
                        <li>• A non-refundable deposit of 30% is required to secure the date</li>
                        <li>• Full payment is due 7 days before the event date</li>
                        <li>• Booking is confirmed only upon receipt of deposit</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Payment Methods</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• Bank transfer to our designated account</li>
                        <li>• Cash payments (with receipt)</li>
                        <li>• Digital payment platforms (as specified)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Cancellation Policy</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• Client cancellation: Deposit is non-refundable</li>
                        <li>• Cancellation 30+ days before: 50% refund of total amount</li>
                        <li>• Cancellation 7-29 days before: 25% refund of total amount</li>
                        <li>• Cancellation less than 7 days: No refund</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Client Responsibilities</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>As the Client, you agree to:</p>
                  <div className="ml-4 space-y-2">
                    <p>• Provide accurate information about the event/location</p>
                    <p>• Ensure timely access to the photography venue</p>
                    <p>• Obtain necessary permits or permissions for photography</p>
                    <p>• Inform us of any specific requirements or restrictions</p>
                    <p>• Provide a suitable environment for photography (lighting, space, etc.)</p>
                    <p>• Cooperate with the photographer during the session</p>
                    <p>• Respect the photographer's creative direction and professional judgment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Rights and Usage */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Image Rights and Usage</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Client Rights</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• Personal use and sharing of delivered images</li>
                        <li>• Printing for personal display</li>
                        <li>• Use on personal social media accounts with credit</li>
                        <li>• Inclusion in family albums and personal archives</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Photographer Rights</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• Retain copyright and ownership of all original images</li>
                        <li>• Use images for portfolio, marketing, and promotional purposes</li>
                        <li>• Enter images into competitions and exhibitions</li>
                        <li>• Sell prints to third parties (with client consent for recognizable subjects)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Commercial Use</h3>
                      <p className="ml-4">
                        Commercial use of images by the Client requires explicit written permission and may involve additional licensing fees.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery and Post-Production */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Delivery and Post-Production</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Timeline</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• Preview images: 3-5 business days</li>
                        <li>• Edited photos: 2-4 weeks depending on project scope</li>
                        <li>• Albums and prints: 4-6 weeks after final selection</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Delivery Format</h3>
                      <ul className="ml-4 space-y-1">
                        <li>• High-resolution digital files via secure download</li>
                        <li>• Online gallery for viewing and selection</li>
                        <li>• Prints and albums as per package specifications</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Editing Policy</h3>
                      <p className="ml-4">
                        Basic editing includes color correction, exposure adjustment, and minor retouching. 
                        Extensive retouching or special effects may incur additional charges.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    While we strive to provide the highest quality photography services, please note:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• We are not liable for circumstances beyond our control (weather, equipment failure, etc.)</p>
                    <p>• Maximum liability is limited to the total amount paid for services</p>
                    <p>• We recommend clients obtain event insurance for important occasions</p>
                    <p>• We are not responsible for missed shots due to client delays or venue restrictions</p>
                    <p>• In case of photographer emergency, we will provide a substitute photographer or reschedule</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Neither party shall be liable for any failure or delay in performance under these terms 
                    if such failure or delay is due to circumstances beyond their reasonable control, including but not limited to:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• Natural disasters, extreme weather conditions</p>
                    <p>• War, terrorism, civil unrest</p>
                    <p>• Government actions or restrictions</p>
                    <p>• Pandemic or public health emergencies</p>
                    <p>• Transportation or communication failures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Any disputes arising from these terms shall be resolved as follows:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• First, through good faith negotiation between parties</p>
                    <p>• If unresolved, through mediation in Balikpapan</p>
                    <p>• Finally, through the courts of Balikpapan, Indonesia</p>
                    <p>• Indonesian law shall govern these terms and conditions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    For questions about these Terms and Conditions, please contact:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 space-y-2">
                    <p><strong>Business Name:</strong> ARI HATTA ILHAMI Photography</p>
                    <p><strong>Address:</strong> JL. MULAWARMAN RT 17 NO 23 MANGGAR BARU, Desa/Kelurahan Manggar Baru, Kec. Balikpapan Timur, Kota Balikpapan, Provinsi Kalimantan Timur 76117</p>
                    <p><strong>Phone:</strong> 0823-8246-6226</p>
                    <p><strong>Email:</strong> legal@arihatta-photography.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="ARI HATTA ILHAMI Logo" width={32} height={32} className="object-cover" />
              </div>
              <span className="font-bold">ARI HATTA ILHAMI</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-400 text-sm">
            © 2024 ARI HATTA ILHAMI Photography. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}