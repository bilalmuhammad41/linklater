import HeroSection from "@/components/modules/linklater-form.tsx/hero";
import Step1Section from "@/components/modules/linklater-form.tsx/step1";
import Step2Section from "@/components/modules/linklater-form.tsx/step2";
import Step3Section from "@/components/modules/linklater-form.tsx/step3";

export default function Home() {
  return (
    <section className="flex flex-col items-center bg-white justify-center ">
      <HeroSection />
      <div className="flex flex-col w-full md:pt-[300px] sm:pt-[250px] pt-[150px] gap-20 items-center bg-linear-pink-gradient">
        <Step1Section />
        <Step2Section />
        <Step3Section />
      </div>
    </section>
  );
}
