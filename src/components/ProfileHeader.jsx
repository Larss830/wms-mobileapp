import React from "react";
import { IonImg, IonAvatar, IonItem, IonLabel } from "@ionic/react";

const ProfileHeader = ({profileName, userAvatar, profilePosition}) => {
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
    <IonItem>
      <IonAvatar slot="start" style={profileHeadImgSize}>
        <IonImg
          alt="Silhouette of a person's head"
          src={userAvatar}
          style={profileHeadImgSize}
        />
      </IonAvatar>
      <IonLabel class="ion-text-nowrap">
        <h6 style={profileNameStyles}>{profileName}</h6>
        <p style={profilePositionStyles}>{profilePosition}</p>
      </IonLabel>
    </IonItem>
  );
};

export default ProfileHeader;
