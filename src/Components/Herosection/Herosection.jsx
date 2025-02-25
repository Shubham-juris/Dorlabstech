import React from 'react'
import { Container, Typography, Box, Button } from "@mui/material";
import HeroImage from '../../assets/heroImage.webp'
const Herosection = () => {
    return (
        <Box sx={{
            opacity:'0.5',
            backgroundColor: '#012B78',
            width: '100vw',
            height: 'auto',

        }}>
            <Typography sx={{
                textAlign: 'center',
                color: '#fff',
                py: 5,
                fontWeight: '700',
                fontSize: {xs:'1rem', sm:'2rem'},
                fontFamily: 'Indigo Outline, arial, sans-serif',
                letterSpacing: '6px',
            }}>
                DORLABS TECH
            </Typography>

            {/* herosection */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '80vh',
                alignItems: 'center',
                width: '100%',
                flexDirection: { xs: 'column', md: 'row' },
                // px:1
            }}>
                <Box sx={{
                    width: { xs: '100vw', sm: '60vw', md: '40vw' },
                    // height:{xs:'400px', sm:'40vh'},
                    height:'600px',
                    display: 'flex',
                    backgroundImage: `url(${HeroImage})`,  // ✅ Corrected syntax
                    backgroundSize: 'cover',  // Ensures the image covers the container
                    backgroundPosition: 'center', // Centers the image
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>
                {/* <img style={{
                        py:{xs:'10vw',sm:'0',},
                        width:{xs:'80vw', sm:'60vw', md:'40vw'},
                        height:'400px'
                    }} src={HeroImage} alt="" /> */}
            </Box>
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100vw', sm: '60vw', md: '40vw' },
                backgroundColor: '#012161',
            }}>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    overflow:'hidden'
                }}>
                    WELCOME
                </Typography>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    px: 3,
                    overflow:'hidden'
                }}>
                    Revolutionize Your Business with Cutting-Edge IT Services
                </Typography>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    px: 3,
                    overflow:'hidden'
                }}>
                    "Dive into the virtual world where the extraordinary becomes your reality"
                </Typography>
                <Button sx={{
                    color: '#fff',
                    border: '2px solid white',
                    my: 2,
                    overflow:'hidden'
                }}>
                    LEARN MORE
                </Button>
            </Box>
        </Box>
        </Box >
  )
}

export default Herosection