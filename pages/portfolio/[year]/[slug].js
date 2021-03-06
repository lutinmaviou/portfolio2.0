import Head from 'next/head';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../../utils/mongodb';
import Toto from '../../../components/ProjectCard/ProjectCard';

const ProjectCard = ({ property }) => {
  const router = useRouter();
  const year = router.query.year;
  const title = property.title;
  return (
    <>
      <Head>
        <title>
          {title} | {year} | Bertrand Bourion
        </title>
      </Head>
      <Toto property={property} />
    </>
  );
};

export default ProjectCard;

/* export const getStaticPaths = async () => {
  const { db } = await connectToDatabase();

  const data = await db.collection('projects').find({}).toArray();
  const properties = JSON.parse(JSON.stringify(data));

  const paths = properties.map((property) => ({
    params: { slug: property.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { db } = await connectToDatabase();
  const data = await db.collection('projects').findOne({
    slug: params.slug,
  });
  return {
    props: { property: JSON.parse(JSON.stringify(data)) },
    revalidate: 100,
  };
}; */

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase();
  const data = await db.collection('projects').findOne({
    slug: params.slug,
  });
  return {
    props: { property: JSON.parse(JSON.stringify(data)) },
  };
}
