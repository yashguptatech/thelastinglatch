import AboutCompany from "@/components/AboutCompany";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import data from "@/data/landing-page.json";
export default function Home() {
  return (
    <main>
      <HomePage homePage={data.homePage} />
      <AboutCompany about={data.aboutCompany} />
      <Services services={data.services} />
    </main>
  );
}
