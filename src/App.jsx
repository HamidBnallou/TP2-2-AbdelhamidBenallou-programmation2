
import {Route, Routes} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Categories from './assets/recettes/components/categories'
import Recettes from './assets/recettes/components/recettes'
import Recette from './assets/recettes/components/recette'
import Favori from './assets/recettes/components/favories'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path='/categories/:name' element={<Recettes />} />
        <Route path='/meals/:id' element={<Recette />} />
        <Route path='/favories' element={<Favori />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
