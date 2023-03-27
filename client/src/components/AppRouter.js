import React from 'react';
import {Routes, Route, Redirect, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth&&authRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route
                path="*"
                exact
                element={<Navigate to={"/admin"} />}
            />
        </Routes>
    );
};

export default AppRouter;