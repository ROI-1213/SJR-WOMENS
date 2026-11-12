import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Nirf = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="internal-page-hero">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">NIRF</h1>
            <p className="mt-2">National Institutional Ranking Framework</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground text-lg">
            NIRF content and rankings will be updated here soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nirf;
