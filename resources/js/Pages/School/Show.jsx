import React from 'react';
import Header from "@/Components/Header/Header.jsx";
import School from "@/Components/School/School.jsx";

export default function Show({ school }) {
    return (
        <>
            <Header/>
            <School school={school}/>
        </>
    );
}
