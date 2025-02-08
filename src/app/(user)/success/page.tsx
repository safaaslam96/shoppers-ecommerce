import SuccessContainer from "@/components/SuccessContainer";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise< {
    sessionId: string | null;
  }>
}

const SuccessPage = async ({ searchParams }: Props) => {
  const id = (await searchParams)?.sessionId;

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
