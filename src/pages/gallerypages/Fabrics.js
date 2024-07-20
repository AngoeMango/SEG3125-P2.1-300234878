// src/components/Fabrics.js
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FabricCard from '../../components/card/FabricCard';
import '../../styles/Fabrics.css';
import SamplePhoto from '../../media/SamplePhoto.png';

const fabricData = [
    {
        name: 'SILK',
        description: 'Silk is the epitome of luxury, known for its smooth texture and lustrous sheen. This natural fiber drapes beautifully, making it ideal for flowing gowns and elegant evening wear. Its lightweight and breathable qualities ensure comfort while exuding sophistication. Perfect for formal occasions, silk adds a touch of opulence to any outfit.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Natural',
        colors: ['White', 'Black', 'Red']
    },
    {
        name: 'SATIN',
        description: 'Satin is cherished for its glossy surface and smooth feel. Often made from silk or synthetic fibers, this fabric reflects light, creating a beautiful shimmer. Satin is commonly used in bridal gowns, evening dresses, and lingerie due to its elegant appearance and drapability. Its soft texture makes it a favorite for garments that require a luxurious touch.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Synthetic',
        colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Pink']
    },
    {
        name: 'CHIFFON',
        description: 'Chiffon is a lightweight, sheer fabric with a slightly rough texture. Made from silk, nylon, or polyester, chiffon adds a delicate and airy quality to garments. It’s perfect for layered dresses, blouses, and scarves. Chiffon’s flowing nature makes it ideal for summer wear and formal attire, providing an ethereal look.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Synthetic',
        colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Pink']
    },
    {
        name: 'LACE',
        description: 'Lace is a delicate fabric characterized by its open weblike pattern. Made from cotton, silk, or synthetic fibers, lace adds a touch of romance and elegance to any garment. It’s often used in bridal wear, evening dresses, and lingerie. Lace can be layered over other fabrics to create a beautiful contrast of textures.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Natural',
        colors: ['White', 'Black']
    },
    {
        name: 'LINEN',
        description: 'Linen is a natural fiber known for its breathability and crisp texture. Perfect for summer wear, linen keeps you cool and comfortable. It’s highly durable and becomes softer with each wash. Linen’s slightly rough texture and matte finish give it a casual yet sophisticated look, making it ideal for both formal and casual garments.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Natural',
        colors: ['Beige', 'White']
    },
    {
        name: 'VELVET',
        description: 'Velvet is a plush fabric with a distinctive soft pile. Made synthetic fibers, velvet exudes luxury and warmth. Its rich texture and depth of color make it perfect for evening wear, jackets, and accessories. Velvet adds a touch of drama and elegance to any outfit.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Synthetic',
        colors: ['Red', 'Blue', 'Green', 'Black']
    },
    {
        name: 'TULLE',
        description: 'Tulle is a lightweight, netted fabric often used for veils, tutus, and wedding gowns. Made from nylon, or polyester, tulle creates a voluminous and airy effect. Its fine mesh structure makes it ideal for adding layers and structure to garments, providing a whimsical and delicate appearance.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Synthetic',
        colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black']
    },
    {
        name: 'ORGANZA',
        description: 'Organza is a sheer, lightweight fabric with a crisp texture. Made from polyester or synthetic fibers, organza is often used in evening wear, bridal gowns, and formal attire. Its stiff nature allows it to hold shapes well, making it perfect for creating structured silhouettes and intricate designs.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Synthetic',
        colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Pink']
    },
    {
        name: 'BROCADE',
        description: 'Brocade is a richly decorative fabric often made from silk, with raised patterns woven into the material. It’s traditionally used for upholstery and evening wear due to its heavy texture and intricate designs. Brocade adds a regal and opulent touch to garments, making it ideal for special occasions.',
        image: '../../media/SamplePhoto.png',
        fiberType: 'Natural',
        colors: ['Red', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Pink']
    },
];

const uniqueColors = Array.from(new Set(fabricData.flatMap(fabric => fabric.colors)));

const Fabrics = () => {
    const [selectedFiberTypes, setSelectedFiberTypes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const handleFiberFilterChange = (event) => {
        const { value, checked } = event.target;
        setSelectedFiberTypes((prevSelectedFiberTypes) =>
        checked
            ? [...prevSelectedFiberTypes, value]
            : prevSelectedFiberTypes.filter((type) => type !== value)
        );
    };

    const handleColorFilterChange = (event) => {
        const { value, checked } = event.target;
        setSelectedColors((prevSelectedColors) =>
        checked
            ? [...prevSelectedColors, value]
            : prevSelectedColors.filter((color) => color !== value)
        );
    };

    const filteredFabrics = fabricData.filter(
        (fabric) => 
        (selectedFiberTypes.length === 0 || selectedFiberTypes.includes(fabric.fiberType)) &&
        (selectedColors.length === 0 || fabric.colors.some(color => selectedColors.includes(color)))
    );

    return (
        <Container className="fabrics-gallery mt-5">
            <h1 className="text-center">Fabrics Gallery</h1>
            <p className="body">Welcome to our Fabric Gallery, where you can explore the diverse and luxurious materials that form the foundation of our couture creations. Each fabric has its unique characteristics, bringing a distinct texture, sheen, and feel to our designs. Delve into the world of fabrics and learn about the qualities that make each one special, helping you make informed choices for your custom garments.</p>

            <Row className="mb-4">
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Fiber Type</Form.Label>
                    <Form.Check
                    type="checkbox"
                    id="natural-fibers"
                    label="Natural Fibers"
                    value="Natural"
                    onChange={handleFiberFilterChange}
                    />
                    <Form.Check
                    type="checkbox"
                    id="synthetic-fibers"
                    label="Synthetic Fibers"
                    value="Synthetic"
                    onChange={handleFiberFilterChange}
                    />
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Colors</Form.Label>
                    {uniqueColors.map((color, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        onChange={handleColorFilterChange}
                    />
                    ))}
                </Form.Group>
                </Col>
            </Row>

            <Row>
                {filteredFabrics.map((fabric, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
                    <FabricCard fabric={fabric} />
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Fabrics;