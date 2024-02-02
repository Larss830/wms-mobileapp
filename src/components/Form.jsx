import React from "react";
import { IonInput, IonItem, IonList, IonButton } from "@ionic/react";

const Form = ({ formHeading, buttonText, inputFields }) => {
  return (
    <>
      <h3 className="login-heading" color="dark">{formHeading}</h3>
      <IonList className="ion-margin-bottom" style={{background: 'transparent'}}>
        <form>
          {inputFields.map((item) => (
            <IonItem key={item.key} style={{background: 'transparent'}}>
              <IonInput
                label={item.label}
                labelPlacement="floating"
                placeholder={item.placeholder}
                type={item.type}
                className={item.customClasses}
              ></IonInput>
            </IonItem>
          ))}
        </form>
      </IonList>

      <IonButton
        expand="block"
        shape="round"
        color="secondary"
        style={{ maxWidth: "200px", margin: "auto" }}
      >
        {buttonText}
      </IonButton>
    </>
  );
};

export default Form;
