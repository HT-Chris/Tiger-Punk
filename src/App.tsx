import heroImg from './/assets/pexels-photo-3536236.jpeg'


function App() {


  return (
    <>

    <header>
      <nav id="nav-bar">
        <h1>logo</h1>
        <ul>
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">Tour</a>
          </li>
          <li className="nav-item">
            <a href="">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="">Merch</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>


    <main>

      <section id="hero-section">
        <div id="hero-text">
          <h1 className="text-fast">Fast,</h1>
          <h1 className="text-hard">Hard,</h1>
          <h1 className="text-loud">Loud</h1>
          <p className='hero-text-p'>We believe that energy can be pass from person to person in the form of art.  It's how we breathe life into one another. And we will not stop, 
            We are Tiger Punk!</p>
          <button id="book-btn">Book Us</button>
        </div>
        {/* <div id='hero-img'>

        </div> */}

      </section>

      <section>
      </section>

    </main>
  
    </>
  )
}

export default App
