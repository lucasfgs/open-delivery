import React from 'react'

import {MdMailOutline} from 'react-icons/md'
import {IoLogoFacebook} from 'react-icons/io'

import { Container } from './styles'

export default function() {
    return (
     <Container>

        <h1>Falta pouco pra matar sua fome!</h1>
        <h2>Como deseja continuar?</h2>

        <div className="sign-actions">
            <a href="" className="btn btn-facebook"><IoLogoFacebook className="icon"/> <span>Facebook</span> </a>
            <a href="" className="btn btn-email"><MdMailOutline className="icon"/> <span>E-mail</span> </a>
        </div>

     </Container>
    )

}