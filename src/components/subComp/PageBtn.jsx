import React from "react";
import "../../styles/pageBtn.css";

export default function PageBtn({ btnClass, btnName }) {
    return (
        <button className={btnClass}>{btnName}</button>
    );
}