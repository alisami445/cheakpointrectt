      import React from 'react';
      import './App.css';
      import amazonforet from './amazonforet.png'
      import congggg from './congggg.png'
      import fonttttt from './fonttttt.png'
      import 'bootstrap/dist/css/bootstrap.min.css';
      import { Card , Button,Form,Col} from 'react-bootstrap';
      import { AiFillFacebook , AiFillInstagram } from "react-icons/ai";

      function App() {
        return (
          <>
          <div className="App">
            <h1 className="titre">LA NATURE</h1>
      
      <h1 className="la-nature">c'est quoi la nature</h1>
      <div className="text-page">
      <p>Le mot nature est un terme polysémique (c’est-à-dire qu'il a plusieurs sens) : il peut signifier la composition et la matière d'une chose (ce qu'elle est, son essence), l'origine et le devenir d'une chose, l'ensemble du réel indépendant de la culture humaine, 
        ou l'ensemble des systèmes et des phénomènes naturels .</p>
        <p>La première grande philosophie de la nature se trouve dans l'oeuvre d'Aristote. Selon lui, « la nature ne fait rien en vain », ce qui signifie que la nature est une puissance orientée vers certaines fins. L'explication scientifique consistera donc à découvrir cette finalité. Par exemple, si l'eau monte dans un tuyau dont on aspire l'air, c'est parce que "la nature a horreur du vide". Selon Jan Patocka,
           « On peut demander si cette philosophie ne nous offre pas un cas typique d'anthropomorphisme </p>
        </div>
        <h1 className="la-nature" >Que puis-je faire pour protéger l'environnement ?</h1>
        <h2 className="lalal">L’eau :</h2>
        <p className="text-page">L’eau est une ressource précieuse. Pour réduire votre consommation d’eau, vous pouvez :</p>
        <p className="text-page">1-Fermer le robinet pendant que vous vous brossez les dents ou que vous vous lavez les mains.</p>
        <p className="text-page">2-Installer un aérateur de robinet ou encore une pomme de douche à faible débit, ce qui peut réduire de moitié la quantité d’eau que vous utilisez.</p>
        <p className="text-page">3-Garder une carafe d’eau dans le réfrigérateur pour que vous ayez toujours de l’eau fraîche à portée de la main. Ça vous évitera de faire couler l’eau du robinet.</p>
        <p className="text-page">4-Attendre que le lave-vaisselle soit plein avant de le mettre en marche.</p>
         <p className="text-page">5-Prendre des douches plus brèves.</p>
         <h2 className="lalal">Les produits toxiques :</h2>
         <p className="text-page">De nombreux produits chimiques sont nocifs pour les humains, les animaux, les plantes et l’environnement. Il est donc important de réduire autant que possible leur utilisation
          et d’en disposer adéquatement. Essayez de vous rappeler de :</p>
          <p className="text-page">1-Acheter des produits durables et réutilisables plutôt que des produits jetables ou de qualité inférieure.</p>
          <p className="text-page">2-Réparer les objets brisés ou abîmés avant d’en acheter d’autres.</p>
          <p className="text-page">3-Éviter d’acheter des produits avec beaucoup d’emballage.</p>
          <p className="text-page">4-Acheter des produits en vrac autant que possible.</p>
          <p className="text-page">5-Apporter votre propre sac d’épicerie réutilisable afin de réduire l’utilisation de sacs en plastique.</p>
          <h2 className="lalal">Le jardin :</h2>
          <p className="text-page">Les pesticides sont désormais interdits en Ontario parce qu’ils sont considérés toxiques pour l’environnement, les humains et les animaux.

Vous pouvez trouver dans les centres de jardinage ou sur Internet (voir les liens ci-dessous), des conseils sur des moyens naturels de contrôler les pestes dans votre jardin. Aussi, lorsque vous ajoutez de nouvelles plantes, choisissez des espèces qui ont besoin de peu d’eau. Les plantes indigènes se contentent généralement d’une quantité minime d’eau et sont bien adaptées à notre milieu.</p>
      

<h1 className="la-nature">Pourquoi faut-il protéger les forêts ? </h1>
<p className="text-page">Les forêts sont un trésor de biodiversité et participent à l'équilibre et à la santé de notre planète. En France, nous avons la chance d'avoir des forêts qui se portent bien mais ce n'est pas le cas dans d'autres pays du monde. Certaines forêts sont aujourd'hui menacées. Soit parce qu'on les détruit, soit parce que l'on n'en prend pas bien soin.</p>
  
      <h2 className="lalal">La vie sans les forêts :</h2>
      <p className="text-page">C’est assez difficile à imaginer, mais sans les forêts, la Terre deviendrait sans doute un désert. Sans leur habitat, des centaines d’espèces d’animaux disparaîtraient. Il y aurait moins d’eau, moins d’oxygène. L’homme finirait sans doute lui-même par disparaître.</p>
      

      <h1 className="la-nature">les 3 grandes foret dans le monde</h1>
        <div id="azeee">
        <Card style={{ width: '18rem' }} id="cardd">
    <Card.Img variant="top" src={amazonforet} />
    <Card.Body>
      <Card.Title className="title-card">AMAZON</Card.Title>
      <Card.Text className="text-card" >
      Couvrant une superficie de plus de 1,2 milliard d'acres, la forêt amazonienne est la plus grande du monde. Cette région abrite 10 pour cent des espèces connues 
      du monde et représente plus de la moitié de la forêt tropicale de la planète.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} id="cardd">
    <Card.Img variant="top" src={congggg } height="215px" />
    <Card.Body>
      <Card.Title className="title-card"> tropicale du Congo</Card.Title>
      <Card.Text className="text-card">
      Cette forêt tropicale africaine s'étend sur plus de 1,5 million de kilomètres carrés. La déforestation a transformé la région en l'un des écosystèmes
       les plus menacés au monde. Il y a cinq parcs nationaux dans la forêt tropicale du Congo
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} id="cardd">
    <Card.Img variant="top" src={fonttttt} />
    <Card.Body>
      <Card.Title className="title-card"> biosphère de Bosawas</Card.Title>
      <Card.Text className="text-card">
      La réserve de biosphère de Bosawas dans le nord du Nicaragua s'étend sur une superficie de plus de 5 millions d'acres, ce qui 
      en fait l'une des plus grandes forêts tropicales du monde. La région a été désignée réserve de biosphère
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <h1 className="la-nature">créer un compte </h1>
         <div id="formm">
        <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"   required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"   required/>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Nom</Form.Label>
          <Form.Control placeholder="MArk"   required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Prenom</Form.Label>
          <Form.Control placeholder="BEN ABdennebi"   required/>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>pays</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>tunis</option>
              <option>Germany</option>
              <option>france</option>
              <option>italie</option>
              <option>USA</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div id="sumbit">
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        </div>
      </Form>
      </div>

      <footer id="yup">© All rights reserved | disigned by ALI SAMI CHAOUCH</footer>
      </div>
      </>
          
        );
      }

      export default App;
