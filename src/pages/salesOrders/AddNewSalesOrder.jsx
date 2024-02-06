import React from 'react'
import { IonPage, IonRow, IonTitle, IonCol, IonText, IonContent, IonItem, IonSelect, IonSelectOption, IonButton, IonTextarea } from '@ionic/react'

const AddNewSalesOrder = () => {
  return (
    <>
      <IonPage className='ion-padding'>
        <IonContent>
          <IonRow className='ion-padding-bottom'>
            <IonTitle className='ion-text-center'>Create Sales Order</IonTitle>
          </IonRow>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
              <IonText>DATE: <span className="bold">2023-12-27 09:40 AM</span></IonText>
              <IonText>Sale Order No. : <span className="bold">0003</span></IonText>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
              <IonTitle style={{ paddingLeft: '0', paddingRight: '0' }}>From</IonTitle>
              <IonRow className='ion-margin-start'>
                <IonCol>
                  <IonRow>
                    <IonText className='bold'>WMS Supplier</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Jona Tan</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>194 Manufacturers Trail Apt 4 Philadelphia Pennsylvania 19172 United States</IonText>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
                <IonTitle style={{ paddingLeft: '0', paddingRight: '0' }}>Customer</IonTitle>
                <IonRow className='ion-margin-start'>
                  <IonCol>
                    <IonSelect label="" placeholder="Select Customer">
                      <IonSelectOption value="1">Customer 001</IonSelectOption>
                      <IonSelectOption value="2">Customer 002</IonSelectOption>
                      <IonSelectOption value="3">Customer 003</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
                <IonTitle style={{ paddingLeft: '0', paddingRight: '0' }}>Products</IonTitle>
                <IonRow className='ion-margin-start'>
                  <IonCol>
                    <IonSelect label="" placeholder="Select Products">
                      <IonSelectOption value="1">Product 001</IonSelectOption>
                      <IonSelectOption value="2">Product 002</IonSelectOption>
                      <IonSelectOption value="3">Product 003</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                  <IonCol>
                    <IonButton>Add Item</IonButton>
                  </IonCol>
                </IonRow>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
              <IonCol>
                <IonTitle style={{ paddingLeft: '0', paddingRight: '0' }}>Amount Due</IonTitle>
                <IonRow className='ion-margin-start'>
                  <IonCol>
                    <IonRow>
                      <IonCol>
                        <IonText>SubTotal:</IonText>
                      </IonCol>
                      <IonCol>
                        <IonText>$0.00</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>COD Discount:</IonText>
                      </IonCol>
                      <IonCol>
                        <IonText>0.00</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>Tax:</IonText>
                      </IonCol>
                      <IonCol>
                        <IonText>0.00</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>Others:</IonText>
                      </IonCol>
                      <IonCol>
                        <IonText>0.00</IonText>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow className='ion-padding-vertical'>
                <IonTitle style={{ paddingLeft: '0', paddingRight: '0' }}>Remarks</IonTitle>
                <IonRow>
                  <IonTextarea aria-label="Comments" value="Lorem Ipsum"></IonTextarea>
                </IonRow>
                <IonRow>
                  <IonText>Terms: </IonText>
                  <IonSelect label="" placeholder="Select Terms">
                    <IonSelectOption value="1">Term 001</IonSelectOption>
                    <IonSelectOption value="2">Term 002</IonSelectOption>
                    <IonSelectOption value="3">Term 003</IonSelectOption>
                  </IonSelect>
                </IonRow>
            </IonRow>
          </IonItem>
        </IonContent>
      </IonPage>
    </>
  )
}

export default AddNewSalesOrder