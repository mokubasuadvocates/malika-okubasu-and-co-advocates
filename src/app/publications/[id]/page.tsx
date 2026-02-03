import { BlogDetail } from '../../pages/BlogDetail';

export default function Page({ params }: { params: { id: string } }) {
  return <BlogDetail id={params.id} />;
}
