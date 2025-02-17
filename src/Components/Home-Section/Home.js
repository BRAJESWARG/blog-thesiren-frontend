import React, { useEffect, useState } from 'react';
import Intro from "./Intro/Intro"
import TheLatest from "./The Latest/TheLatest"
import LatestArticles from "./Latest Articles/LatestArticles"
import LatestStories from "./Latest Stories/LatestStories"
import axios from 'axios';
import '../../App.css';


function Home() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        // axios.get(`https://fathomless-wildwood-68036.herokuapp.com/api/v1/TheSiren`).then(
        axios.get(`http://localhost:8040/api/v1/TheSiren`).then(
            data => setBlogs(data.data)
        )

    }, [])

    return (

        <div>
            <Intro blogs={blogs} />
            <TheLatest blogs={blogs} />
            <LatestArticles blogs={blogs} />
            <LatestStories blogs={blogs} />
        </div>

    );
};

export default Home;