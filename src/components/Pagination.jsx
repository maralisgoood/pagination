import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagination.css";
import PageBtn from "./subComp/PageBtn";

const pageNumbers = 100;

export default function Pagination({ currentPage, setCurrentPage }) {
    return (
        <div className="pagination">
            <Link to={`/page/${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 1)}>
                <PageBtn btnName={'өмнөх'} btnClass={"before-PageBtn"} />
            </Link>
            <Link to={`/page/${currentPage - 4}}`} onClick={() => setCurrentPage(currentPage - 4)}>
                <PageBtn btnName={'...'} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage - 3}`} onClick={() => setCurrentPage(currentPage - 3)}>
                <PageBtn btnName={currentPage - 3} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage - 2}`} onClick={() => setCurrentPage(currentPage - 2)}>
                <PageBtn btnName={currentPage - 2} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 1)}>
                <PageBtn btnName={currentPage - 1} btnClass={"pageBtn"} />
            </Link>
            <span>
                <PageBtn btnName={currentPage} btnClass={"pageBtn-active"} />
            </span>
            <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage + 1)}>
                <PageBtn btnName={currentPage + 1} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage + 2}`} onClick={() => setCurrentPage(currentPage + 2)}>
                <PageBtn btnName={currentPage + 2} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage + 3}`} onClick={() => setCurrentPage(currentPage + 3)}>
                <PageBtn btnName={currentPage + 3} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage + 4}}`} onClick={() => setCurrentPage(currentPage + 4)}>
                <PageBtn btnName={'...'} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${pageNumbers}}`} onClick={() => setCurrentPage(pageNumbers)}>
                <PageBtn btnName={`${pageNumbers}`} btnClass={"pageBtn"} />
            </Link>
            <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage + 1)}>
                <PageBtn btnName={'дараах'} btnClass={"after-PageBtn"} />
            </Link>
        </div>
    );
}