import React from 'react'

export default function Main() {
    
    return (
    <Routes> 
        <Route path="/nav" element={<Nav/>}></Route>
        <Route path="/hero" element={<Hero/>}></Route>
    </Routes>
        
    )
}