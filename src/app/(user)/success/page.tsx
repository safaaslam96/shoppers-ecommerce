import SuccessContainer from "@/components/SuccessContainer";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    sessionId: string | null;
  };
}

const SuccessPage = ({ searchParams }: Props) => {
  const id = searchParams?.sessionId;

  if (!id) {
    redirect("/");
  }

  return (
    <div>
      <SuccessContainer id={id} />
    </div>
  );
};

export default SuccessPage;
