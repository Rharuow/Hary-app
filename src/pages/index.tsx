import Apresentation from "../components/domain/Home/Apresentation";
import Information from "../components/domain/Home/Information";

export default function Home() {
  return (
    <div className="d-flex min-h-100vh">
      <Apresentation />
      <Information />
    </div>
  );
}
