import {
  IonText,
  IonPage,
  IonContent,
  IonLabel,
  IonTitle,
  IonRow,
  IonGrid,
  IonCol,
  IonItem,
  IonCard,
  IonInput,
  IonCardContent,
  IonIcon,
  IonModal,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
} from "@ionic/react";
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { listOutline, cubeOutline, readerOutline } from "ionicons/icons";

const SingleInvoice = () => {
  const location = useLocation();
  const {
    invoiceNum,
    DRNumber,
    invoiceDate,
    invoiceTime,
    invoicePrice,
    status,
  } = location.state || {};

  const dataTextLayout = {
    display: "flex",
    width: "100%",
    gap: ".5em",
  };

  const dataLabelStyles = {
    flexGrow: 0,
    fontWeight: 400,
  };

  const [showModal, setShowModal] = useState(false);

  const [orderQtyValue, setOrderQtyValue] = useState(0);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleQtyValueChange = (event) => {
    setOrderQtyValue(event.target.value);
  };

  const productRetailPrice = 15.00

  return (
    <IonPage className="invoices-single-page" id="main-content">
      <IonContent>
        <IonItem className="ion-padding-top">
          <IonGrid style={{ padding: "1em 0" }}>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-center">Invoice Order</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonText style={dataTextLayout} className="text-medium">
                    <IonLabel style={dataLabelStyles}> DATE: </IonLabel>
                    {invoiceDate} {invoiceTime}
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText style={dataTextLayout} className="text-medium">
                    <IonLabel style={dataLabelStyles}>Invoice No. : </IonLabel>
                    {invoiceNum}
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText style={dataTextLayout} className="text-medium">
                    <IonLabel style={dataLabelStyles}>DR No. : </IonLabel>
                    {DRNumber}
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText style={dataTextLayout} className="text-medium">
                    <IonLabel style={dataLabelStyles}>Status: </IonLabel>
                    {status}
                  </IonText>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard
                  style={{
                    minHeight: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IonCardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IonIcon icon={listOutline} size="large"></IonIcon>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard
                  style={{
                    minHeight: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IonCardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IonIcon icon={readerOutline} size="large"></IonIcon>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard
                  style={{
                    minHeight: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IonCardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IonIcon icon={cubeOutline} size="large"></IonIcon>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem>
          <IonGrid style={{ padding: "1em 0" }}>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-left">From</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol style={{ padding: "0 2em" }}>
                <IonRow>
                  <IonText className="text-medium text-small">
                    WMS Supplier
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">Jona Tan</IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">
                    194 Manufacturers Trail Apt 4 Philadelphia Pennsylvania
                    19172 United States
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">+639123456789</IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">wmssupplier@mail.com</IonText>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem>
          <IonGrid style={{ padding: "1em 0" }}>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-left">Customer</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol style={{ padding: "0 2em" }}>
                <IonRow>
                  <IonText className="text-medium text-small">
                    Jon’s Warehouse Phil.
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">John Doe</IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">
                    21 Jump Street, Building 404 Los Angeles 2910 United States
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">+639123456789</IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-small">wmscustomer@mail.com</IonText>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem>
          <IonGrid style={{ padding: "1em 0" }}>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-left">Products</IonTitle>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCard
                    style={{ minHeight: "70px", width: "100%" }}
                    id="open-custom-dialog"
                    expand="block"
                    onClick={handleCardClick}
                  >
                    <IonCardHeader>
                      <IonCardSubtitle>TC-123</IonCardSubtitle>
                      <IonCardTitle>Twix Chocolate</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      Total: <strong>&nbsp; $720.00</strong>
                    </IonCardContent>
                  </IonCard>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        className="custom-modal"
      >
        <IonRow className="ion-padding">
          <IonTitle class="ion-text-center">
            <h5>Product Information</h5>
          </IonTitle>
          <IonGrid>
            <IonRow>
              <IonGrid className="popup-info-header prod-info-header">
                <IonRow>
                  <IonText className="ion-text-left">
                    <h6>Product Information</h6>
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="text-smaller">
                    <p>
                      <strong>TOBC-002</strong>
                    </p>
                  </IonText>
                </IonRow>
              </IonGrid>
            </IonRow>
            <IonRow>
              <IonGrid className="popup-info-desc prod-info-desc">
                <IonText className="text-smaller">
                  <p>
                    Quisque id justo sit amet sapien dignissim vestibulum
                    vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.
                    Donec odio justo, sollicitudin ut, suscipit a, feugiat.
                  </p>
                </IonText>
              </IonGrid>
            </IonRow>
            <IonRow>
              <IonGrid className="popup-info-details prod-info-details">
                <IonItem>
                  <IonGrid className="ion-padding">
                    <IonRow>
                      <IonText style={{display:'flex', marginBottom:'.5em'}}className="text-small">
                        Order Quantity:{" "}
                        <IonInput style={{flex:'1', minHeight:'1em', marginLeft:'.5em'}} type="number" min={0} placeholder={20} onIonChange={handleQtyValueChange}></IonInput>
                      </IonText>
                      <IonText className="text-small">
                        Retail Price:{" "}
                        <span className="text-medium">${productRetailPrice}</span>
                      </IonText>
                    </IonRow>
                  </IonGrid>
                </IonItem>
                <IonRow className="ion-justify-content-end ion-margin-top">
                  <IonText span className="text-small">
                    Total Price: <span className="text-medium">${productRetailPrice * orderQtyValue}</span>
                  </IonText>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-margin-top">
                  <IonButton shape="round" size="small" className="ion-padding-horizontal">Add Item</IonButton>
                </IonRow>
              </IonGrid>
            </IonRow>
          </IonGrid>
        </IonRow>
      </IonModal>
    </IonPage>
  );
};

export default SingleInvoice;
