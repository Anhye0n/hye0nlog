import { Route, Routes } from 'react-router-dom'
import MainRouter from '@/pages/MainRouter.jsx'
import About from '@/pages/about/About.jsx'
import Index from '@/pages/index/Index.jsx'
import Gallery from '@/pages/gallery/Gallery.jsx'
import Tags from '@/pages/tags/Tags.jsx'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Index />} />


            <Route path="/" element={<MainRouter />}>
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/tags" element={<Tags />} />
            </Route>
            <Route path="/about" element={<About />} />

            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/signup" element={<SignUp />} />*/}
        </Routes>
    )
}

export default App