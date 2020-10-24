import React from "react";
import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div className="container notFound">
            <h1>404 - Aradığınız sayfa bulunamıyor :(</h1>
            <Link to="/">
                <div className="btn btn-primary">
                    Ana Sayfaya Dön
                </div>
            </Link>
        </div>
    )
}