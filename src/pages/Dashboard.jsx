import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";
import PieChart from "../components//PieChart";
import TotalValueCards from "../components/TotalValueCards";
import TotalStatBlock from "../components//TotalStatBlock";

const Dashboard = () => {
  const totalValues = [
    { key: "total-1", cardHeading: "Total Inbounds", cardValue: "1201" },
    { key: "total-2", cardHeading: "Total Sales Order", cardValue: "12120" },
    { key: "total-3", cardHeading: "Total Invoice", cardValue: "11430" },
    { key: "total-4", cardHeading: "Total Products", cardValue: "891" },
    { key: "total-5", cardHeading: "Total Suppliers", cardValue: "53" },
    { key: "total-5", cardHeading: "Total Users", cardValue: "129" },
  ];

  const totalStatValues = [
    { key: "stat-1", statHeading: "Total Collections:", statValue: "$1,155.00" },
    { key: "stat-2", statHeading: "Total Receivables:", statValue: "$720.00" },
    { key: "stat-3", statHeading: "Total PO:", statValue: "$650.00" },
  ];

  return (
    <IonPage className="dashboard-page app-padding">
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              {totalValues.map((item, index) => (
                <TotalValueCards
                  key={index}
                  cardHeading={item.cardHeading}
                  cardValue={item.cardValue}
                />
              ))}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText color="dark" className="text-medium">
                Current Activities
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText color="dark" className="text-medium">
                November 5, 2023 - January 4, 2024
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top ion-padding-bottom ion-justify-content-center ion-margin-bottom">
            <PieChart />
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              {totalStatValues.map((item, index) => (
                <TotalStatBlock
                  key={index}
                  statHeading={item.statHeading}
                  statValue={item.statValue}
                />
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
