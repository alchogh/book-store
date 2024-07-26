import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";

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

describe("BookItem", () => {
  it("렌더 여부", () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dumyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dumyBook.title)).toBeInTheDocument();
    expect(getByText(dumyBook.summary)).toBeInTheDocument();
    expect(getByText(dumyBook.author)).toBeInTheDocument();
    expect(getByText(dumyBook.price)).toBeInTheDocument();
    expect(getByAltText(dumyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dumyBook.img}/600/600`
    );
  });
});
