import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import john from "../assets/JOHN.png"

const ProfileIcon = () => {
    return (
        <Profile>
            <ProfileImage src={john}
                alt='Profile Photo'
                height={80}
            width={90}/>
        </Profile>
    )
}

export default ProfileIcon



// ======================= STYLING =====================

const Profile = styled.div`
margin-left: 1rem;
height: 43px;
width: 43px;
cursor: pointer;
`
const ProfileImage = styled(Image)`
border-radius: 40px;
height: 100%;
width: 100%;
object-fit: cover;
`