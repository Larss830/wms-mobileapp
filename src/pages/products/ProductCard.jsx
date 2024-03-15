import React from "react";

const ProductCard = () => {
  return (
    <IonCard
      style={{
        minHeight: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      id="open-custom-dialog"
      expand="block"
      onClick={handleCardClick}
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
  );
};

export default ProductCard;
