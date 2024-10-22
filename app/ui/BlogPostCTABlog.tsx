"use client";

import { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";

import { posts } from "@/.velite";
import BlogPostCTA from "@/app/ui/BlogPostCTA";
import SearchBar from "@/app/ui/SearchBar";

const BlogPostCTABlog = () => {
  const [searchResults, setSearchResults] = useState<
    | [
        {
          slug: string;
          title: string;
          description: string;
          body: string;
          imageSrc: string;
          imageAlt: string;
          publishDate: string | number | Date;
          category: string;
        },
      ]
    | undefined
  >();
  const [inputValue, setInputValue] = useState("");
  const [value] = useDebounce(inputValue, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const fetchSearchResults = async (query: string) => {
    setSearchResults(
      // @ts-expect-error will fix later
      posts
        ?.filter((post) => {
          if (post.title.toLowerCase().indexOf(query) !== -1) return post;
          return;
        })
        .filter(Boolean),
    );
  };

  useEffect(() => {
    if (value) fetchSearchResults(value);
  }, [value]);

  return (
    <div className="flex flex-col w-full gap-8">
      <SearchBar handleInputChange={handleInputChange} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-xl">
        <BlogPostCTA removeLatestBlog searchedPosts={searchResults} />
      </div>
    </div>
  );
};

export default BlogPostCTABlog;
