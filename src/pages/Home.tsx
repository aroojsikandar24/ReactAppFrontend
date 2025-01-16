import React, { useEffect, useState } from 'react';
import IntroPost from '../components/IntroPost';
import Header from '../components/Header';
import Search from '../components/Search';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import GlobalApi from '../services/GlobalApi';

function Home() {
    const [post,setPost] = useState([]);
    const [orgPost,setOrgPost] = useState([]);

    useEffect(() => {
        getPost();
    }, [])
  
    const getPost = () => {
        GlobalApi.getPost.then(resp => {
            const result = resp.data.data.map((item: any) => ({
                id: item.id,
                title: item.attributes.title,
                desc: item.attributes.description,
                tag: item.attributes.tag,
                coverImage: item.attributes.coverImage.data.attributes.url,
            }));

            setPost(result);
            setOrgPost(result);
        })
    }

    const filterPost=(tag: string)=>{
        if(tag=='All')
        {
          setPost(orgPost);
          return ;
        }
        const result=orgPost.filter((item: any) => item.tag == tag);
        setPost(result);
    }

    return(
        <div>
            {/* Header */}
            <Header/>

            {/* Search */}
            <Search selectedTag={(tag: string) => filterPost(tag)}/>

            {/* IntroPost */}
            {post.length > 0 ? <IntroPost post={post[0]}/> : null}

            {/* Blogs */}
            <Blogs/>

            {/* Footer */}
            <Footer/>
        </div>
    )      
}

export default Home