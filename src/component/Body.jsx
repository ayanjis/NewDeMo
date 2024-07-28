import React from 'react'
import OurFeatured from './OurFeatured.jsx'
import OurPortfolio from './OurPortfolio.jsx'
import BlogPost from './BlogPost.jsx'

function Body() {
  return (
    <div className="BODY">
      <OurFeatured />
      <OurPortfolio />
      <BlogPost />
    </div>
  )
}

export default Body
