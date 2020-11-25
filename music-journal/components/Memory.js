import React, { useState } from 'react';
import withAuth from '../utils/withAuth';
import AddMemory from '../components/AddMemory'
import ListMemories from '../components/ListMemories'
const Memory = (props) => {
    // Set state here and pass it down so that can automatically refresh the list on successful submission?
    return (<>
        <AddMemory {...props} />
        <ListMemories {...props}/>
    </>
    )

}

export default withAuth(Memory);
