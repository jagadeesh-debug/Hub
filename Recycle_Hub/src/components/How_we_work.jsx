import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Paper from '@mui/material/Paper';

const paperstyle={
    padding: '8px 1px',
    textAlign:'center',
}

export default function Work() {
    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} style={paperstyle}>Step 1 : Write
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} style={paperstyle}>Step 2 : Draft
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} 
                       style={paperstyle}>Step 3 : Pending
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} 
                       style={paperstyle}>Step 4 : Publish
                </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}