"use client"

import { styled } from 'styled-components'
import { base } from '../styles/variables'


const WeeklyActivity = () => {
    return (
        <WeeklyCardContainer>
            <WeeklyCardHeader>
                <WeeklyCardTitle>Weekly Activity</WeeklyCardTitle>
            </WeeklyCardHeader>

            <BarChartContainer>win</BarChartContainer>
        </WeeklyCardContainer>
    );
};

export default WeeklyActivity;








const WeeklyCardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 63%;
`

const WeeklyCardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`
const WeeklyCardTitle = styled.p`
font-size: ${base.fontSize.t1};
font-weight: 500;
color: ${base.color.primary2};
`

const BarChartContainer = styled.div`
width: 100%;
height: 250px;
background: white;
`