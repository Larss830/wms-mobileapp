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
import SideMenu from "../../components/MainSideMenu";
import ProductsData from "../../data/ProductsData";
  

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
                <IonSearchbar className="archive-search curved" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {ProductsData.map((item) => (
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
