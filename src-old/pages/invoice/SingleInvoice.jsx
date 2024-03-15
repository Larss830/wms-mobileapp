import { IonText, IonPage, IonContent, IonLabel, IonTitle, IonRow, IonGrid, IonCol, IonItem, IonCard, IonCardContent, IonIcon} from "@ionic/react";
import React from "react";
import { useLocation } from 'react-router-dom'
import { listOutline, cubeOutline, readerOutline } from "ionicons/icons";

const SingleInvoice = () => {
  const location = useLocation();
  const { invoiceNum, DRNumber, invoiceDate, invoiceTime, invoicePrice, status } = location.state || {};

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
                <IonRow><IonText style={dataTextLayout}><IonLabel style={{flexGrow: 0}}> DATE: </IonLabel><strong>{invoiceDate} {invoiceTime}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel style={{flexGrow: 0}}>Invoice No. : </IonLabel><strong>{invoiceNum}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel style={{flexGrow: 0}}>DR No. : </IonLabel><strong>{DRNumber}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel style={{flexGrow: 0}}>Status: </IonLabel><strong>{status}</strong></IonText></IonRow>
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
        <IonItem>
        <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-left">From</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol style={{padding:'0 2em'}}>
                <IonRow><IonText style={dataTextLayout}><IonLabel>DATE: </IonLabel><strong>{invoiceDate} {invoiceTime}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel>Invoice No. : </IonLabel><strong>{invoiceNum}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel>DR No. : </IonLabel><strong>{DRNumber}</strong></IonText></IonRow>
                <IonRow><IonText style={dataTextLayout}><IonLabel>Status: </IonLabel><strong>{status}</strong></IonText></IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SingleInvoice;