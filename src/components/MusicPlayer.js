import React, { useState, useEffect} from 'react'
import { 
    Box,
    Flex, 
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb } from '@chakra-ui/react'

const MusicPlayer = () => {
    const [time, setTime] = useState(0);
    const [dur, setDur] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonLabel, setbuttonLabel] = useState("Play Now");

    useEffect(() => {
        console.log(time);
        console.log(dur);
    }, [time, dur]);

    // Function to play the music
    const playNow = () => {
        const music = document.getElementById("music");
        music.play()
        music.addEventListener('timeupdate', (event) => {
            const {currentTime, duration} = event.target;
            setTime(currentTime);
            if(dur === 1) {
                setDur(duration);
            }
        });
    };

    // Function to payse the music
    const pauseNow = () => {
        const music = document.getElementById("music");
        music.pause();
    };



    // control the play pause the music
    const play_pause = () => {
        if (isPlaying) {
            setIsPlaying(false);
            pauseNow();
            setbuttonLabel("Play Now");
        } else {
            setIsPlaying(true);
            playNow();
            setbuttonLabel("Pause Now");
        }
    };

    // Updating the current time 
    // whenever user move the slider or click anywhere on the slider
    const updateTime = (value) => {
        const music = document.getElementById("music");
        music.currentTime = (dur*value)/100;
    };



    return (
        <Box w = "100%" display = "block">
            <audio src="https://funksyou.com/fileDownload/Songs/128/34860.mp3" id="music"></audio>
            <Slider 
            w = "80%" 
            aria-label="slider-ex-2" 
            colorScheme="pink" 
            defaultValue = {0} 
            value={(time/dur)*100} 
            onChange = {(value) => updateTime(value)}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            <Button onClick = {play_pause} rounded = {200}>{buttonLabel}</Button>
        </Box>
    )
}

export default MusicPlayer
