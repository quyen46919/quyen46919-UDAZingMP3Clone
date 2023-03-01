export const data = [
  {
    id: 1,
    Title: "Quả phụ tướng",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 2,
    Title: "Tòng Phu",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 3,
    Title: "Điều anh biết ",
    author: "Chi Dân",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 4,
    Title: "Quả phụ tướng",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 5,
    Title: "Đế vương",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 6,
    Title: "Bát Vi",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
  {
    id: 7,
    Title: "Em say rồi",
    author: "Dung Hoang Pham",
    avatar:
      "http://books.toscrape.com/media/cache/b3/59/b35975c0df26c40964028a8ccabc9a91.jpg",
  },
];
export const filterData = (text) => {
  const arrFilter = data.filter((item) => item.Title.includes(text));
  return arrFilter;
};
