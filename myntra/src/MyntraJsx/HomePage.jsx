export default function HomePage() {
  const name = "Ola S1";
  return (
    <div>
      <section id="section-1">
        <header>
          <img src="ola-white-logo.svg" alt="" class="logo-1" />
          <nav>
            <a href="#" class="link-1">
              {name}
            </a>
            <a href="#" class="link-1">
              Ola Electric
            </a>
            <a href="#" class="link-1">
              Ola Futurefactory
            </a>
            <button class="button-1">Book an Ola Cab</button>
            <button class="button-2">Free S1 Test Ride</button>
            <img src="Hamburger.svg" alt="" class="Hamburger" />
          </nav>
        </header>
      </section>
    </div>
  );
}
