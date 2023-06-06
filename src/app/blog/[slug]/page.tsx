import { getPostBySlug } from "@/lib/mdx";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title, description: meta.description };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-24">
      <div className="font-medium; container prose font-extrabold text-white prose-h1:bg-gradient-to-r prose-h1:from-[#FFC94B] prose-h1:via-[#f9a66c] prose-h1:to-[#F17A7E] prose-h1:bg-clip-text prose-h1:text-transparent  prose-h2:bg-gradient-to-r prose-h2:from-[#FFC94B] prose-h2:via-[#f9a66c] prose-h2:to-[#F17A7E] prose-h2:bg-clip-text prose-h2:text-transparent prose-h3:font-bold prose-h3:text-white prose-p:mb-0 prose-p:mt-4 prose-p:py-4 prose-p:text-lg prose-p:text-white">
        {content}
      </div>
    </section>
  );
};

export default Page;
