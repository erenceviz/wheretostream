import DetailsPage from "@/components/moviedetails/DetailsPage";
import Layout from "@/components/layout/Layout";
import { useRouter } from 'next/router';  // Import useRouter from next/router

const TvPage = (): React.JSX.Element => {

  const router = useRouter();  // Initialize useRouter
  console.log("Router", router.query)
  const { id } = router.query;  // Get the movie ID from the URL query

  return (
    <Layout>
      <DetailsPage itemId={id} />
    </Layout>
  );
};


export default TvPage;
