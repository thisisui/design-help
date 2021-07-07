import sketch from 'sketch'
import spacingNames from './spacingNames';

export default function() {
  const doc = sketch.getSelectedDocument()

  spacingNames.map(name => toggleLayersVisibility(name))

  function toggleLayersVisibility(name) {
    const spaceLayer = doc.getLayersNamed(name);
    spaceLayer.map(layer => layer.hidden = !layer.hidden)
  }

  sketch.UI.message("Job done! Toggled!");
}
