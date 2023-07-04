import StartingPageContent from '../components/starting-page/starting-page';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

function HomePage() {
  return <StartingPageContent />;
}
export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await getServerSession(req, res, authOptions),
    },
  };
}
export default HomePage;
