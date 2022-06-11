import React from "react";
import { Link } from "react-router-dom";
import SmallNews from "./SmallNews";

export default function SmallVerticalNewsColumn(props) {
    return (
        <div className="vertical-news-group overflow-auto scrollbar scrollbar-primary">
            {props.data
                .sort((a, b) => {
                    return b.view - a.view;
                })
                .map((data, i) => (
                    <Link to={`/newsdetail/${data.newsID}`} key={i}>
                        <SmallNews
                            imageURL={data.imageURL}
                            title={data.title}
                            publishedDate={data.publishedDate}
                            shortDescription={data.shortDescription}
                            view={data.view}
                        />
                    </Link>
                ))}
        </div>
    );
}
