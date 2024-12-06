import React from 'react'
import { AiOutlineBell} from 'react-icons/ai'
import styled from 'styled-components'

const NotificationsIcon = () => {
    return (
        <Notifications>
            <NotificationIcon>
                <AiOutlineBell />
            </NotificationIcon>
        </Notifications>
    )
}

export default NotificationsIcon



// ======================= STYLING =====================

const Notifications = styled.div`
background: #F5F7FA;
border-radius: 40px;
/* margin: .4rem; */
/* margin-right: 10px; */
display:flex;
justify-content:center;
align-items: center;
min-height: 35px;
min-width: 35px;`

const NotificationIcon = styled.button`
outline: none;
border: none;
background: none;
color: #FE5C73;
font-family: inherit;
letter-spacing: inherit;
text-align: center;
padding: .5rem;
display:flex;
cursor: pointer;

svg {
  font-size: 20px;
  font-weight: 900;
}
`