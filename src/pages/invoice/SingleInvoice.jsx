import { IonText } from '@ionic/react'
import React from 'react'

const SingleInvoice = () => {
  return (
    <div>
        <IonText>{invoiceNum}</IonText>
        <IonText>{invoiceDate}</IonText>
        <IonText>{invoicePrice}</IonText>
    </div>
  )
}

export default SingleInvoice