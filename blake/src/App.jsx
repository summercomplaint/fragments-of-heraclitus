import './App.css'


function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="blake-frame">
          <div className="v-line v-line--outer-left" />
          <div className="v-line v-line--inner-left" />
          <div className="v-line v-line--inner-right" />
          <div className="v-line v-line--outer-right" />

          <a className="get-zine" href="/blake/Blake_On_Beasts.pdf" target="_blank" rel="noopener noreferrer">
            GET ZINE
          </a>

          <img className="bg-top" src="/blake/backgroundTop.png" alt="" />

          <div className="content-area">

            <div className="section-title">Instructions</div>
            <ol>
              <li>With a double-Sided Printer, print the Sheet, set to flip on the Short Edge (NB: this is not the usual Setting! if you don't do it this Way, your Pages will be upside down and mismatched.)</li>
              <li>Cut along dotted gray Lines to get 4 Pages.</li>
              <li>Stack in Order: there are Numbers on the Pages to Guide You. (Tip: if the Cover is Face down, the left Side should be Contents, 2, 4, 6)</li>
              <li>Staple Three Times along the gray Line between the front and back Cover</li>
              <li>Fold closed and trim to Taste</li>
            </ol>

            <div className="section">
              <h2 className="section-title">About</h2>
              <p className="about-text">
                William Blake was an English Poet, Painter, Engraver and Visionary (in the most
                literal Sense) of the late 18th and early 19th Century. he is particularly known
                for his Prophecies, his Embrace of Chaos and Freedom, and his unique Style, both
                poetically and visually. This small Collection includes every Poem of his I could
                find which is "about" Animals by my idiosyncratic standards. Art is primarily sourced from
                Blake's illustrated Book of Job with Tyger from the divine Comedy
                and birds from the Visions of the Daughters of Albion.
              </p>
              <p>
                The Zine and Website use a custom font based on Blake's Lettering, which you can download as a WOFF2 File {' '} <a href="/blake.woff3" download>
               here
            </a>. If you want to make your own 8-Page Zine, you can download a TeX template{' '}<a href="/blank.tex" download> here</a>.
              </p>
            </div>

          </div>

          <img className="bg-bottom" src="/blake/backgroundBottom.png" alt="" />

          <a className="back-link" href="https://differentwaters.stream">← Fragments of Heraclitus</a>
        </div>
      </div>
    </>
  )
}

export default App
