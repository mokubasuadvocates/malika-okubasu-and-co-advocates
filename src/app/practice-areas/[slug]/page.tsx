import { PracticeAreaDetail } from "../../pages/PracticeAreaDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <PracticeAreaDetail slug={params.slug} />;
}
