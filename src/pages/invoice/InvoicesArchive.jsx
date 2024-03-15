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
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonItem,
} from "@ionic/react";
import { menuOutline, trashOutline } from "ionicons/icons";
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
                    <IonItemSliding style={{ width: "100%" }}>
                      <IonItem lines="none">
                        <IonCard
                          className="box-shadow curved"
                          style={{
                            width: "100%",
                            margin: "5px",
                            minHeight: "76px",
                          }}
                        >
                          <IonRow style={{ minHeight: "76px" }}>
                            <IonCol
                              size="6"
                              className=" ion-align-items-center"
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                paddingLeft: "1em",
                                gap: "10px",
                              }}
                            >
                              <IonText className="bold">
                                INVOICE - {item.invoiceNum}
                              </IonText>
                              {/* <br /> */}
                              <IonText style={cardTextStyles}>
                                {item.invoiceDate}
                              </IonText>
                            </IonCol>
                            <IonCol
                              size="6"
                              className=" ion-align-items-center"
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                paddingLeft: "1em",
                                gap: "1em",
                                justifyContent: 'flex-end'
                              }}
                            >
                              <IonText>${item.invoicePrice}</IonText>
                            </IonCol>
                          </IonRow>
                        </IonCard>
                      </IonItem>
                      <IonItemOptions>
                        <IonItemOption
                          style={{ width: "76px", minHeight: "76px" }}
                          color="danger"
                          className="curved"
                        >
                          <IonIcon
                            style={{ width: "40px" }}
                            icon={trashOutline}
                            size="large"
                          />
                        </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
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
