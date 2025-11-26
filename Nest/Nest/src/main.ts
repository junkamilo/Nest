import { age, isValis, name, templateString } from './bases/01-types'
import { charmander } from './bases/04-injection'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${templateString}</h1>
    <h1>${charmander.id}</h1>
    <h1>${charmander.name}</h1>
    <h1>${charmander.imageUrl}</h1>
  </div>
`

