import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';

const identity = Math.random().toString(32).substr(2, 8);

// const config = {
//   host: 'bhm-uat-qsense01.adtrav.com',
//   secure: true,
//   port: 443,
//   prefix: '',
//   appId: 'c0dae89c-3c20-420b-8900-34d04ed300c6',
//   identity: 'ce6c7616716e1d61189f36f77fb0fc79d76f951b052c4d0c21d83c99c4734fe5',
// };

// **** DEV *****
// const config = {
//   host: 'rezintel2.rezdeskdev.com',
//   secure: true,
//   port: 443,
//   prefix: '',
//   appId: '2d31a8c2-0870-4d8c-b00b-a149b4c7d8cc',
//   identity,
// };

// *** Qlik Sense Demo ****
const config = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '372cbc85-f7fb-4db6-a620-9a5367845dce',
  identity,
};

const engineApiAppPromise = qdtEnigma(config);
const capabilityApiAppPromise = qdtCapabilityApp(config);

function QdtComponent({
  component, properties, options, appIndex,
}) {
  const elementRef = useRef(null);

  const init = async () => {
    let app = await engineApiAppPromise;
    if (appIndex === 2) {
      app = await capabilityApiAppPromise;
      QdtViz({
        element: elementRef.current,
        app,
        options,
      });
    } else {
      qdtCompose({
        element: elementRef.current,
        component,
        app,
        properties,
        options,
      });
    }
  };

  useEffect(() => {
    if (elementRef) init();
  }, [init]);

  return (
    <div ref={elementRef} />
  );
}

QdtComponent.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  properties: PropTypes.object,
  options: PropTypes.object,
  appIndex: PropTypes.number,
};
QdtComponent.defaultProps = {
  component: null,
  properties: {},
  options: {},
  appIndex: 1,
};

export default QdtComponent;