import React from "react";
import { useTable } from "react-table/dist/react-table.development";
import { COLUMNS } from "./columns";

export const table = () => {
    return(
        useTable({
            columns:COLUMNS,
        })
        <div>
            
        </div>
    )
}