import limdu from 'limdu';
import data from '../data';
import { getPersona, createPersona, updatePersona } from '../services/persona.service';
import { getPersonaCategoryById, getOrCreatePersonaCategory } from '../services/persona_category.service';

var personaClassifier = new limdu.classifiers.Bayesian();

personaClassifier.trainBatch([{  
  input:{  
     sector:"bouw"
  },
  output:"weaklang_nonvisualcom"
},{  
  input:{  
     sector:"Industrie & energie"
  },
  output:'weaklang_nonvisualcom'
},{  
  input:{  
     sector:"Zorg & welzijn"
  },
  output:'stronglang_nonvisualcom'
},{  
  input:{  
     sector:"Handel & horeca"
  },
  output:'weaklang_nonvisualcom'
},{  
  input:{  
     sector:"Transport"
  },
  output:'stronglang_nonvisualcom'
},{  
  input:{  
     sector:"Overigedienstverlening"
  },
  output:'stronglang_visualcom'
},{  
  input:{  
     sector:"F&Z dienstverlening"
  },
  output:'stronglang_visualcom'
},{  
  input:{  
     sector:"Openbaar bestuur"
  },
  output:'stronglang_visualcom'
},{  
  input:{  
     sector:"Onderwijs"
  },
  output:'stronglang_visualcom'
}]);

export const get = (req, res) => {
  getPersona(req.signedCookies.persona_tag)
    .then(persona => {
      getPersonaCategoryById(persona.personaCategoryId)
        .then(personaCategory => {
          res.status(200).send({ success: true, data: personaCategory.category_name });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(404).send({ success: false, msg: "Persona could not be delivered" });
    });
}

export const create = async (req, res) => {
  console.log(personaClassifier.classify({sector:"Openbaar bestuur"}));
  const magiclyAssignedCategory = await getOrCreatePersonaCategory('medium');

  createPersona({ personaCategoryId: magiclyAssignedCategory[0].personaCategoryId })
    .then(persona => {
      res.status(200).cookie('persona_tag', persona.personaId, {signed: true }).send({ success: true, msg: "Persona created, cookie set" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be created" });
    });
}

export const reassign = async (req, res) => {
  const magiclyAssignedCategory = await getOrCreatePersonaCategory('medium');

  updatePersona(req.signedCookies.persona_tag, magiclyAssignedCategory)
    .then(() => {
      res.status(200).send({ success: true, msg: "Persona updated" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be updated" });
    });
}