import React from "react";
import { IonInput, IonItem, IonList, IonButton, IonRow, IonText } from "@ionic/react";

const Form = ({ formHeading, buttonText, inputFields }) => {
  return (
    <>
      {(formHeading != "") ? <h3 className="login-heading">{formHeading}</h3> : ""}
      <IonList className="ion-margin-bottom">
        {inputFields.map((item) => (
          item.type == 'html' ? <IonRow key={item.key} className='ion-margin-start'> <IonText className={item.customClasses}>{item.content}</IonText>
            </IonRow> : 
            <IonItem>
            <IonInput
             key={item.key}
              label={item.label}
              labelPlacement="floating"
              placeholder={item.placeholder}
              type={item.type}
              className={item.customClasses}
            ></IonInput>
          </IonItem>
            
        ))}
      </IonList>

      {buttonText !== "" && (
        <IonButton
          expand="block"
          shape="round"
          color="secondary"
          style={{ maxWidth: "200px", margin: "auto" }}
        >
          {buttonText}
        </IonButton>
      )}
    </>
  );
};

export default Form;
