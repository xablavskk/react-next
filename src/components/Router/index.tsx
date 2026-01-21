import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../MainTemplate/indes";
import { Settings } from "../Settings";
import { History } from '../../components/History'

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainTemplate children={<></>} />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}