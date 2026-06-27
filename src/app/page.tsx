import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import {
  getBlogPosts,
  getFaqItems,
  getPricingPlans,
  getServices,
  getTestimonials,
} from "@/sanity/lib/fetch";

export default async function Home() {
  const [services, pricingPlans, faqItems, testimonials, blogPosts] =
    await Promise.all([
      getServices(),
      getPricingPlans(),
      getFaqItems(),
      getTestimonials(),
      getBlogPosts(),
    ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services services={services} />
        <Process />
        <WhyUs />
        <Testimonials testimonials={testimonials} />
        <Pricing plans={pricingPlans} />
        <FAQ items={faqItems} />
        <BlogPreview posts={blogPosts.slice(0, 3)} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
