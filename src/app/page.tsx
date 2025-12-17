'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Menu, X, Camera, Mail, Phone, MapPin, Instagram, Facebook, ChevronRight, Star, Heart, Sparkles, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const heroImages = [
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080'
  ]

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special moments with artistic and emotional wedding photography',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Portrait Photography',
      description: 'Professional portraits that showcase your personality and style',
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: 'Event Photography',
      description: 'Document your corporate events, parties, and special occasions',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'Commercial Photography',
      description: 'High-quality product and business photography for your brand',
      icon: <Star className="w-8 h-8" />
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & John',
      text: 'ARI HATTA ILHAMI captured our wedding day perfectly. Every photo tells a story and the quality is exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Professional, creative, and reliable. Our corporate event photos exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      text: 'The portrait session was amazing! ARI made me feel comfortable and the results were stunning.',
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link>
              <Link href="#services" className="hover:text-purple-400 transition-colors">Services</Link>
              <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 hover:text-purple-400 transition-colors">Home</Link>
              <Link href="#portfolio" className="block px-3 py-2 hover:text-purple-400 transition-colors">Portfolio</Link>
              <Link href="#services" className="block px-3 py-2 hover:text-purple-400 transition-colors">Services</Link>
              <Link href="#about" className="block px-3 py-2 hover:text-purple-400 transition-colors">About</Link>
              <Link href="#contact" className="block px-3 py-2 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              ARI HATTA ILHAMI
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-300">
            Professional Photography & Visual Storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              View Portfolio
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              Book a Session
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 rotate-90 text-white/50" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg">
              Professional photography services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About <span className="text-white">ARI HATTA ILHAMI</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Welcome to my world of visual storytelling! With years of experience in professional photography, 
                I specialize in capturing moments that tell your unique story. Based in Balikpapan, I bring 
                creativity, technical expertise, and passion to every project.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Whether it's your wedding day, corporate event, or personal portrait session, I work closely 
                with each client to understand their vision and deliver stunning images that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="text-3xl font-bold text-pink-400">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Camera className="w-24 h-24 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-300 text-lg">
              What our clients say about our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-purple-400">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to capture your special moments? Let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span>0823-8246-6226</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span>contact@arihatta-photography.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span>JL. MULAWARMAN RT 17 NO 23 MANGGAR BARU, Balikpapan Timur, Kota Balikpapan, Kalimantan Timur 76117</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                    required
                  />
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                  >
                    <option value="">Select Service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Photography</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                    required
                  />
                  
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you for your message! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
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