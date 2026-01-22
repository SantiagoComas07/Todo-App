import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TaskView } from '../pages/TaskView.tsx'
import { Layout } from '../Layout/Layout.tsx'



export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route  element={<Layout/>}>
                    <Route path="/" element={<TaskView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}