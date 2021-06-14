/* news.js is served - ourdomain.com/news/[anyting else] 
 - to extracy dynamic param values use router hook provided from nextRouter
*/
import { useRouter } from 'next/router';

function Detail() {
  const router = useRouter();

  // this holds the concrete value for the dynamic segments when you visited
  const newsId = router.query.newsId; 

  // sed a request to the backend API 
  // to fetch the news item with newsId
  
  return <h1>The Detail</h1>
}
  
export default Detail;
  