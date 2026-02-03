import { TeamProfile } from '../../pages/TeamProfile';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <TeamProfile id={params.id} />;
}
