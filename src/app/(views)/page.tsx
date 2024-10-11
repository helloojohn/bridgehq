"use client"

import BankCard from "@/src/components/BankCard"
import ContainerWrap from "@/src/components/layout/container"
import RecentTransaction from "@/src/components/RecentTransaction"

const page = () => {
  return (
    <ContainerWrap>
      <BankCard />
      <RecentTransaction/>
    </ContainerWrap>
  )
}

export default page