import { Fragment } from "react";
import { Route, useParams } from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import Comments from "../components/comments/Comments";
import { Link, useRouteMatch } from "react-router-dom";

const DUMMY_QUOTES = [
  { id: "q1", author: "Nobody", text: "Learning react is fun" },
  { id: "q2", author: "Sperthix", text: "Learning react is ez" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <Link
          className="centered btn--flat"
          to={`${match.url}/comments`}
        >
          Open comment section
        </Link>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
