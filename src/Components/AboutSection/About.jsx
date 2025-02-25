import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutImage from '../../assets/AboutImage.webp'
import AboutImage2 from '../../assets/AboutImage2.webp'
const About = () => {
  return (
    <Box sx={{
        opacity:'0.5',
        width:'100vw',
        backgroundColor:'#03296E',

    }}>
        <Typography sx={{
            color:'#fff',
            paddingX:5,
            paddingY:2,
            textAlign:'center'
        }}>

        ABOUT DORLABS TECH
        </Typography>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row'},
            justifyContent:'center',
            alignItems:'center'
        }}>

            
        {/* about section1 */}
        <Box sx={{
            display:'flex',
            flexDirection:'column'
        }}>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column',sm:'row'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>
            </Box>
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
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
                    fontSize:'2rem',
                    overflow:'hidden'
                }}>
                     About Company
                </Typography>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    px:2,
                    fontSize:{xs:'14px', sm:'18px'},
                    overflow:'hidden'
                }}>
                     At Dorlabs tech, we specialize in creating innovative, High- performance iOS apps that stand out on the App Store and deliver an exceptional User experience. Whether you're building a new app or enhancing an existing one, our team of skilled iOS developers is here to help! 
                </Typography>
                </Box>
                </Box>
                {/* about section 2 */}
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row-reverse'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage2})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>               
            </Box>

            
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
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
                    fontSize:'1.5rem',
                    overflow:'hidden'
                }}>
                     Your Tech Solution Partner
                </Typography>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    px:2,
                    fontSize:{xs:'14px', sm:'18px'},
                    overflow:'hidden'
                }}>
                      In today’s fast-paced digital world, the right tech partner makes all the difference. At [DORLABS TECH], we offer innovative solutions designed to help your business grow and succeed. From advanced software development to seamless IT infrastructure, we provide the tools, expertise, and support needed to thrive in a competitive market.
                </Typography>
                </Box>
                </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default About