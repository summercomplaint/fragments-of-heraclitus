import './App.css'
import { SidebarScroller } from './SidebarScroller.jsx'

function App() {
  return (
    <>
      <SidebarScroller side="left" />
      <SidebarScroller side="right" />
      <script data-goatcounter="https://fragments-zine.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
      <div className="page-wrapper">
      <div className="page">
    
        {/* PRINT section */}
        <div className="section">
           
          <h1 className="print-button">
            <a href="/Fragments_Of_Heraclitus.pdf" target="_blank" rel="noopener noreferrer">
              <pre>{` __________
|          |
| `}<span className="get-zine-label">GET ZINE</span>{` |
|__________|`}</pre>
            </a>
           
          </h1>
          
          <div className="section-label">INSTRUCTIONS:</div>
          <ol>
            <li>
              With a double-sided printer, print out the sheet, setting it to
              flip on the long side.
            </li>
            <li>
              Cut along dotted gray lines to get 8 pairs of double-sided pages.
            </li>
            <li>
              Stack in whatever order you like (there are 646400 possible
              orders, so yours will be unique), as long as the cover pages are
              on top. Make sure the pages don't get flipped!
            </li>
            <li>
              Staple twice, along the gray line between the front and back
              cover, once near the bottom and once near the top.
            </li>
            <li>
              Fold it closed and you're all done! Remember to underline and
              dog-ear your favorite fragments :)
            </li>
          </ol>

          <div className="section-label">ALTERNATE TECHNIQUES:</div>
          <ul>
            <li>
              If you dont have a double-sided printer for step 1, you can print
              the first page, put it back in, and print again (usually it
              prints on the backside, but your printer tray should have a
              little icon to tell you)
            </li>
            <li>
              If you dont have cutting technology for step 2: fold in half
              twice, both horizontally and vertically. Double fold along dotted
              lines to weaken the paper and carefully tear.
            </li>
            <li>
              If you don't have a stapler for step 4, but do have some string
              and a sharp tool: Poke a hole in the middle, pass the string
              through, loop it around the back and pass it through again, loop
              it around the back the other way, and tie a knot!
            </li>
          </ul>
        </div>

        {/* ABOUT section */}
        <div className="section">
          <h2 className="section-title">ABOUT</h2>

          <p className="about-text">
            Heraclitus was a pre-socratic greek philosopher of the 6th century
            BC. His work survives only in a little over 100 "fragments",
            quotations of him by other writers whose full work survives. It's
            not clear which of these fragments are exact quotations, which are
            paraphrases, and which are fabricated entirely. These glimpses into
            his thought suggest a thinker interested in change, sleep, death,
            fire, water, temperance and time. The total fragments are short
            enough to fit in a little booklet, so i made one! Please print out and make your own, or if
            you know me personally, i probably have extras to give you. i can't
            read ancient greek, so the translations used are cobbled together
            from a handful of sources i found online, edited for my personal
            tastes.
          </p>

          <ul className="sources">
            <li><a href="http://philoctetes.free.fr/heraclite.pdf" target="_blank" rel="noopener noreferrer">philoctetes.free.fr/heraclite.pdf</a></li>
            <li><a href="https://heraclitusfragments.com/files/e.html" target="_blank" rel="noopener noreferrer">heraclitusfragments.com/files/e.html</a></li>
            <li><a href="https://en.wikisource.org/wiki/Fragments_of_Heraclitus_(annotated)" target="_blank" rel="noopener noreferrer">en.wikisource.org/wiki/Fragments_of_Heraclitus_(annotated)</a></li>
            <li><a href="https://jujustoriesdotco.wordpress.com/wp-content/uploads/2017/09/heraclitus.pdf" target="_blank" rel="noopener noreferrer">jujustoriesdotco.wordpress.com/wp-content/uploads/2017/09/heraclitus.pdf</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
