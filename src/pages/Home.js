import React from "react";
import { Box } from "@mui/system";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Feed from "../components/Feed";
export default function Home(){
    return(
        <Box>
            <Header />
            <LeftSideBar />
            <Box sx={{margin:'0 360px 0 300px', padding:'16px 16px', marginTop:'80px'}}>
                <Feed />
            </Box>
            <RightSideBar />
        </Box>

    )
}