/* news.js is served - ourdomain.com/news */
import { Fragment } from "react";
import {Link} from 'next';

function News() {

    /**   this ways of linking make it difficult to keep the state by making 
     *    <li><a href="/news/newsjs-is-a-great-framework">NextJS Is a Great Framework</a></li>
          <li><a href="/news/newsjs-is-a-great-framework">Something else</a></li>
          by using Link than a - allows to broswer default sending a request. - so state is kept. 
     */
    return (
    <Fragment>
      <h1>The News</h1>
      <ul>
          <li><Link href="/news/newsjs-is-a-great-framework">NextJS Is a Great Framework</Link></li>
          <li><Link href="/news/newsjs-is-a-great-framework">Something else</Link></li>
      </ul>
    </Fragment>
  );
}

export default News;
