import React from 'react'
import { Translation } from 'react-i18next';
import Container from 'react-bootstrap/Container'

export const Dashboard = () => (

  <Container fluid>
    <div direction="column">
      <Translation>
        {t => <h2>{t('dashboard')}</h2>}
      </Translation>
    </div>
  </Container>
);

export default Dashboard;
