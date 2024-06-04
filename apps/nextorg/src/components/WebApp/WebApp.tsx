'use client'
import React from 'react'
import { useState, useEffect } from 'react'

export const WebApp = () => {
    const [initdata, setInitdata] = useState<String>("")
    useEffect(() => {
        setInitdata(window?.Telegram?.WebApp?.initdata)
    }, [])

    return (
        <div>WebAppData{initdata}</div>
    )
}
