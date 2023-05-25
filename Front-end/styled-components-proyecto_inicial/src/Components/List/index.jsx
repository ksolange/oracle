import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info.js";
import Card from "../Card/index.js"

const List = () => {
	console.log(lista)
    return <Box> {/* el error era q estaba el return separado del < Boxx>  */}
        {
            lista.cargos.map((cargo, i) =>{ // el problema era { } dentro esta el cargo, i; eran sin {}
                return <Card key = {i} cargo = {cargo}/>
            })
        }
        <Btn>Ver más</Btn>
    </Box>
}

export default List;