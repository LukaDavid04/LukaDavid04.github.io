import { BellRing } from "lucide-react";
import ggphoto from "@/assets/ggtennisc.jpg";

export type JournalEntryComment = {
  paragraph: number;
  target: string;
  occurrence?: number;
  text: string;
};

export type JournalEntryLink = {
  paragraph: number;
  wordIndex: number;
  href: string;
};

export type JournalEntryType = {
  slug: string;
  title: string;
  date: string;
  tags: readonly string[];
  excerpt: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  comments?: readonly JournalEntryComment[];
  links?: readonly JournalEntryLink[];
};

// Things to Journal about
// - Gamewinner at home MBB
// - Graduating - What you do for a ring
// - Convocation
// - Iron Ring Ceremony
// - Reading Atomic Habits
// - Art of War
// - Growing a private buisness

export const JOURNAL: readonly JournalEntryType[] = [
  {
    slug: "achieving-a-dream",
    title: "Achieving a Dream Goal",
    date: "2025-10-11",
    tags: ["Teamwork", "Leadership", "Patience"],
    excerpt:
      "What it meant to my team to make the finals of the Ontario University Athletics tennis tournament.",
    image: {
      src: ggphoto,
      alt: "Gee-Gee's Men's Tennis Team lands the Silver Medal.",
      caption:
        "Not my most flattering angle, but a moment I will never forget.",
    },
    content: `
In first year, I used to get up at 5:00 am for practice. The cafeteria was closed, so I would bring a mug of cheerios with me as I waited in the freezing temperatures to get picked up by my best friend and club president Ryan.


At first we weren’t even part of the university. We were a club filled with talented individuals and big ideas. It took a long time for us to get anywhere close to being part of the university. Three years to be exact. There were so many meetings, emails, practices, tryouts, and early mornings before we got our first real chance to become a varsity team. 


It’s funny to think about now, but Ryan and I used to dream about having the uOttawa crest on our shirts. We would always bounce ideas back and forth about how we could get to that finish line, and what it would mean to us. To be able to compete on the highest level of collegiate tennis in Canada felt far far away. As nostalgic as the old club logo is now, we weren’t Gee-Gees yet. A lot came with the name. There was responsibility, ownership, liability, and solvency just to name a few.
`.trim(),
    comments: [
      {
        paragraph: 0,
        target: "freezing",
        text: "literally",
      },
      {
        paragraph: 2,
        target: "old club logo",
        text: "a collector's piece of merch in my eyes",
      },
    ],
    // links: [
    //   {
    //     paragraph: 0,
    //     wordIndex: 24,
    //     href: "https://en.wikipedia.org/wiki/Cheerio_(brand)",
    //   },
    // ],
  },
  // {
  //   slug: "the-things-you-dont-think-about",
  //   title: "The Things you Don't Think About",
  //   date: "2024-10-24",
  //   tags: ["Writing", "High-school", "Reflection"],
  //   excerpt: "Things change when you move away, and not always for the better.",
  //   content: `Main Text`.trim(),
  //   comments: [],
  // },

  // {
  //   slug: "url-structure-for-seo",
  //   title: "-",
  //   date: "2025-10-11",
  //   tags: ["Teamwork", "Leadership", "Patience"],
  //   excerpt: "Brief Description.",
  //   content: `Main Text`.trim(),
  //   comments: [],
  // },
] as const;
