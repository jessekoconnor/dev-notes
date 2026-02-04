// Typst Resume Template
// Compile with: typst compile example-typst.typ

#set document(title: "Jesse O'Connor Resume", author: "Jesse O'Connor")
#set page(margin: 0.65in, paper: "us-letter")
#set text(font: "Libertinus Serif", size: 10.5pt)

// Colors
#let accent = rgb("#1e40af")
#let subtle = rgb("#64748b")

// Helper functions
#let header(name, title, contact) = {
  align(center)[
    #text(size: 24pt, weight: "bold", font: "Outfit")[#name]
    #v(0.2em)
    #text(size: 12pt, fill: subtle)[#title]
    #v(0.4em)
    #text(size: 9pt, fill: subtle)[#contact]
  ]
}

#let section(title) = {
  v(0.8em)
  text(size: 13pt, weight: "bold", fill: accent, font: "Outfit")[#title]
  v(0.1em)
  line(length: 100%, stroke: 0.5pt + accent)
  v(0.3em)
}

#let role(company, location, title, dates) = {
  grid(
    columns: (1fr, auto),
    [*#company*, #location \ _#title_],
    align(right, text(fill: subtle, size: 9pt)[#dates])
  )
  v(0.3em)
}

#let achievement(bold-part, rest) = {
  list.item[*#bold-part* #rest]
}

#let tech-stack(..items) = {
  v(0.1em)
  text(size: 8.5pt, fill: subtle)[#items.pos().join(" · ")]
  v(0.2em)
}

// Document starts here
#header(
  "Jesse O'Connor",
  "Backend Software Engineer",
  "603.731.5283  •  jessekoconnor@gmail.com  •  jessekoconnor.com"
)

#v(0.5em)

*Accomplished individual contributor with 13 years of industry experience* and a 
passion for mentoring engineers and designing scalable solutions.

#section("Experience")

#role("Meta", "NYC, remote", "Senior Software Engineer, Backend", "March 2022 – April 2023")

Lead of kustomer platform automations team (Workflows, Business Rules, Queues & Routing).

#achievement("Saved \$10k/mo and reduced bug count by 97%")[
  in the distributed routing system. Results derived from two projects proposed 
  and led that were delivered in parallel. (5 engineers × 6mo)
]
#tech-stack("Node.js", "Mongo", "Distributed Event Driven Systems", "Commands pattern")

#achievement("Resolved core product bottleneck")[
  by implementing a highly reliable and scalable solution architected in 
  collaboration with the engineering director. Surpassed adoption goals, 
  reaching 2k organizations. (3 engineers × 9mo)
]
#tech-stack("Node.js", "Mongo", "SQS visibility timeout", "Serial execution")

#achievement("Conducted org-wide presentation on Node.js")[
  to 300 viewers, covering event loop, thread pool, concurrent programming, 
  and blocking operations. Received overwhelmingly positive feedback.
]

#section("Skills")

#grid(
  columns: (auto, 1fr),
  gutter: 0.5em,
  [*Languages:*], [Node.js (11 years), Python, TypeScript, JavaScript],
  [*Databases:*], [MongoDB (11 years), DynamoDB, PostgreSQL],
  [*Infrastructure:*], [AWS (Lambda, SQS, S3, EBS), Docker, Kubernetes],
  [*Patterns:*], [Event-Driven Architecture, Distributed Systems, CQRS],
)

#section("Projects")

#role("DashMobile", "Personal Project", "Creator", "July 2022 – Present")

React Native app with Node.js Lambda backend. Scrapes local venue websites to 
aggregate live music events.

- *Leverages slim Chromium below Lambda size limit* with Puppeteer
- *Different sites run in parallel* Lambda functions for maximal performance
- *Caches results for one day* to avoid abusive behavior toward local businesses
