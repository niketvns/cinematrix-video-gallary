import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider, LikedProvider, PlaylistsProvider, VideosProvider, WatchLaterProvider} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <VideosProvider>
                    <LikedProvider>
                        <WatchLaterProvider>
                            <PlaylistsProvider>
                                <App/>
                            </PlaylistsProvider>
                        </WatchLaterProvider>
                    </LikedProvider>
                </VideosProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
