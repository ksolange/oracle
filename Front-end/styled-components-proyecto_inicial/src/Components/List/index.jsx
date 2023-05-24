import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info.js";
import Card from "../Card/index.js"

const List = () => {
    return <Box> {/* el error era q estaba el return separado del < Boxx>  */}
        {
            lista.cargos.map(({id, type, value, from, date}) =>{
                return <Card key = {id}>
                    <span>{ type }</span>
                    <span>{ from }</span>
                    <span>{ value }</span>
                </Card>
            })
        }
        <Btn>Ver más</Btn>
    </Box>
}

export default List;