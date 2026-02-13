// Professional Resume Template
// Compile with: typst compile resume.typ

#set document(title: "{{name}} Resume", author: "{{name}}")
#set page(margin: 0.65in, paper: "us-letter")
#set text(font: "Libertinus Serif", size: 10.5pt)
#set par(justify: true)

// Colors
#let accent = rgb("#1e40af")
#let subtle = rgb("#64748b")

// Helper functions
#let header(name, title, location, phone, email, website) = {
  align(center)[
    #text(size: 24pt, weight: "bold", font: "Libertinus Sans")[#name]
    #v(0.2em)
    #text(size: 12pt, fill: subtle)[#title]
    #v(0.1em)
    #text(size: 9pt, fill: subtle)[#location]
    #v(0.4em)
    #text(size: 9pt, fill: subtle)[
      #phone  •  #link("mailto:" + email)[#email]  •  #link(website)[#website.replace("https://", "")]
    ]
  ]
  v(0.5em)
}

#let section(title) = {
  v(0.8em)
  text(size: 13pt, weight: "bold", fill: accent, font: "Libertinus Sans")[#title]
  v(0.1em)
  line(length: 100%, stroke: 0.5pt + accent)
  v(0.3em)
}

#let role(company, location, title, dates, description: none) = {
  grid(
    columns: (1fr, auto),
    [*#company*, #location \ _#title_],
    align(right, text(fill: subtle, size: 9pt)[#dates])
  )
  
  if description != none [
    #v(0.2em)
    #text(size: 9.5pt, fill: subtle)[#description]
  ]
  
  v(0.3em)
}

#let achievement(content) = {
  list.item[#content]
}

#let tech-stack(..items) = {
  v(0.1em)
  text(size: 8.5pt, fill: subtle, font: "Libertinus Sans")[#items.pos().join(" · ")]
  v(0.2em)
}

#let summary-bullet(content) = {
  list.item[#content]
}

#let quote-box(text, author) = {
  block(
    fill: rgb("#e8f0f7"),
    stroke: (left: 3pt + accent),
    inset: (x: 1em, y: 0.75em),
    radius: 2pt,
    [
      #set text(size: 9.5pt, style: "italic")
      "#text"
      #v(0.3em)
      #set text(size: 9pt, style: "normal", fill: subtle)
      — #author
    ]
  )
}

// Document starts here
{{content}}
