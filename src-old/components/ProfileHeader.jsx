import React from "react";
import { IonImg, IonAvatar, IonItem, IonLabel, IonRow } from "@ionic/react";

const ProfileHeader = ({ profileName, userAvatar, profilePosition }) => {
  const profileLabelStyles = {
    marginTop: "0",
  };
  const profileHeadImgSize = {
    width: "80px",
    height: "80px",
  };
  const profileNameStyles = {
    marginBottom: "0",
    fontSize: "20px",
  };

  const profilePositionStyles = {
    fontWeight: 600,
    margin: 0,
    fontSize: "14px",
  };
  return (
    <IonRow className="profile-header ion-padding">
      <IonItem lines="none">
        <IonAvatar slot="start" style={profileHeadImgSize}>
          <IonImg
            alt="Silhouette of a person's head"
            src={userAvatar}
            style={profileHeadImgSize}
          />
        </IonAvatar>
        <IonItem>
          <IonLabel class="ion-text-nowrap" style={profileLabelStyles}>
            <h6 style={profileNameStyles}>{profileName}</h6>
            <p style={profilePositionStyles}>{profilePosition}</p>
          </IonLabel>
        </IonItem>
      </IonItem>
    </IonRow>
  );
};

export default ProfileHeader;
