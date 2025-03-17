import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Store } from "@/components/sections/store";
import { Blog } from "@/components/sections/blog";
import { Community } from "@/components/sections/community";
import { PetCare } from "@/components/sections/pet-care";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Store />
      <Blog />
      <Community />
      <PetCare />
    </main>
  );
}
