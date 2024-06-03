'use client'

import React from 'react'

export const WindowUI = () => {
    if (typeof window === 'undefined') {
        return <div>Window is undefined</div>
    } else
        console.log("windows:", window)
    return (
        <div>WindowUI</div>
    )
}
