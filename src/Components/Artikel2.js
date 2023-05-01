import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Artikel2 = (props) => {
    return (
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
      <Tab eventKey="terbaru" title="Terbaru">
        
      </Tab>
      <Tab eventKey="popular" title="Popular">
      </Tab>
      <Tab eventKey="cacar monyet" title="Cacar Monyet">
      </Tab>
      <Tab eventKey="hepatitis" title="Hepatitis">
      </Tab>
      <Tab eventKey="kehamilan" title="Kehamilan">
      </Tab>
    </Tabs>
    )
}

export default Artikel2;