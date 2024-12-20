// pages/[id].tsx
import DetailsPage from "@/components/moviedetails/DetailsPage";
import Layout from "@/components/layout/Layout";
import { useRouter } from 'next/router';  // Import useRouter from next/router

const MoviesPage = () => {
  const router = useRouter();  // Initialize useRouter
  const { id } = router.query;  // Get the movie ID from the URL query

  return (
    <Layout>
      <DetailsPage movieId={id} />
    </Layout>
  );
};

export default MoviesPage;
