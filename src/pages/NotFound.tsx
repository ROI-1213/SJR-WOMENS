import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound = () => (
  <Layout>
    <section className="internal-page-hero px-4 text-center">
      <h1 className="font-bold">Page not found</h1>
    </section>
    <div className="px-4 py-12 text-center">
      <Link to="/" className="font-semibold text-[#177249] underline underline-offset-4">
        Return to the homepage
      </Link>
    </div>
  </Layout>
);

export default NotFound;
