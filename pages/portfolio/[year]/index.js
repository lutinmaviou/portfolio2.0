import Head from 'next/head';
import { connectToDatabase } from '../../../utils/mongodb';
import PortfolioPage from '../../../components/PortfolioPage/Portfo3';
import { useRouter } from 'next/router';

export default function Portfolio({ properties }) {
  const router = useRouter();
  const year = router.query.year;
  return (
    <>
      <Head>
        <title>Projets {year} | Bertrand Bourion</title>
      </Head>
      <div className="portfolio-container">
        <PortfolioPage props={properties} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('projects').find().toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}
