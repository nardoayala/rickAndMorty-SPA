const About = () => {
  const view = `
    <main class="about">
      <div class="about__container">
        <h1 class="about__title">What is this?</h1>
        <p class="about__subtitle">
          This is simple SPA application built entirely with JavaScript vanilla.
        </p>
        <div class="about__tools">
          <h3>Tools used:</h3>
          <ul>
          <li><a href="https://rickandmortyapi.com">The Rick and Morty API</a></li>
          <li><a href="https://travis-ci.org/">Travis CI</a></li>
          </ul>
        </div>
      </div>
    </main>
  `;
  return view;
};

export default About;
