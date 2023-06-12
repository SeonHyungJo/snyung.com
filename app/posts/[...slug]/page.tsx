import { getPost } from '@/app/@api/getPost';

import Tags from '../../@components/Tags';
import ContentTitle from '../../@components/ContentTitle';
import Giscus from '../../@components/Giscus';
import IdCard from '../../@components/IdCard';
import { MdxContent } from '../../@components/MdxContent';


export default async function PostsMainPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.map((param) => decodeURIComponent(param))
  const { frontmatter, serialized } = await getPost(`posts/${path.join('/')}.mdx`);

  return (
    <section className="w-full max-w-2xl mx-auto">
      <ContentTitle title={frontmatter.title} date={frontmatter.date} readingMinutes={frontmatter.readingMinutes} />
      <MdxContent serialized={serialized} />
      
      <section className='flex flex-row items-center justify-start w-full gap-2 py-6'>
        <Tags tags={frontmatter.tags} />
      </section>
      
      <hr className={'border-1 w-full border-slate-300 my-6'} />
      
      <IdCard />
      <Giscus />
    </section >
  );
}