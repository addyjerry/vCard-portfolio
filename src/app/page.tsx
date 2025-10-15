import DetailCard from "@/components/detail-card";
import PersonalCard from "@/components/personal-card";

export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen p-3 gap-5  flex xl:flex-row flex-col xl:max-w-[1800px]  place-self-center ">
      <PersonalCard />
      <DetailCard />
    </div>
  );
}
