// pages/[id].tsx
import BannerNeu from "@/components/moviedetails/BannerNeu";
import Layout from "@/components/layout/Layout";
import { useRouter } from 'next/router';  // Import useRouter from next/router

const MoviesPage = () => {
  const router = useRouter();  // Initialize useRouter
  const { id } = router.query;  // Get the movie ID from the URL query

  return (
    <Layout>
      <BannerNeu movieId={id} />
    </Layout>
  );
};

export default MoviesPage;
