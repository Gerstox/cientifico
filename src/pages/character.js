import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {

  const hash = getHash();
  const character = await getData(hash);

  const view = `
  <div class="characters-inner">
    <article class="characters-card">
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    </article>
    <article class="characters-card">
      <h3>Episodes:</span> ${character.episode.length}</span></h3>
      <h3>Status:<span> ${character.status}</span></h3>
      <h3>Species:<span> ${character.species}</span></h3>
      <h3>Gender:<span> ${character.gender}</span></h3>
      <h3>Origin:<span> ${character.origin.name}</span></h3>
      <h3>Last Location:<span> ${character.location.name}</span></h3>
    </article>
  </div>
  `;
  return view
};

export default Character;