import React from 'react'

export const MainLayout = ({children}) => {
    
    const styles = {
        backgroundColor: "black",
        color:"white",
    }
    return (
        <div style={styles}>{children}</div>
    )
}
