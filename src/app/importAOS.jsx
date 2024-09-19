'use client'
import AOS from 'aos';
import { useEffect } from 'react';

const ImportAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    return null;
}

export default ImportAOS