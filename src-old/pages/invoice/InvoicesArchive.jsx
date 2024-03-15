import React from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonCard,
  IonText,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import InvoicesData from "../../data/InvoicesData.js";

const cardTextStyles = {
  textDecoration: "none",
};

const InvoicesArchive = () => {
  return (
    <>
      <IonPage className="invoices-page" id="main-content">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-center">Invoices</IonTitle>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonButton>
                  <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonSearchbar className="archive-search curved" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {InvoicesData.map((item) => (
                  <Link
                    to={{
                      pathname: `/single-invoice/num-${item.invoiceNum}`,
                      state: {
                        invoiceNum: item.invoiceNum,
                        DRNumber: item.DRNumber,
                        invoiceDate: item.invoiceDate,
                        invoiceTime: item.invoiceTime,
                        invoicePrice: item.invoicePrice,
                        status: item.status,

                      },
                    }}
                    style={cardTextStyles}
                    key={item.invoiceNum}
                  >
                    <IonCard className="ion-padding ion-margin-bottom box-shadow curved">
                      <IonRow>
                        <IonCol size="6">
                          <IonText className="bold">
                            INVOICE - {item.invoiceNum}
                          </IonText>
                          <br />
                          <IonText style={cardTextStyles}>
                            {item.invoiceDate}
                          </IonText>
                        </IonCol>
                        <IonCol
                          size="6"
                          className="ion-text-right ion-align-items-center"
                        >
                          <IonText>${item.invoicePrice}</IonText>
                        </IonCol>
                      </IonRow>
                    </IonCard>
                  </Link>
                ))}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default InvoicesArchive;
