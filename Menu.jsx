import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      desc: "lorem at vero vel aug Lorem ipsum dolor sit amet, consectetur adipiscing slore lorem, sedlorem lorem at vero vel augLorem ipsum dolor sit amet, consectetur adipiscing slore loremsedlorem lorem at vero vel aug",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "lorem at vero vel aug Lorem ipsum dolor sit amet, consectetur adipiscing slore lorem, sedlorem lorem at vero vel augLorem ipsum dolor sit amet, consectetur adipiscing slore loremsedlorem lorem at vero vel aug",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "lorem at vero vel aug Lorem ipsum dolor sit amet, consectetur adipiscing slore lorem, sedlorem lorem at vero vel augLorem ipsum dolor sit amet, consectetur adipiscing slore loremsedlorem lorem at vero vel aug",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit ",
      desc: "lorem at vero vel aug Lorem ipsum dolor sit amet, consectetur adipiscing slore lorem, sedlorem lorem at vero vel augLorem ipsum dolor sit amet, consectetur adipiscing slore loremsedlorem lorem at vero vel aug",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
