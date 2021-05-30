import * as base from '@jupyter-widgets/base';
import {version} from './version';
import * as sheet from './sheet';

import {
    JupyterFrontEndPlugin,
} from '@jupyterlab/application';

const ipysheetPlugin: JupyterFrontEndPlugin<void> = {
    id: 'ipysheet',
    autoStart: true,
    requires: [base.IJupyterWidgetRegistry],
    activate: function(app, widgets) {
        alert("A");
        widgets.registerWidget({
            name: 'ipysheet',
            version: version,
            exports: sheet
        });
    }
  };

export default ipysheetPlugin;
