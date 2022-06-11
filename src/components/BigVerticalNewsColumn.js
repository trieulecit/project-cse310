import React from "react";
import { Link } from "react-router-dom";
import MediumNews from "../components/MediumNews";

export default function BigVerticalNewsColumn(props) {
    return (
        <div className="horizontal-news-group">
            {props.data
                .sort(function (a, b) {
                    var aa = a.publishedDate.split("/").reverse().join(),
                        bb = b.publishedDate.split("/").reverse().join();
                    return aa > bb ? -1 : aa < bb ? 1 : 0;
                })
                .map((data, i) => {
                    if (i !== 0 && i <= 4) {
                        return (
                            <Link to={`/newsdetail/${data.newsID}`} key={i}>
                                <MediumNews
                                    imageURL={data.imageURL}
                                    title={data.title}
                                    publishedDate={data.publishedDate}
                                    shortDescription={data.shortDescription}
                                />
                            </Link>
                        );
                    }
                })}
        </div>
    );
}
