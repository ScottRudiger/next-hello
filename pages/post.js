import Layout from '../components/Layout';

// export default props => (
//   <Layout>
//     <h1>{props.url.query.title}</h1>
//     <p>This is the blog post content</p>
//   </Layout>
// );

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content</p>
  </div>
);

export default props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
