import DetailCard from "@/components/detail-card";
import PersonalCard from "@/components/personal-card";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20 flex flex-row">
      <PersonalCard />
      <DetailCard />
    </div>
  );
}
