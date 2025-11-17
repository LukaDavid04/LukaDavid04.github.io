export type JournalEntryComment = {
  paragraph: number;
  wordIndex: number;
  text: string;
};

export type JournalEntryType = {
  slug: string;
  title: string;
  date: string;
  tags: readonly string[];
  excerpt: string;
  content: string;
  comments?: readonly JournalEntryComment[];
};

export const JOURNAL: readonly JournalEntryType[] = [
  {
    slug: "achieving-a-dream",
    title: "Achieving a Dream Goal",
    date: "2025-10-11",
    tags: ["Teamwork", "Leadership", "Patience"],
    excerpt:
      "What it meant to my team to make the finals of the Ontario University Athletics tennis tournament.",
    content: `
In first year, I used to get up at 5:00 am for practice. The cafeteria was closed, so I would bring a mug of cheerios with me as I waited in the freezing temperatures to get picked up by my best friend and club president Ryan.


At first we weren’t even part of the university. We were a club filled with talented individuals and big ideas. It took a long time for us to get anywhere close to being part of the university. Three years to be exact. There were so many meetings, emails, practices, tryouts, and early mornings before we got our first real chance to become a varsity team. 


It’s funny to think about now, but Ryan and I used to dream about having the uOttawa crest on our shirts. We would always bounce ideas back and forth about how we could get to that finish line, and what it would mean to us. To be able to compete on the highest level of collegiate tennis in Canada felt far far away. As nostalgic as the old club logo is now (and a collector’s piece of merch in my eyes), we weren’t Gee-Gees yet. A lot came with the name. There was responsibility, ownership, liability, and solvency just to name a few.
`.trim(),
    comments: [
      {
        paragraph: 0,
        wordIndex: 32,
        text: "literally",
      },
    ],
  },
  {
    slug: "good-engineering-handoff",
    title: "What makes a good engineering handoff",
    date: "2025-07-02",
    tags: ["Process", "Collaboration"],
    excerpt:
      "Checklists, traceability, and reducing surprise for the next person in line.",
    content: `
A good handoff minimizes surprise. I keep a one-pager with context, current state,
open questions, and test notes. Leave breadcrumbs and make the next step obvious.
    `.trim(),
  },
  {
    slug: "tennis-flow-debugging",
    title: "Tennis, flow, and debugging",
    date: "2024-11-11",
    tags: ["Mindset"],
    excerpt:
      "Finding rhythm in practice and in code. A few parallels that help me focus.",
    content: `
When I coach or play tennis, rhythm matters. In debugging, the same applies.
Warm up with a trivial repro. Hit a few simple shots. Then increase complexity.
    `.trim(),
  },
] as const;
