import DetailCard from "@/components/detail-card";
import PersonalCard from "@/components/personal-card";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 flex xl:flex-row flex-col xl:max-w-[1800px] m-auto place-self-center overflow-x-hidden">
      <PersonalCard />
      <DetailCard />
    </div>
  );
}
