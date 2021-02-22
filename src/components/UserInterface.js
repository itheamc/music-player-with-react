import React from 'react'
import { Flex } from '@chakra-ui/react'
import MusicPlayer from './MusicPlayer'

const UserInterface = () => {
    return (
        <Flex 
        w = "300px" 
        h = "90vh" 
        align = "center"
        justify = "center"
        boxShadow = "6xl"
        bgGradient= "linear(to-r, gray.300, yellow.400, pink.200)"
        rounded = "xl">

            {/* Here music player properties will be passed */}
            <MusicPlayer />
        </Flex>
    )
}

export default UserInterface
