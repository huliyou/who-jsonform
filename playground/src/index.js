/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React from 'react';
import { render } from 'react-dom';
const rootElement = document.getElementById('app');

import JSONform from '../../src/index';
import JSONSchema from '../EMR/JSONSchema';
import uiSchema from '../EMR/uiSchema';

render(
  <div>
    {/* Your root Component */}
    <JSONform
      jsonSchema={JSONSchema}
      uiSchema={uiSchema}
      onChange={() => {}}
    />
  </div>,
  rootElement
);
