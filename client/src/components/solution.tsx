import React from "react";
import { Card } from "./card";
import { Cards } from "./cards";
import styles from "../styles/solution.module.css";

export const Solution = () => {
    return (
        <>
        <section>
            <div>
                <h1>Nos Solutions</h1>
                <Cards />
            </div>
        </section>
        </>
    );
}