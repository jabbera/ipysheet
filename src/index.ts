import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import * as base from '@jupyter-widgets/base';

/**
 * Initialization data for the ipysheet_jabbera extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'ipysheet_jabbera:plugin',
  autoStart: true,
  requires: [base.IJupyterWidgetRegistry],
  activate: (app: JupyterFrontEnd, widgets: base.IJupyterWidgetRegistry) => {
    console.log('JupyterLab extension ipysheet_jabbera is activated!');
    alert('B');
  }
};

export default extension;
