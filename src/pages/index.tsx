import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("../components/domain/Home"), {
  ssr: false,
});

export default function Home() {
  return <HomeContent />;
}
