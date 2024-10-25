// app/unified-communication-providers/page.jsx
import dynamic from 'next/dynamic';

const BlogPostEditor = dynamic(() => import('../../../components/Blog/Admin-Blog-Components/BlogPostEditorComponent'), { ssr: false });

const Page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <BlogPostEditor />
    </div>
  );
};

export default Page;
