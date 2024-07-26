import { Book } from "../../models/book.model";
import BookItem from "./BookItem";
import { styled } from "styled-components";

const dumyBook: Book = {
  id: 1,
  title: "Dummy",
  img: 5,
  category_id: 1,
  form: "paperBack",
  isbn: "Dummy Isbn",
  summary: "summary",
  detail: "detail",
  author: "author",
  pages: 100,
  contents: "contents",
  price: 100000,
  likes: 3,
  pubDate: "2023-01-01",
};

export default function BooksList() {
  return (
    <BooksListStyle>
      <BookItem book={dumyBook} />
    </BooksListStyle>
  );
}

const BooksListStyle = styled.div``;
