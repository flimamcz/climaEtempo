import React from 'react'
import {Modal} from './style'
import imgUnder from '../../assets/images/page-mnt.svg'

const index = () => {
  return (
    <Modal>
        <p>Estamos em manutenção, já voltamos!</p>
        <img src={imgUnder} alt="imagem page under manuteince" width={300}/>
    </Modal>
  )
}

export default index