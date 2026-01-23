import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TaskView } from '../pages/TaskView.tsx'
import { Layout } from '../Layout/Layout.tsx'
import { Charts } from '../pages/Charts.tsx'



export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route  element={<Layout/>}>
                    <Route path="/" element={<TaskView />} />
                    <Route path="/charts"  element={<Charts />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}