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
display:flex;
justify-content:center;
align-items: center;
margin-left: 0.7rem;
height: 37px;
width: 37px;
cursor: pointer;
`
const ProfileImage = styled(Image)`
border-radius: 50px;
height: 100%;
width: 100%;
object-fit: cover;
`