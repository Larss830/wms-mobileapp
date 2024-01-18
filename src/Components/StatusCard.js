import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function StatusCard({title, value}) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title} <span className='value'></span></IonCardTitle>
        <IonCardSubtitle>{value}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
}
export default StatusCard;