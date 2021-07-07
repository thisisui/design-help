import sketch from 'sketch'
import spacingNames from './spacingNames';

export default function() {
  const doc = sketch.getSelectedDocument()

  spacingNames.map(name => hideLayers(name))

  function hideLayers(name) {
    const spaceLayer = doc.getLayersNamed(name);
    spaceLayer.map(layer => layer.hidden = false)
  }

  sketch.UI.message("Job done! Shown!");
}
