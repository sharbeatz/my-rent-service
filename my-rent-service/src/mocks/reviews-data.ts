import { Review } from "../types/review"

const reviewsData : Review[] = [
    {
        id: "1",
        comment: "Вау топово!",
        date: "1 April 2019",
        user: {
            name: "Garfield",
            avatarUrl: "/img/garfield-avatar.png",
            isPro: true
        },
        rating: 4
    },
    {
        id: "2",
        comment: "Норм, но котиков мало.",
        date: "15 May 2020",
        user: {
          name: "Jon Arbuckle",
          avatarUrl: "/img/jon-avatar.jpg",
          isPro: false,
        },
        rating: 3,
      },
      {
        id: "3",
        comment: "Отлично! Всё понравилось, особенно еда.",
        date: "10 December 2021",
        user: {
          name: "Odie",
          avatarUrl: "/img/odie-avatar.jpg",
          isPro: false,
        },
        rating: 5,
      },
]

export {reviewsData}