import sketch from 'sketch'
import spacingNames from './spacingNames';

export default function() {
  let layersNames = "Supported layer names: "

  spacingNames.map(name => addName(name))

  function addName(name) {
    layersNames += ` ${name} `;
  }

  sketch.UI.message(layersNames);
}
