"use client"

import TotalCards from "@/src/components/atoms/TotalCards"
import BankCard from "@/src/components/BankCard"
import ContainerWrap from "@/src/components/layout/Container"
import RecentTransaction from "@/src/components/RecentTransaction"
import WeeklyActivity from "@/src/components/WeeklyActivity"
import { styled } from "styled-components"



const Page = () => {
  return (
    <Wrap>
        <ContainerWrap>
          <TotalCards/>
          <TotalCards/>
          <TotalCards/>
          <TotalCards/>
          <TotalCards/>
        </ContainerWrap>
      <ContainerWrap>
        <BankCard />
        <RecentTransaction />
      </ContainerWrap>
      <ContainerWrap>
        <WeeklyActivity/>
      </ContainerWrap>
      <ContainerWrap>
        <WeeklyActivity/>
      </ContainerWrap>
      <ContainerWrap>
        <WeeklyActivity/>
      </ContainerWrap>
      <ContainerWrap>
        <WeeklyActivity/>
      </ContainerWrap>

    </Wrap>
  )
}

export default Page;

const Wrap = styled.div`
/* margin-top: 5rem; */

 `