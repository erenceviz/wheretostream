import React, { useState } from "react";
import S from "./Logo.module.css"

function Logo() {
    return(
        <div className={S.wrapper}>
            <img className={S.logo} src="/logo/Logo.png" alt="Cliffhr" />
            <h2>Cliffhanger</h2>
        </div>
        
    )
}

export default Logo;