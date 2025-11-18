import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import FeatureGrid from "@/components/feature-grid"
import OutputGallery from "@/components/output-gallery"
import ComparisonSection from "@/components/comparison-section"
import FAQSection from "@/components/faq-section"
import PricingSection from "@/components/pricing-section"
import ClosingSection from "@/components/closing-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <HowItWorks />
        <FeatureGrid />
        <OutputGallery />
        <ComparisonSection />
        <FAQSection />
        <PricingSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}
