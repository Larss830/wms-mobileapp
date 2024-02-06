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

const productsList = [
  { productNum: "0001", productDate: "01-01-2024", productPrice: 1020.0 },
  { productNum: "0002", productDate: "01-02-2024", productPrice: 1230.0 },
  { productNum: "0003", productDate: "01-03-2024", productPrice: 4570.0 },
  { productNum: "0004", productDate: "01-04-2024", productPrice: 520.0 },
  { productNum: "0005", productDate: "01-05-2024", productPrice: 750.0 },
  { productNum: "0006", productDate: "01-01-2024", productPrice: 1020.0 },
  { productNum: "0007", productDate: "01-02-2024", productPrice: 1230.0 },
  { productNum: "0008", productDate: "01-03-2024", productPrice: 4570.0 },
  { productNum: "0009", productDate: "01-04-2024", productPrice: 520.0 },
  { productNum: "0010", productDate: "01-05-2024", productPrice: 750.0 },
];

const ProductsArchive = () => {
  return (
    <>
      <SideMenu />
      <IonPage className="products-page" id="main-content">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonTitle className="ion-text-center">Products</IonTitle>
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
                <IonSearchbar className="products-search curved" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {productsList.map((item) => (
                  <IonCard
                    className="ion-padding ion-margin-bottom box-shadow curved"
                    key={item.productNum}
                  >
                    <IonRow>
                      <IonCol size="6">
                        <IonText className="bold">
                          PRODUCT - {item.productNum}
                        </IonText>
                        <br />
                        <IonText>{item.productDate}</IonText>
                      </IonCol>
                      <IonCol
                        size="6"
                        className="ion-text-right ion-align-items-center"
                      >
                        <IonText>${item.productPrice}</IonText>
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

export default ProductsArchive;
