"use client"

import TotalCards from "@/src/components/atoms/TotalCards"
import BankCard from "@/src/components/BankCard"
import Greeting from "@/src/components/Greeting"
import ContainerWrap from "@/src/components/layout/Container"
import MainWrapper from "@/src/components/layout/MainWrapper"
import RecentTransaction from "@/src/components/RecentTransaction"
import WeeklyActivity from "@/src/components/WeeklyActivity"
import { styled } from "styled-components"



const Page = () => {
  return (
    <MainWrapper>
      <ContainerWrap>
        <Greeting/>
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

    </MainWrapper>
  )
}

export default Page;
