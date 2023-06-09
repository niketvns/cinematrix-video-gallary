import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
    AuthProvider, HistoryProvider,
    LikedProvider,
    PlaylistsProvider,
    VideosProvider,
    WatchLaterProvider
} from "./contexts";
import {ChakraProvider} from "@chakra-ui/react";
import {AlertsProvider} from "./contexts/alertContext";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ChakraProvider>
                <AlertsProvider>
                    <AuthProvider>
                        <VideosProvider>
                            <HistoryProvider>
                                <LikedProvider>
                                    <WatchLaterProvider>
                                        <PlaylistsProvider>
                                            <App/>
                                        </PlaylistsProvider>
                                    </WatchLaterProvider>
                                </LikedProvider>
                            </HistoryProvider>
                        </VideosProvider>
                    </AuthProvider>
                </AlertsProvider>
            </ChakraProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
