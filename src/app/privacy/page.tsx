import { Card, CardContent } from '@/components/ui/card'
import { Camera, ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    At <span className="font-semibold text-purple-400">ARI HATTA ILHAMI Photography</span>, we collect information to provide better services to our clients. The types of information we collect include:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Personal Information:</strong> Name, email address, phone number, and physical address</p>
                    <p>• <strong>Photography Details:</strong> Event types, dates, locations, and specific photography requirements</p>
                    <p>• <strong>Payment Information:</strong> Billing details and payment history (processed securely)</p>
                    <p>• <strong>Communication Records:</strong> Emails, messages, and consultation notes</p>
                    <p>• <strong>Media Content:</strong> Photographs and videos created for clients</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Camera className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use the collected information for various purposes to provide and maintain our photography services:</p>
                  <div className="ml-4 space-y-2">
                    <p>• To schedule and manage photography sessions</p>
                    <p>• To communicate with clients about their projects</p>
                    <p>• To process payments and manage billing</p>
                    <p>• To deliver finished photography products</p>
                    <p>• To improve our services and customer experience</p>
                    <p>• To showcase our portfolio (with explicit client consent)</p>
                    <p>• To comply with legal obligations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Data Protection & Security</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Secure Storage:</strong> All client data is stored on secure, encrypted servers</p>
                    <p>• <strong>Access Control:</strong> Only authorized personnel can access client information</p>
                    <p>• <strong>Regular Backups:</strong> Your photos and data are regularly backed up</p>
                    <p>• <strong>Secure Communication:</strong> We use encrypted channels for sensitive communications</p>
                    <p>• <strong>Physical Security:</strong> Hard drives and physical media are stored securely</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Data Retention Policy</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We retain client information for different periods depending on the nature of the data:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Photography Files:</strong> Original photos are retained for 2 years from delivery date</p>
                    <p>• <strong>Client Information:</strong> Contact and project details are retained for 7 years</p>
                    <p>• <strong>Financial Records:</strong> Payment and billing records are retained for 7 years</p>
                    <p>• <strong>Portfolio Materials:</strong> Samples used in portfolio are retained indefinitely with consent</p>
                  </div>
                  <p className="mt-4">
                    Clients may request deletion of their data at any time, subject to legal and contractual obligations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>As our client, you have the following rights regarding your personal information:</p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Right to Access:</strong> Request copies of your personal information</p>
                    <p>• <strong>Right to Correct:</strong> Request correction of inaccurate information</p>
                    <p>• <strong>Right to Delete:</strong> Request deletion of your personal information</p>
                    <p>• <strong>Right to Object:</strong> Object to processing of your information</p>
                    <p>• <strong>Right to Portability:</strong> Request transfer of your data to another service</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may share your information with trusted third-party service providers to facilitate our services:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p>• <strong>Payment Processors:</strong> For secure payment processing</p>
                    <p>• <strong>Cloud Storage:</strong> For secure photo backup and delivery</p>
                    <p>• <strong>Printing Labs:</strong> For physical photo production</p>
                    <p>• <strong>Website Hosting:</strong> For online gallery services</p>
                  </div>
                  <p className="mt-4">
                    All third parties are contractually obligated to protect your information and are not permitted to use it for other purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your information, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 space-y-2">
                    <p><strong>Business Name:</strong> ARI HATTA ILHAMI Photography</p>
                    <p><strong>Address:</strong> JL. MULAWARMAN RT 17 NO 23 MANGGAR BARU, Desa/Kelurahan Manggar Baru, Kec. Balikpapan Timur, Kota Balikpapan, Provinsi Kalimantan Timur 76117</p>
                    <p><strong>Phone:</strong> 0823-8246-6226</p>
                    <p><strong>Email:</strong> privacy@arihatta-photography.com</p>
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
              <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link>
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