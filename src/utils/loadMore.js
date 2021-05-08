import getData from './getData';

const loadMore = async () => {
  const Characters = document.querySelector('.Characters');
  const charactersCount = Characters.childElementCount;
  const page = charactersCount / 20 + 1;
  const moreCharacters = await getData(`?page=${page}`);

  Characters.innerHTML += moreCharacters.results
    .map(
      (character) => `
    <article class="Characters__item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="name" >
        <h2>${character.name}</h2>
      </a>
    </article>
  `,
    )
    .join('');
};
export default loadMore;
