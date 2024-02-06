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
  IonMenuToggle,

} from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import SideMenu from "../../components/SideMenu";

const invoiceList = [
  { invoiceNum: "0001", invoiceDate: "01-01-2024", invoicePrice: 1020.0 },
  { invoiceNum: "0002", invoiceDate: "01-02-2024", invoicePrice: 1230.0 },
  { invoiceNum: "0003", invoiceDate: "01-03-2024", invoicePrice: 4570.0 },
  { invoiceNum: "0004", invoiceDate: "01-04-2024", invoicePrice: 520.0 },
  { invoiceNum: "0005", invoiceDate: "01-05-2024", invoicePrice: 750.0 },
  { invoiceNum: "0006", invoiceDate: "01-01-2024", invoicePrice: 1020.0 },
  { invoiceNum: "0007", invoiceDate: "01-02-2024", invoicePrice: 1230.0 },
  { invoiceNum: "0008", invoiceDate: "01-03-2024", invoicePrice: 4570.0 },
  { invoiceNum: "0009", invoiceDate: "01-04-2024", invoicePrice: 520.0 },
  { invoiceNum: "0010", invoiceDate: "01-05-2024", invoicePrice: 750.0 },
];

const InvoicesArchive = () => {
  return (
    <>
      <SideMenu />
      <IonPage className="invoices-page" id="main-content">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-center">Invoices</IonTitle>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonMenuToggle>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol>
                <IonSearchbar className="invoices-search curved" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {invoiceList.map((item) => (
                  <IonCard
                    className="ion-padding ion-margin-bottom box-shadow curved"
                    key={item.invoiceNum}
                  >
                    <IonRow>
                      <IonCol size="6">
                        <IonText className="bold">
                          INVOICE - {item.invoiceNum}
                        </IonText>
                        <br />
                        <IonText>{item.invoiceDate}</IonText>
                      </IonCol>
                      <IonCol
                        size="6"
                        className="ion-text-right ion-align-items-center"
                      >
                        <IonText>${item.invoicePrice}</IonText>
                      </IonCol>
                    </IonRow>
                  </IonCard>
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
