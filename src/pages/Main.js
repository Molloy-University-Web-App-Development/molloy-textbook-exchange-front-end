import React from "react"
import { Link } from "react-router-dom"
export default function Main() {
    return ( <>
    <h1 id="home-title">Welcome to Textbook Exchange</h1>
    <Link to="book/1">Database Systems</Link>
    </>
    )
}