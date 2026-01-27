import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TaskView } from '../pages/TaskView.tsx'
import { Layout } from '../Layout/Layout.tsx'
import { Dashboard } from '../pages/Dashboard.tsx'



export const AppRouter = () =>{
    return(
        <BrowserRouter>
         {/* Common routes */}
            <Routes>
                <Route  element={<Layout/>}>
                    <Route path="/" element={<TaskView />} />
                    <Route path="/charts"  element={<Dashboard />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}