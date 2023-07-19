import { NewsArticleCard } from "./NewsArticleCard";
import { usenewsList } from "./useNewsList";

export const NewsList = () => {
  const list = usenewsList();

  return (
    <div tw="flex gap-4 flex-wrap w-full">
      {!list && (
       <p>Loading..</p> 
      )}
      {list &&
        list.map((news) => {
          return <NewsArticleCard news={news} key={news._id} />;
        })}
    </div>
  );
}
