import React from 'react';
import {Card, Row, Col, Select, Button} from 'antd';
import './../App.css'

const { Meta } = Card;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const TireSize: React.FC = () => (
    <Card
        hoverable
        style={{ width: 300,backgroundColor:'black' }}
        cover={<img alt="tireSize" src="/images/tire-sizes.png" />}
    >
        <Row >
            <Col span={8}>
                <div style={{color:"white"}}> Genişlik</div>
                <Select
                    style={{backgroundColor:'black'}}
                    defaultValue="155"
                    onChange={handleChange}
                    options={[
                        { value: '155', label: '155' },
                        { value: '175', label: '175' },
                        { value: '185', label: '185' }
                    ]}
                />
            </Col>
            <Col span={8}>
                <div style={{color:"white"}}>Oran</div>
                <Select
                    defaultValue="45"
                    onChange={handleChange}
                    options={[
                        { value: '45', label: '45' },
                        { value: '50', label: '50' },
                        { value: '55', label: '55' }
                    ]}
                />
            </Col>
            <Col span={8}>
                <div style={{color:"white"}}>Jant Çapı</div>
                <Select
                    defaultValue="13"
                    onChange={handleChange}
                    options={[
                        { value: '13', label: '13' },
                        { value: '14', label: '14' },
                        { value: '15', label: '15' }
                    ]}
                />
            </Col>
        </Row>
        <Row>
            <Button style={{ marginTop:'8%',left:'15%'}}>
                Lastikleri Görüntüle
            </Button>
        </Row>
    </Card>
);

export default TireSize;