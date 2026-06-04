import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Goals from "../components/Goals";
import Actions from "../components/Actions";
import CTABanner from "../components/CTABanner";
import FeaturedStories from "../components/FeaturedStories";
import CTACards from "../components/CTACards";
import Newsletter from "../components/Newsletter";
import Stats from "../components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <FeaturedStories />
      <Goals />
      <Actions />
      <CTABanner />
      <CTACards />
      <Stats />
      <Newsletter />
    </>
  );
}
