import React from "react"

const Layout=React.memo(({children})=>{
    return<>
    <div>
        {children}
    </div>
    </>
})

export default Layout