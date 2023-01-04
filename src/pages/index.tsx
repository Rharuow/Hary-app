import dynamic from "next/dynamic";

const Information = dynamic(
  () => import("../components/domain/Home/Information"),
  { ssr: false }
);

const Apresentation = dynamic(
  () => import("../components/domain/Home/Apresentation"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="d-flex min-h-100vh">
      <Apresentation />
      <Information />
    </div>
  );
}
