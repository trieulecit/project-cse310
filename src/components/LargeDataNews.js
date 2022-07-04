import React from "react";
import {Link} from 'react-router-dom';
import LargeNews from '../components/LargeNews';

export default function LargeDataNews(props) {
    return props.data
        .sort(function (a, b) {
            var aa = a.publishedDate.split("/").reverse().join(),
                bb = b.publishedDate.split("/").reverse().join();
            return aa > bb ? -1 : aa < bb ? 1 : 0;
        })
        .map((data, i) => {
            if (i === 0) {
                return (
                    <Link to={`/news-detail/${data.newsID}`} key={i}>
                        <LargeNews
                            imageURL={data.imageURL}
                            title={data.title}
                            publishedDate={data.publishedDate}
                            shortDescription={data.shortDescription}
                        />
                    </Link>
                );
            }
        });
}
