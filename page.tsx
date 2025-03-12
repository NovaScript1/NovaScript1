"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Bot, GamepadIcon, Sparkles, MessageSquare, ShieldCheck, Menu, X } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-black border-2 border-green-500">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gg%20logo-jgmlPjeY74XY1SndmqQLYiwUvpuYA7.gif"
                alt="GG Store Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">
              GG <span className="text-green-500">STORE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-green-500 text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-white text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium">
              Contact
            </a>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-green-500 p-3">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-white p-3">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-white p-3">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white p-3">
                Contact
              </a>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full rounded-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-black border-4 border-green-500 shadow-lg shadow-green-500/50">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gg%20logo-jgmlPjeY74XY1SndmqQLYiwUvpuYA7.gif"
                alt="GG Store Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              GG <span className="text-green-500">STORE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Your Premium Source for Discord Bot Development and FiveM Programming Solutions
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-2 mb-12">
          <p className="text-green-500 text-sm font-medium uppercase tracking-wider">What We Offer</p>
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot className="w-10 h-10 text-green-500" />}
            title="Custom Discord Bots"
            description="Fully customized Discord bots tailored to your server's needs with advanced features and commands."
          />
          <ServiceCard
            icon={<GamepadIcon className="w-10 h-10 text-green-500" />}
            title="FiveM Development"
            description="Professional FiveM server development, custom scripts, and modifications for your roleplay server."
          />
          <ServiceCard
            icon={<Code2 className="w-10 h-10 text-green-500" />}
            title="Web Integration"
            description="Seamless web dashboards for managing your Discord bots and FiveM servers."
          />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 mb-12">
            <p className="text-green-500 text-sm font-medium uppercase tracking-wider">Who We Are</p>
            <h2 className="text-3xl font-bold text-white">About GG Store</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Your Trusted Development Partner</h3>
              <p className="text-gray-300">
                GG Store is a premium development studio specializing in Discord bot creation and FiveM programming.
                With years of experience and a passion for quality, we deliver custom solutions that exceed
                expectations.
              </p>
              <p className="text-gray-300">
                Our team of skilled developers works closely with clients to understand their unique needs and create
                tailored solutions that provide real value. We pride ourselves on our attention to detail, responsive
                support, and commitment to excellence.
              </p>
              <div className="pt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">Learn More</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard number="100+" label="Satisfied Clients" />
              <StatCard number="250+" label="Projects Completed" />
              <StatCard number="24/7" label="Support Available" />
              <StatCard number="5+" label="Years Experience" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 mb-12">
            <p className="text-green-500 text-sm font-medium uppercase tracking-wider">Our Advantages</p>
            <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-green-500" />}
              title="Custom Solutions"
              description="Tailored development to match your exact requirements"
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6 text-green-500" />}
              title="24/7 Support"
              description="Round-the-clock assistance for all our services"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
              title="Secure & Reliable"
              description="Built with security and performance in mind"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-2 mb-12">
          <p className="text-green-500 text-sm font-medium uppercase tracking-wider">Contact Us</p>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            Ready to take your Discord server or FiveM experience to the next level? Contact us today to discuss your
            project requirements and get a custom quote.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500/20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-black border-2 border-green-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gg%20logo-jgmlPjeY74XY1SndmqQLYiwUvpuYA7.gif"
                  alt="GG Store Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white">
                GG <span className="text-green-500">STORE</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#home" className="hover:text-green-500 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-green-500 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-green-500 transition-colors">
                About
              </a>
              <a href="#features" className="hover:text-green-500 transition-colors">
                Features
              </a>
              <a href="#contact" className="hover:text-green-500 transition-colors">
                Contact
              </a>
            </div>

            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} GG Store. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-black/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group h-full">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex justify-center p-4 bg-green-500/5 rounded-full w-20 h-20 mx-auto group-hover:bg-green-500/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-green-500 transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 border border-transparent hover:border-green-500/20 rounded-xl transition-all duration-300 hover:bg-green-500/5">
      <div className="p-3 bg-green-500/10 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function StatCard({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div className="bg-black/40 border border-green-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
      <span className="text-3xl font-bold text-green-500">{number}</span>
      <span className="text-gray-300 text-sm mt-2">{label}</span>
    </div>
  )
}

