import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { fetchDatafromApi } from "../../utils/api";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResult = () => {
  const { query } = useParams();
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDatafromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        //
        setData(res);
        setPageNum((prev) => {
          return prev + 1;
        });
        setLoading(false);
      }
    );
  };
  // console.log(pageNum)
  console.log(data);

  const fetchNextPageData = () => {
    fetchDatafromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res?.results],
          });
        } else {
          setData(res);
        }

        setPageNum((prev) => prev + 1);
      }
    );
  };

  // console.log("After concatinating the data", data);

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? ( 
            <>
              <div className="pageTitle">
                {`  Search  ${
                  data?.total_results > 1 ? "results" : "result"
                } of ${query}`}
              </div>
              {/* inside infiniteScroll */}

              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;

                  return (
                    <MovieCard data={item} key={index} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry,Results not found !</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
