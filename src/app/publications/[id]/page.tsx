import { BlogDetail } from "@/components/views/BlogDetail";

export default function Page({ params }: { params: { id: string } }) {
  return <BlogDetail id={params.id} />;
}
