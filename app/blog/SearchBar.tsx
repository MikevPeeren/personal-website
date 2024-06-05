"use client";

const SearchBar = ({
  inputValue,
  handleInputChange,
}: {
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search for a blog post"
        className="w-full h-14 block ps-10 rounded-2xl dark:text-white font-bold text-black focus:outline-none p-4 px-4 placeholder:font-normal placeholder:text-50"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
