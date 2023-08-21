import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "../style/css/components/productnav.css";
import Pennor from "../style/img/products/pennor.gif";
import Reklamartiklar from "../style/img/products/nalle.jpg";
import Brevpapper from "../style/img/products/papper.png";
import Visitkort from "../style/img/products/card.png";
import Kuvert from "../style/img/products/kuvert/kuvert.jpg";
import Godis from "../style/img/products/godis.jpg";
import Textil from "../style/img/products/textil_profil.jpg";

export default function ProductsNav({ isHovered, setIsHovered }) {

    const items = [
        {
            "name": "Pennor",
            "img": Pennor
        },
        {
            "name": "Reklamartiklar",
            "img": Reklamartiklar
        },
        {
            "name": "Brevpapper",
            "img": Brevpapper
        },
        {
            "name": "Visitkort",
            "img": Visitkort
        },
        {
            "name": "Kuvert",
            "img": Kuvert
        },
        {
            "name": "Godis",
            "img": Godis
        },
        {
            "name": "Textil",
            "img": Textil
        }
    ]
    
    return (
        <div className="productsNav">
            <div className="productsNavItems">
                {items.map((item, index) => (
                    <Link to={`/products/${item.name}`} key={index}>
                        {item.name}
                        <img
                            src={item.img}
                            alt=""
                            onClick={() => {
                                setIsHovered(false);
                            }}
                        />
                    </Link>
                ))}

            </div>
        </div>
    );
}
