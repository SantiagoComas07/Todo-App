import { Box } from "@mui/material"
import { PieChart } from "@mui/x-charts"
import { type PieValueType } from '@mui/x-charts';

export const ChartDashboard = () =>{

const taskStatusData = [
  { id: 0, label: "Pending", value: 7, color: "#7CCF35" },
  { id: 1, label: "Completed", value: 13,color: "#34A6F4" },
];
const valueFormatter = (item: PieValueType) => {
  return `${item.value} tasks`;
};
    return(
        <>
          {/* Data */}
          <Box component="div" className="grid grid-col-4 grid-rows-4 gap-4">
            <Box component="div" className="w-100 rounded-xs mt-7 ml-4 bg-emerald-50 p-5 ">
                <PieChart
              series={[
                {
                  data: taskStatusData,
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "green",
                  },
                  valueFormatter,
                },
              ]}
              height={200}
              width={200}
            />
            </Box>
            
          </Box>
        </>
    )
}