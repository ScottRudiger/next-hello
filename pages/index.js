// import Link from 'next/link';

// const Index = () => (
//   <div>
//     <Link href='/about'>
//       <button style={{fontSize: 20}}>Go to About Page</button>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// );

// export default Index;

// import Header from '../components/Header';

// export default () => (
//   <div>
//     <Header />
//     <p>Hello Next.js</p>
//   </div>
// );

import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);
