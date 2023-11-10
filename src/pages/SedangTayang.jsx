import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import axios from "axios";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";
import Category from "../components/Category";
import Card from "../elements/Card";
import Button from "../elements/Button";
import ListMovie from "../components/ListMovie";

const SedangTayang = () => {
    return(
        <div>
            <ListMovie
                res={'/movie/now_playing?language=en-US&page=1'}
                text={'Sedang Tayang'}
            />
        </div>
    )
}

export default SedangTayang