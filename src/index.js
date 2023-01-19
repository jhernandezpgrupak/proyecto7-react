import React, {Fragment} from 'react'
import ReactDoom  from "react-dom/client";
import List from './containers/List'

import 'bootswatch/dist/cerulean/bootstrap.min.css'
const root = ReactDoom.createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <Fragment>
            <nav className='navbar navbar-dark bg-dark boder-bottom border-white'>
                <a href='/' className='navbar-brand'>Movie APP</a> 
            </nav>
            <main className='bg-light'>
                <div className='container'>
                    <List/>
                </div>
            </main>
        </Fragment>
    </React.StrictMode>
)
