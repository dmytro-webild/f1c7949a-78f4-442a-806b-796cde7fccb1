"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "FAQ", id: "faq" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="SPARK EDITS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      title="Edit Like A Pro, Spark Your Vision."
      description="The ultimate AI-powered video editing platform for creators. Subtitles, translation, and animation at your fingertips."
      buttons={[{ text: "Start Free Trial", href: "#pricing" }]}
      imageSrc="http://img.b2bpic.net/free-vector/abstract-future-interface-icon-set_1284-34723.jpg"
      mediaAnimation="slide-up"
      testimonials={[
        { name: "Alex R.", handle: "@alexcreative", testimonial: "This platform transformed my workflow.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-blue-jacket_23-2149020771.jpg" },
        { name: "Sam L.", handle: "@samvlogs", testimonial: "AI subtitles are incredibly accurate.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-woman-suit-standing-stairs-outside_23-2148053636.jpg" },
        { name: "Jordan P.", handle: "@jordy_edit", testimonial: "Perfect for global content scaling.", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-blue-jacket_23-2149020776.jpg" },
        { name: "Taylor M.", handle: "@tay_media", testimonial: "The animation tools are professional grade.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-spotlight-shines-young-man-he-shows-gesture_8353-11589.jpg" },
        { name: "Casey K.", handle: "@casey_studio", testimonial: "Saves me hours of manual labor daily.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/person-working-animation-porject_23-2149269932.jpg" },
      ]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/side-view-woman-working-as-photographer_23-2150506073.jpg", alt: "Side view woman working as a photographer" },
        { src: "http://img.b2bpic.net/free-photo/man-filming-with-professional-camera_23-2149066314.jpg", alt: "Man filming with a professional camera" },
        { src: "http://img.b2bpic.net/free-photo/portrait-happy-photo-editor-browsing-through-images_482257-121853.jpg", alt: "Portrait of happy photo editor browsing through images" },
        { src: "http://img.b2bpic.net/free-photo/business-owner-working-their-strategy_23-2149241320.jpg", alt: "Business owner working on their strategy" },
        { src: "http://img.b2bpic.net/free-photo/sideways-photographer-woman-looking-her-cameras_23-2148424435.jpg", alt: "Sideways photographer woman looking at her cameras" },
      ]}
      marqueeItems={[
        { type: "text", text: "AI Powered" },
        { type: "text", text: "Multi-Language" },
        { type: "text", text: "Instant Animation" },
        { type: "text", text: "Studio Quality" },
        { type: "text", text: "Global Reach" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Cutting Edge Tools"
      description="Unlock advanced features designed to streamline your video workflow."
      accordionItems={[
        { id: "a1", title: "AI-Driven Subtitles", content: "Automatically generate and animate stunning subtitles for your videos in any language." },
        { id: "a2", title: "Multi-Language Support", content: "Translate and localize content seamlessly for English, Arabic, Russian, Chinese, and Spanish audiences." },
        { id: "a3", title: "Real-Time Animation", content: "Professional-grade animation tools that make your video stand out instantly." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/vimeo-icon-line-connection-circuit-board_1379-895.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <TextAbout
      useInvertedBackground={true}
      title="Global Content Editing Simplified"
      buttons={[{ text: "Explore Tools", href: "#features" }]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Entry", price: "$1/mo", subtitle: "Perfect for starters", features: ["Basic Subtitles", "2 Languages", "7-Day Free Trial"] },
        { id: "p2", badge: "Pro", price: "$5/mo", subtitle: "Best for content pros", features: ["All AI Tools", "5+ Languages", "Unlimited Animation", "7-Day Free Trial"] },
      ]}
      title="Simple Pricing Plans"
      description="Choose the spark you need. Get a free week-long trailer on every plan."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Do you support all languages?", content: "We support English, Arabic, Russian, Chinese, and Spanish, with more coming soon!" },
        { id: "q2", title: "Is there a free trial?", content: "Yes, every plan comes with a one-week free trailer period." },
        { id: "q3", title: "Can I cancel anytime?", content: "Yes, subscriptions can be managed and cancelled from your dashboard." },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about Spark Edits."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Alice M.", date: "2023", title: "Creator", quote: "Incredible translation tools!", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/business-woman-with-glasses-smiling_23-2148053687.jpg", imageSrc: "http://img.b2bpic.net/free-vector/abstract-future-interface-icon-set_1284-34723.jpg" },
        { id: "t2", name: "Bob K.", date: "2023", title: "Editor", quote: "Spark Edits saved me hours.", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/videographer-smiling-camera-working-computer-editing-video-footage-audio-app-sitting-mo_482257-2649.jpg", imageSrc: "http://img.b2bpic.net/free-photo/vimeo-icon-line-connection-circuit-board_1379-895.jpg" },
        { id: "t3", name: "Claire R.", date: "2023", title: "Vlogger", quote: "The subtitles look amazing.", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/traveler-female-holds-digital-photo-camera-takeaway-coffee-grey-background_613910-9804.jpg", imageSrc: "http://img.b2bpic.net/free-vector/stylish-blue-map-background-population-day_23-2147556698.jpg" },
        { id: "t4", name: "David L.", date: "2023", title: "Streamer", quote: "Best investment ever.", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-stylish-pretty-young-woman-look-professional-cross-hands-chest-smiling-confident-camera-wear-glasses-standing-near-reception-office-hall-discuss-business_197531-22165.jpg", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-digital-art_23-2151197857.jpg" },
        { id: "t5", name: "Emma W.", date: "2023", title: "Marketer", quote: "Absolutely essential tool.", tag: "Pro", avatarSrc: "http://img.b2bpic.net/free-photo/old-person-browsing-internet-find-artistic-inspiration-laptop-computer-using-technology-draw-artwork-sketch-drawing-artwork-masterpiece-with-creative-skills-artistic-tools_482257-45921.jpg", imageSrc: "http://img.b2bpic.net/free-vector/professional-infographic-futuristic-design_23-2148459160.jpg" },
      ]}
      title="Creator Testimonials"
      description="Join thousands of creators using Spark Edits daily."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      tag="Support"
      title="Get Started Now"
      description="Ready to take your content to the next level? Sign up for our latest updates."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Product",          items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
        },
        {
          title: "Company",          items: [{ label: "About", href: "#" }, { label: "Contact", href: "#contact" }],
        },
      ]}
      bottomLeftText="© 2023 SPARK EDITS"
      bottomRightText="All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
