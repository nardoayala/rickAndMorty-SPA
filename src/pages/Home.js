import getData from '../utils/getData';
import loadMore from '../utils/loadMore';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
    .map(
      (character) => `
        <article class="Characters__item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}" >
            <h2>${character.name}</h2>
          </a>
        </article>
      `,
    )
    .join('')}
    </div>
    <button class="button load-more" id="loadMore" onclick="loadMore()">Load more</button>
  `;
  window.loadMore = loadMore;
  return view;
};

export default Home;
