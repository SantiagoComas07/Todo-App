import { Box, Typography } from "@mui/material"
import { PieChart } from '@mui/x-charts/PieChart';


export const Charts = () =>{





    return(
        <>
        <Box component="section" className="w-full h-screen flex ">
            <Box component="div" 
            sx={{backgroundColor: "secondary.light"}} 
            className="w-80 h-10 text-center flex flex-col justify-center px-4 ml-4">
                <Typography variant="overline"><span className="font-bold text-sm text-emerald-700">Charts</span> - Analize your data</Typography>
            </Box>
            <Box>
                {/* Data */}
            </Box>
        </Box>
        </>

    )
}