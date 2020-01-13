import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Category from './components/Category_component';

class App extends Component {
  state = {
    data: [
      {
        "key": "Documents importants",
        "data": [
          {
            "key": "Carte d'identité",
            "description": "..."
          },
          {
            "key": "Passeport",
            "description": "..."
          },
          {
            "key": "Visa",
            "description": "..."
          },
          {
            "key": "Carnet de vaccination",
            "description": "..."
          },
          {
            "key": "Permis Voiture/Moto/Bateau",
            "description": "..."
          },
          {
            "key": "Carte étudiant/chômeur",
            "description": "..."
          }
        ]
      },
      {
        "key": "Moyens de paiement",
        "data": [
          {
            "key": "Carte de crédit",
            "description": "..."
          },
          {
            "key": "Chéquier",
            "description": "..."
          },
          {
            "key": "Devises étrangères",
            "description": "..."
          },
          {
            "key": "Monnaie",
            "description": "..."
          }
        ]
      },
      {
        "key": "Transport",
        "data": [
          {
            "key": "Billets Avion/Train/Bus",
            "description": "..."
          },
          {
            "key": "Clefs de voiture",
            "description": "..."
          },
          {
            "key": "Cartes de réduction",
            "description": "..."
          }
        ]
      },
      {
        "key": "Sous vêtements",
        "data": [
          {
            "key": "Culottes/Caleçons",
            "description": "..."
          },
          {
            "key": "Chaussettes",
            "description": "..."
          },
          {
            "key": "Soutien-gorge",
            "description": "..."
          },
          {
            "key": "Pyjama",
            "description": "..."
          },
          {
            "key": "Maillot de bain",
            "description": "..."
          },
          {
            "key": "Ceinture",
            "description": "..."
          }
        ]
      },
      {
        "key": "Vêtements haut",
        "data": [
          {
            "key": "Pulls",
            "description": "..."
          },
          {
            "key": "T-shirt",
            "description": "..."
          },
          {
            "key": "Chemise",
            "description": "..."
          },
          {
            "key": "Veste",
            "description": "..."
          },
          {
            "key": "Polaire",
            "description": "..."
          },
          {
            "key": "Écharpe",
            "description": "..."
          },
          {
            "key": "Manteau",
            "description": "..."
          }
        ]
      },
      {
        "key": "Vêtements bas",
        "data": [
          {
            "key": "Pantalon / Robe",
            "description": "..."
          },
          {
            "key": "Short / Jupe",
            "description": "..."
          },
          {
            "key": "Tenue de soirée",
            "description": "..."
          },
          {
            "key": "Pareo",
            "description": "..."
          },
          {
            "key": "combinaison de ski",
            "description": "..."
          }
        ]
      },
      {
        "key": "Pour la tête",
        "data": [
          {
            "key": "Chapeau",
            "description": "..."
          },
          {
            "key": "Bonnet",
            "description": "..."
          },
          {
            "key": "Élastiques / Pinces",
            "description": "..."
          },
          {
            "key": "Lunettes/Lentilles",
            "description": "..."
          },
          {
            "key": "Casquette",
            "description": "..."
          }
        ]
      },
      {
        "key": "Se chausser",
        "data": [
          {
            "key": "Chaussures de ville",
            "description": "..."
          },
          {
            "key": "Chaussures sports",
            "description": "..."
          },
          {
            "key": "Chaussures d'eau",
            "description": "..."
          },
          {
            "key": "Chaussons/claquettes",
            "description": "..."
          },
          {
            "key": "Bottes",
            "description": "..."
          },
          {
            "key": "Boots",
            "description": "..."
          }
        ]
      },
      {
        "key": "Pour la pluie",
        "data": [
          {
            "key": "Veste de pluie",
            "description": "..."
          },
          {
            "key": "Cape de pluie",
            "description": "..."
          },
          {
            "key": "Parapluie",
            "description": "..."
          }
        ]
      },
      {
        "key": "Se laver",
        "data": [
          {
            "key": "Savon",
            "description": "..."
          },
          {
            "key": "Shampoing/Après",
            "description": "..."
          },
          {
            "key": "Cotons tiges",
            "description": "..."
          },
          {
            "key": "Brosse à dent",
            "description": "..."
          },
          {
            "key": "Dentifrice",
            "description": "..."
          },
          {
            "key": "Serviettes",
            "description": "..."
          }
        ]
      },
      {
        "key": "Cosmétiques",
        "data": [
          {
            "key": "Déodorant",
            "description": "..."
          },
          {
            "key": "Parfum",
            "description": "..."
          },
          {
            "key": "Maquillage/Démaquillant",
            "description": "..."
          },
          {
            "key": "Baume à lèvres",
            "description": "..."
          },
          {
            "key": "Gel/Laque",
            "description": "..."
          },
          {
            "key": "Gel de rasage",
            "description": "..."
          },
          {
            "key": "Sac pour linge sale",
            "description": "..."
          }
        ]
      },
      {
        "key": "Trousse de toillette",
        "data": [
          {
            "key": "Coupe ongles",
            "description": "..."
          },
          {
            "key": "Pince à épiler",
            "description": "..."
          },
          {
            "key": "Mouchoirs",
            "description": "..."
          },
          {
            "key": "Papier toilette",
            "description": "..."
          },
          {
            "key": "Ciseaux",
            "description": "..."
          },
          {
            "key": "Bouchons d'oreilles",
            "description": "..."
          },
          {
            "key": "Peigne/Brosse",
            "description": "..."
          },
          {
            "key": "Serviettes hygièniques/Tampon",
            "description": "..."
          },
          {
            "key": "Rasoirs/Tondeuse",
            "description": "..."
          },
          {
            "key": "Bijoux",
            "description": "..."
          },
          {
            "key": "Épilateur",
            "description": "..."
          }
        ]
      },
      {
        "key": "Médicaments",
        "data": [
          {
            "key": "Contre le mal de tête",
            "description": "..."
          },
          {
            "key": "Anti-diahréeique",
            "description": "..."
          },
          {
            "key": "Antibiotiques",
            "description": "..."
          },
          {
            "key": "Ordonnances en cours",
            "description": "..."
          },
          {
            "key": "Pour les brûlures",
            "description": "..."
          }
        ]
      },
      {
        "key": "Santé/Protection",
        "data": [
          {
            "key": "Désinfectant",
            "description": "..."
          },
          {
            "key": "Crème solaire",
            "description": "..."
          },
          {
            "key": "Pansements",
            "description": "..."
          },
          {
            "key": "Anti-ampoules",
            "description": "..."
          },
          {
            "key": "Bandages",
            "description": "..."
          },
          {
            "key": "Sérum physiologique",
            "description": "..."
          },
          {
            "key": "Pastilles purifiantes pour l'eau",
            "description": "..."
          },
          {
            "key": "Moyens Contraceptifs",
            "description": "..."
          }
        ]
      },
      {
        "key": "Contre les moustiques",
        "data": [
          {
            "key": "Spray anti-moustiques",
            "description": "..."
          },
          {
            "key": "Traitement des boutons",
            "description": "..."
          },
          {
            "key": "Moustiquaires",
            "description": "..."
          },
          {
            "key": "Anti-paludique",
            "description": "..."
          },
          {
            "key": "Serpentins",
            "description": "..."
          }
        ]
      },
      {
        "key": "Matériel électronique",
        "data": [
          {
            "key": "Réveil",
            "description": "..."
          },
          {
            "key": "Mobile/Tablette",
            "description": "..."
          },
          {
            "key": "Apareil photo/Caméra",
            "description": "..."
          },
          {
            "key": "Clefs USB",
            "description": "..."
          },
          {
            "key": "Navigateur GPS",
            "description": "..."
          },
          {
            "key": "Ordinateur portable",
            "description": "..."
          },
          {
            "key": "Lampe de poche/Frontale",
            "description": "..."
          },
          {
            "key": "Console de jeux",
            "description": "..."
          },
          {
            "key": "Adaptateur universel",
            "description": "..."
          },
          {
            "key": "Chargeurs",
            "description": "..."
          },
          {
            "key": "Piles/Batteries",
            "description": "..."
          }
        ]
      },
      {
        "key": "Alimentation",
        "data": [
          {
            "key": "Couverts/Vaiselle",
            "description": "..."
          },
          {
            "key": "Nourriture",
            "description": "..."
          },
          {
            "key": "Gourde/Bouteille",
            "description": "..."
          },
          {
            "key": "Tire-bouchon",
            "description": "..."
          },
          {
            "key": "Rape",
            "description": "..."
          },
          {
            "key": "Passoire",
            "description": "..."
          },
          {
            "key": "Glacière",
            "description": "..."
          }
        ]
      },
      {
        "key": "Pour dormir",
        "data": [
          {
            "key": "Duvet",
            "description": "..."
          },
          {
            "key": "Oreiller",
            "description": "..."
          },
          {
            "key": "Sac à viande",
            "description": "..."
          }
        ]
      },
      {
        "key": "Randonnée",
        "data": [
          {
            "key": "Tente",
            "description": "..."
          },
          {
            "key": "Bâtons de marche",
            "description": "..."
          },
          {
            "key": "Matelas de sol",
            "description": "..."
          },
          {
            "key": "Réchaud",
            "description": "..."
          }
        ]
      },
      {
        "key": "Loisirs",
        "data": [
          {
            "key": "Livres",
            "description": "..."
          },
          {
            "key": "Jeux de société",
            "description": "..."
          },
          {
            "key": "Papier et stylos",
            "description": "..."
          },
          {
            "key": "Carnet de voyage",
            "description": "..."
          }
        ]
      },
      {
        "key": "Se repérer",
        "data": [
          {
            "key": "Itinéraire",
            "description": "..."
          },
          {
            "key": "Cartes",
            "description": "..."
          },
          {
            "key": "Atlas routier",
            "description": "..."
          },
          {
            "key": "Guides touristiques",
            "description": "..."
          }
        ]
      },
      {
        "key": "Pour les autres",
        "data": [
          {
            "key": "Cadeaux",
            "description": "..."
          },
          {
            "key": "Carnet d'adresse",
            "description": "..."
          },
          {
            "key": "Cartes postales",
            "description": "..."
          },
          {
            "key": "Timbres",
            "description": "..."
          }

        ]
      },
      {
        "key": "Toujours utile",
        "data": [
          {
            "key": "Couteau",
            "description": "..."
          },
          {
            "key": "Jumelles",
            "description": "..."
          },
          {
            "key": "Briquet",
            "description": "..."
          },
          {
            "key": "Corde",
            "description": "..."
          },
          {
            "key": "Sacs en plastiques",
            "description": "..."
          },
          {
            "key": "Sacs poubelle",
            "description": "..."
          },
          {
            "key": "Clefs de chez soi",
            "description": "..."
          },
          {
            "key": "Clefs de la destination",
            "description": "..."
          }
        ]
      },
      {
        "key": "Avant de partir",
        "data": [
          {
            "key": "Arroser les plantes",
            "description": "..."
          },
          {
            "key": "Vider les poubelles",
            "description": "..."
          },
          {
            "key": "Couper gaz/eau/électricité",
            "description": "..."
          },
          {
            "key": "Révision du véhicule",
            "description": "..."
          }
        ]
      }
    ]
  }

  /*
  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }
    callBackendAPI = async () => {
      let body = Error('could not fetch data');
      try {
        const response = await fetch('http://checkngo.ighilr.fr/api/items/');
        body = await response.json();
        const now = new Date();
        console.log("Data has been fetched !", now);
  
      } catch (error) {
        console.error("Could'nt fetch data", error)
        // if (response.status !== 200) {
        //   throw Error(body.message);
        // }
      }
      return body;
    }
    */


  createCategoryElement = CategoryName => (
    <Category
      CategoryName={CategoryName}
      data={this.state.data}
      key={CategoryName}
    />
  )

  filterCategories = () => {
    const { data } = this.state;
    console.log('data', data)
    if (data && data.length > 0) {
      return [...new Set(data.map(item => item.key))];
     // return [...new Set(data.map(item => item.category_name))];
    }
  }

  createCategoryElements = () => (
    this.filterCategories().map(this.createCategoryElement)
  )

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Let's pack !</h1>
        </header>
        <div id='App-form' data={data}>
          {this.createCategoryElements()}
        </div>
      </div>
    );
  }
}

export default App;
