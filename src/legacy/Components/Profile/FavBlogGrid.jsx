import React from 'react'

const FavBlogGrid = ({favouriteBlog}) => {
  return (
    <div className="mr-4 ml-4 lg:ml-24 lg:mr-24 grid grid-cols-2 md:grid-cols-3 gap-4">
    {favouriteBlog?.map((item) => (
      <div
        key={item.id}
        className="relative hover:scale-105 transition-transform duration-300"
      >
        <a href={`/detail/${item.id}`} className="block">
          <img
            className="w-full h-44 lg:h-96 object-cover rounded-lg"
            src={item.image}
            alt=""
          />
        </a>
      </div>
    ))}
  </div>
  )
}

export default FavBlogGrid