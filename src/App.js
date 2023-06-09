import "./App.css";
import Mockman from "mockman-js";
import {Routes, Route} from 'react-router-dom'
import {Footer, Navbar, RequireAuth} from "./components";
import {Error, History, Home, Likes, Login, Playlists, Signup, VideoDetails, WatchLater} from "./pages";

function App() {
  return (
    <div className='bg-[#032541FF] text-white min-h-[100vh] w-full'>
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route element={<RequireAuth/>}>
                <Route path={'/user/liked'} element={<Likes/>}/>
                <Route path={'/user/watchlater'} element={<WatchLater/>}/>
                <Route path={'/user/history'} element={<History/>}/>
                <Route path={'/user/playlists'} element={<Playlists/>}/>
                <Route path={'/testing/mockman'} element={<Mockman/>}/>
            </Route>
            <Route path={'/authentication/login'} element={<Login/>}/>
            <Route path={'/authentication/signup'} element={<Signup/>}/>
            <Route path={'/video/watch/:id'} element={<VideoDetails/>}/>
            <Route path={'*'} element={<Error/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
