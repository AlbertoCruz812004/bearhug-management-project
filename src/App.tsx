import {Suspense} from "react";
import {Route, Routes} from "react-router";
import AuthProvider from "./core/context/auth/AuthProvider.tsx";
import Loading from "./core/components/Loading.tsx";
import {ThemeProvider} from "./core/context/theme/ThemeProvider.tsx";
import {routes} from "./routes/routes.tsx";


export default function App() {
    return (
        <ThemeProvider>
            <Suspense fallback={<Loading/>}>
                <AuthProvider>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path}
                                   element={route.element}>{route.children?.map(children => (
                                <Route path={children.path} key={children.path} element={children.element}/>))}</Route>
                        ))}
                    </Routes>
                </AuthProvider>
            </Suspense>
        </ThemeProvider>
    );
}
