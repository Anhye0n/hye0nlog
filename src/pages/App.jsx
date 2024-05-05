import { Route, Routes } from 'react-router-dom'
import MainRouter from '@/pages/MainRouter.jsx'
import About from '@/pages/about/About.jsx'
import Index from '@/pages/index/Index.jsx'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/" element={<MainRouter />}>
                <Route path="/about" element={<About />} />
            </Route>
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/signup" element={<SignUp />} />*/}
        </Routes>
    )
}

export default App