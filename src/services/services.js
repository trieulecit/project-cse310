// import axios from 'axios';
export const getPost = () => {
    var posts = [
        {
            name: "Post",
        },
        {
            name: "Post",
        },
    ];
    var myPromise = new Promise((resolve, reject) => {
        resolve(posts);
    });
    return myPromise;
};
