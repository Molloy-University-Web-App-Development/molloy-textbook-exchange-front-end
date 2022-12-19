import React from "react";
import BookList from "../components/BookList";

import "./Discover.css";
const Discover = () => {
  const books = [
    {
      title: "The Great Gatsby",
      isbn: "9781443456657",
      author: "F. Scott Fitzgerald",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356107649l/6519719.jpg",
      category: "Fiction",
    },
    {
      title: "Pride and Prejudice",
      isbn: "9781443456534",
      author: "Jane Austen",
      image:
        "http://prodimage.images-bn.com/pimages/9781499369748_p0_v3_s1200x630.jpg",
      category: "Fiction",
    },
    {
      title: "To Kill a Mockingbird",
      isbn: "9781443456541",
      author: "Harper Lee",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      category: "Fiction",
    },
    {
      title: "The Catcher in the Rye",
      isbn: "9781443456565",
      author: "J.D. Salinger",
      image:
        "https://www.pluggedin.com/wp-content/uploads/2020/01/catcher-in-the-rye-cover-image.jpeg",
      category: "Fiction",
    },
    {
      title: "The Alchemist",
      isbn: "9781443456589",
      author: "Paulo Coelho",
      image:
        "https://www.beachhouserehabcenter.com/wp-content/uploads/2017/10/the-alchemist-paulo-coelho.jpg",
      category: "Fiction",
    },
    {
      title: "The Bell Jar",
      isbn: "9781443456558",
      author: "Sylvia Plath",
      image:
        "https://1.bp.blogspot.com/-F4ESmOWfVH0/YFXtloVfScI/AAAAAAAAPyc/Nyl2qFI7VHYMKU25CscpHGcfJxqSAWzxwCLcBGAsYHQ/s2048/The_Bell_Jar_Arcturus_2015.jpg",
      category: "Fiction",
    },
    {
      title: "One Hundred Years of Solitude",
      isbn: "9781443456572",
      author: "Gabriel García Márquez",
      image: "https://pictures.abebooks.com/inventory/22855211443.jpg",
      category: "Fiction",
    },
  ];
  return (
    <main>
      <BookList books={books} />
    </main>
  );
};

export default Discover;
