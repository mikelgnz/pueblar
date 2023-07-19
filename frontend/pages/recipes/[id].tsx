import { Title } from "@/components/core/Title";
import { NewsArticleCard } from "@/components/core/NewsArticleCard";
import { backendFetcher } from "@/lib/api/api_main";
import { useRouter } from "next/router";
import useSWR from "swr";

const NewsMorePage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: recipe } = useSWR(`/news/get/${id}`, backendFetcher);

  return (
    <section tw="flex flex-col gap-4 justify-center items-center">
      {new && (
        <>
          <Title>{news.name}</Title>
          <div tw="flex justify-center">
            <RecipesCard recipe={recipe} details />
          </div>
        </>
      )}
    </section>
  );
};

export default RecipeDetailsPage;
