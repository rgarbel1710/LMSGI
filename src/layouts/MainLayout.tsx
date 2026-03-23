import React from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <Header>
                <NavBar>

                </NavBar>
            
            </Header>

            <Main>
                <Outlet>

                </Outlet>
            </Main>

            <footer>
                
            </footer>
        </>
    )
}