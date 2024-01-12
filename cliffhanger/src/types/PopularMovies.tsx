export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


export const jsonDataPopularMovies: MovieList = {
  "page": 1,
  "results": [
      {
          "adult": false,
          "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
          "genre_ids": [
              18,
              36
          ],
          "id": 906126,
          "original_language": "es",
          "original_title": "La sociedad de la nieve",
          "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
          "popularity": 1412.999,
          "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
          "release_date": "2023-12-13",
          "title": "Society of the Snow",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 578
      },
      {
          "adult": false,
          "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
          "genre_ids": [
              28,
              12,
              14
          ],
          "id": 572802,
          "original_language": "en",
          "original_title": "Aquaman and the Lost Kingdom",
          "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
          "popularity": 1117.61,
          "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
          "release_date": "2023-12-20",
          "title": "Aquaman and the Lost Kingdom",
          "video": false,
          "vote_average": 6.479,
          "vote_count": 456
      },
      {
          "adult": false,
          "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
          "genre_ids": [
              28,
              35
          ],
          "id": 1029575,
          "original_language": "en",
          "original_title": "The Family Plan",
          "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
          "popularity": 730.194,
          "poster_path": "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
          "release_date": "2023-12-14",
          "title": "The Family Plan",
          "video": false,
          "vote_average": 7.378,
          "vote_count": 677
      },
      {
          "adult": false,
          "backdrop_path": "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
          "genre_ids": [
              27,
              9648,
              53
          ],
          "id": 1071215,
          "original_language": "en",
          "original_title": "Thanksgiving",
          "overview": "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
          "popularity": 917.86,
          "poster_path": "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
          "release_date": "2023-11-16",
          "title": "Thanksgiving",
          "video": false,
          "vote_average": 6.721,
          "vote_count": 490
      },
      {
          "adult": false,
          "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
          "genre_ids": [
              27,
              9648
          ],
          "id": 507089,
          "original_language": "en",
          "original_title": "Five Nights at Freddy's",
          "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
          "popularity": 811.178,
          "poster_path": "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
          "release_date": "2023-10-25",
          "title": "Five Nights at Freddy's",
          "video": false,
          "vote_average": 7.751,
          "vote_count": 3127
      },
      {
          "adult": false,
          "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
          "genre_ids": [
              18,
              878,
              28
          ],
          "id": 695721,
          "original_language": "en",
          "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
          "popularity": 753.39,
          "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
          "release_date": "2023-11-15",
          "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "video": false,
          "vote_average": 7.229,
          "vote_count": 1431
      },
      {
          "adult": false,
          "backdrop_path": "/uvqf3e451hBviQiCvPx4lapVOKf.jpg",
          "genre_ids": [
              27
          ],
          "id": 1131755,
          "original_language": "en",
          "original_title": "A Creature Was Stirring",
          "overview": "A nurse taking care of her daughter's mysterious affliction struggles to hide her secrets when uninvited strangers take shelter in her house during a lethal blizzard.",
          "popularity": 815.217,
          "poster_path": "/ikQG3byEFyfwcnF0zmyNtXTmr5v.jpg",
          "release_date": "2023-12-08",
          "title": "A Creature Was Stirring",
          "video": false,
          "vote_average": 5.119,
          "vote_count": 21
      },
      {
          "adult": false,
          "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
          "genre_ids": [
              878,
              18,
              28
          ],
          "id": 848326,
          "original_language": "en",
          "original_title": "Rebel Moon - Part One: A Child of Fire",
          "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
          "popularity": 658.059,
          "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
          "release_date": "2023-12-15",
          "title": "Rebel Moon - Part One: A Child of Fire",
          "video": false,
          "vote_average": 6.446,
          "vote_count": 1175
      },
      {
          "adult": false,
          "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
          "genre_ids": [
              18,
              36
          ],
          "id": 872585,
          "original_language": "en",
          "original_title": "Oppenheimer",
          "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
          "popularity": 674.156,
          "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          "release_date": "2023-07-19",
          "title": "Oppenheimer",
          "video": false,
          "vote_average": 8.114,
          "vote_count": 6039
      },
      {
          "adult": false,
          "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
          "genre_ids": [
              36,
              10752,
              18
          ],
          "id": 753342,
          "original_language": "en",
          "original_title": "Napoleon",
          "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
          "popularity": 1092.626,
          "poster_path": "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
          "release_date": "2023-11-22",
          "title": "Napoleon",
          "video": false,
          "vote_average": 6.435,
          "vote_count": 991
      },
      {
          "adult": false,
          "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
          "genre_ids": [
              35,
              10751,
              14
          ],
          "id": 787699,
          "original_language": "en",
          "original_title": "Wonka",
          "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
          "popularity": 654.778,
          "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
          "release_date": "2023-12-06",
          "title": "Wonka",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 933
      },
      {
          "adult": false,
          "backdrop_path": "/15BnuDQ8pYRmLqPZKAk5vIhUu9J.jpg",
          "genre_ids": [
              37,
              53,
              28
          ],
          "id": 843380,
          "original_language": "en",
          "original_title": "Dead for a Dollar",
          "overview": "In 1897, veteran bounty hunter Max Borlund is deep into Mexico where he encounters professional gambler and outlaw Joe Cribbens — a sworn enemy he sent to prison years before. Max is on a mission to find and return Rachel Kidd, the wife of a wealthy businessman, who as the story is told to Max, has been abducted by Buffalo Soldier Elijah Jones. Max is ultimately faced with a showdown to save honor.",
          "popularity": 612.341,
          "poster_path": "/1AnXfjxFqMsQmUPSvt9YxUJhfFw.jpg",
          "release_date": "2022-09-30",
          "title": "Dead for a Dollar",
          "video": false,
          "vote_average": 5.633,
          "vote_count": 181
      },
      {
          "adult": false,
          "backdrop_path": "/X8yF6STUk5Zr5nAuLBJiio8Sxh.jpg",
          "genre_ids": [
              18,
              10749
          ],
          "id": 1143183,
          "original_language": "tl",
          "original_title": "Rewind",
          "overview": "Mary loves John for as long as she can remember. But after years of marriage, John's priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary's life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",
          "popularity": 466.285,
          "poster_path": "/ru1i4ZR11lPPVArk3fOcO1VCOlD.jpg",
          "release_date": "2023-12-25",
          "title": "Rewind",
          "video": false,
          "vote_average": 6.875,
          "vote_count": 16
      },
      {
          "adult": false,
          "backdrop_path": "/t9rOTMHcE26MqcTSRF1LUicsY5b.jpg",
          "genre_ids": [
              16,
              35,
              10751
          ],
          "id": 1075794,
          "original_language": "en",
          "original_title": "Leo",
          "overview": "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
          "popularity": 577.696,
          "poster_path": "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
          "release_date": "2023-11-17",
          "title": "Leo",
          "video": false,
          "vote_average": 7.533,
          "vote_count": 796
      },
      {
          "adult": false,
          "backdrop_path": "/EEASOZj5Mm2u6G3K4HS4pKIlfC.jpg",
          "genre_ids": [
              27,
              9648
          ],
          "id": 1035982,
          "original_language": "en",
          "original_title": "Hell House LLC Origins: The Carmichael Manor",
          "overview": "A group of cold case investigators stay at the Carmichael Manor, site of the grisly and unsolved murders of the Carmichael family back in the eighties. After four nights, the group was never heard from again. What is discovered on their footage is even more disturbing than anything found on the Hell House tapes.",
          "popularity": 545.102,
          "poster_path": "/irxr1vZdpQl7Vnn8vdysnD69uba.jpg",
          "release_date": "2023-10-24",
          "title": "Hell House LLC Origins: The Carmichael Manor",
          "video": false,
          "vote_average": 6.304,
          "vote_count": 56
      },
      {
          "adult": false,
          "backdrop_path": "/36Lt4NXw5ucLDobs7dvJCIniXCp.jpg",
          "genre_ids": [
              27
          ],
          "id": 807172,
          "original_language": "en",
          "original_title": "The Exorcist: Believer",
          "overview": "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
          "popularity": 476.911,
          "poster_path": "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
          "release_date": "2023-10-04",
          "title": "The Exorcist: Believer",
          "video": false,
          "vote_average": 6.134,
          "vote_count": 741
      },
      {
          "adult": false,
          "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
          "genre_ids": [
              16,
              10751,
              10402,
              14,
              35
          ],
          "id": 901362,
          "original_language": "en",
          "original_title": "Trolls Band Together",
          "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
          "popularity": 527.803,
          "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          "release_date": "2023-10-12",
          "title": "Trolls Band Together",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 507
      },
      {
          "adult": false,
          "backdrop_path": "/50stq3Jlny6oEgJjsXbQvbajCNw.jpg",
          "genre_ids": [
              10749,
              18
          ],
          "id": 1020006,
          "original_language": "en",
          "original_title": "Priscilla",
          "overview": "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
          "popularity": 611.517,
          "poster_path": "/uDCeELWWpsNq7ErM61Yuq70WAE9.jpg",
          "release_date": "2023-10-27",
          "title": "Priscilla",
          "video": false,
          "vote_average": 6.906,
          "vote_count": 192
      },
      {
          "adult": false,
          "backdrop_path": "/rrfBenawPGhkt5yvb124NSZwnAC.jpg",
          "genre_ids": [
              18,
              35,
              53
          ],
          "id": 930564,
          "original_language": "en",
          "original_title": "Saltburn",
          "overview": "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
          "popularity": 478.032,
          "poster_path": "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
          "release_date": "2023-11-16",
          "title": "Saltburn",
          "video": false,
          "vote_average": 7.138,
          "vote_count": 1006
      },
      {
          "adult": false,
          "backdrop_path": "/tUBxdX0klHGOqtJWY73oQAu7Q0V.jpg",
          "genre_ids": [
              28,
              80
          ],
          "id": 1133602,
          "original_language": "ja",
          "original_title": "BAD LANDS バッド・ランズ",
          "overview": "A grifter and her loose-cannon brother get their hands on a massive amount of money, but their ill-gotten gains puts a huge target on their back.",
          "popularity": 513.337,
          "poster_path": "/o8CB6o7ouYPgi8WIXKAR4Hgz3ud.jpg",
          "release_date": "2023-09-29",
          "title": "Bad Lands",
          "video": false,
          "vote_average": 6.8,
          "vote_count": 5
      }
  ],
  "total_pages": 42249,
  "total_results": 844978
}