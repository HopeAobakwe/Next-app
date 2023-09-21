const DUMMY_POSTS = [
    {title:'GETTING-STARTED-WITH-NEXT-JS',
     image: 'getting-started-with-nextjs.png', 
     excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
     date: '2022-02-10',
      slug: 'GETTING-STARTED-WITH-NEXT-JS' 
    },

    {title:'GETTING-STARTED-WITH-NEXT-JS',
    image: 'getting-started-with-nextjs.png', 
    excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
    date: '2022-02-10',
     slug: 'GETTING-STARTED-WITH-NEXT-JS2' 
   },

   {
    title:'GETTING-STARTED-WITH-NEXT-JS',
   image: 'getting-started-with-nextjs.png', 
   excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
   date: '2022-02-10',
    slug: 'GETTING-STARTED-WITH-NEXT-JS3' 
},

{title:'GETTING-STARTED-WITH-NEXT-JS',
image: 'getting-started-with-nextjs.png', 
excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
date: '2022-02-10',
 slug: 'GETTING-STARTED-WITH-NEXT-JS4' 
},

];




function AllPostsPage(){


return <AllPosts posts={DUMMY_POSTS}/>

}

export default AllPostsPage;