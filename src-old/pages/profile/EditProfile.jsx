import React from 'react';
import userAvatar from "../../assets/male-avatar-placeholder.png";
import Form from "../../components/Form";
import { IonPage, IonRow, IonCol, IonText, IonContent, IonItem, IonAvatar, IonImg, IonLabel, IonButton } from '@ionic/react'

const EditProfile = () => {

  const profileHeadImgSize = {
    width: "150px",
    height: "150px",
  };
  const profileFields = [
    {key:'form-1', type : 'text', label: 'Company Name', placeholder: 'Project Zealous', customClasses: ''},
    {key:'form-2', type : 'text', label: 'First Name', placeholder: 'Jona', customClasses: ''},
    {key:'form-3', type : 'text', label: 'Last Name', placeholder: 'Tan', customClasses: ''},
    {key:'form-4', type : 'text', label: 'Phone', placeholder: '+639123456789', customClasses: ''},
    {key:'form-5', type : 'email', label: 'Email', placeholder: 'jdegs@mail.com', customClasses: ''},
    {key:'form-6', type : 'text', label: 'Address Line 1', placeholder: 'Sample Address One', customClasses: ''},
    {key:'form-7', type : 'text', label: 'Address Line 2', placeholder: 'Sample Address Two', customClasses: ''},
    {key:'form-8', type : 'text', label: 'City', placeholder: 'Iloilo City', customClasses: ''},
    {key:'form-9', type : 'text', label: 'State / Province / Region', placeholder: 'Western Visayas', customClasses: ''},
    {key:'form-10', type : 'text', label: 'Country', placeholder: 'Philippines', customClasses: ''},
    {key:'form-11', type : 'text', label: 'Postcode', placeholder: '5000', customClasses: ''},
  ]
  const passwordResetFields = [
    {key:'form-12', type : 'password', label: 'Password', placeholder: 'Password', customClasses: ''},
    {key:'form-13', type : 'password', label: 'Confirm Password', placeholder: 'Password', customClasses: ''},
    {key:'form-14', type : 'html', content: 'Note: Password Accepted characters (a-zA-Z0-9!~@#$%^&*)', customClasses: 'ion-margin-top  text-smaller'},
  ]

  return (
    <>
      <IonPage className="edit-profile-page" id='main-content'>
        <IonContent>
          <IonRow className="ion-justify-content-center ion-padding">
            <IonCol className="ion-justify-content-center ion-align-items-center">
              <IonRow className="ion-justify-content-center ion-margin-bottom">
                <IonAvatar style={profileHeadImgSize}>
                  <IonImg
                    alt="Silhouette of a person's head"
                    src={userAvatar}
                    style={profileHeadImgSize}
                    className="profile-image"
                  />
                </IonAvatar>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonButton
                  expand="block"
                  shape="round"
                  color="secondary"
                  style={{ maxWidth: "200px" }}
                >Edit</IonButton>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow className='ion-padding-bottom'>
            <form action="" style={{width: '100%', marginRight:'1em'}}>
              <Form formHeading='' buttonText='' inputFields={profileFields} />
              <IonRow className='ion-margin-top ion-margin-start'>
                <IonText className='ion-margin-top'>Change password</IonText>
              </IonRow>
              <Form formHeading='' buttonText='Save' inputFields={passwordResetFields} />
            </form>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  )
}

export default EditProfile