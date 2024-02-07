import { IonText, IonPage, IonContent, IonLabel, IonTitle, IonRow, IonGrid, IonCol, IonItem, IonCard, IonCardContent, IonIcon} from "@ionic/react";
import React from "react";
import { useLocation } from 'react-router-dom'
import { listOutline, cubeOutline, readerOutline } from "ionicons/icons";

const SingleInvoice = () => {
  const location = useLocation();
  const { invoiceNum, invoiceDate, invoicePrice } = location.state || {};

  const dataTextLayout ={
    display:'flex',
    width:'100%',
    gap: '.5em'
  }
    

  return (
    <IonPage className="invoices-single-page ion-padding-top" id="main-content">
      <IonContent>
        <IonItem>
          <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-center">Invoice Order</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow><IonText style={dataTextLayout}><strong><IonLabel>Invoice Number: </IonLabel></strong>{invoiceNum}</IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><strong><IonLabel>Invoice Date: </IonLabel></strong>{invoiceDate}</IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><strong><IonLabel>Invoice Price: </IonLabel></strong>${invoicePrice}</IonText></IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard style={{minHeight:'70px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                  <IonCardContent style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><IonIcon icon={listOutline} size="large"></IonIcon></IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard style={{minHeight:'70px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                  <IonCardContent style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><IonIcon icon={readerOutline} size="large"></IonIcon></IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard style={{minHeight:'70px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                  <IonCardContent style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><IonIcon icon={cubeOutline} size="large"></IonIcon></IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SingleInvoice;