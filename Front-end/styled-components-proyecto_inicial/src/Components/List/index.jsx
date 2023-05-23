import React from "react";
import { Box } from "../UI/index.js";
import { lista } from "../../info.js";

const List = () => {
    return 
    <Box> 
        {
            lista.cargos.map(({id, type, value, from, date}) =>{
                return <div key = {id}>
                    <span>{type}</span>
                    <span>{value}</span>
                </div>
            })
        }
    </Box>
}

export default List;