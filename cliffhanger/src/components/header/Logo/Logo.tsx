import React, { useState } from "react";
import style from "./Logo.module.css"

function Logo() {
    return (
        <div className={style.wrapper}>
            <img className={style.logo} src="/logo/Logo.png" alt="Cliffhanger" />
            <h2>Cliffhanger</h2>
        </div>
    )
}

export default Logo;