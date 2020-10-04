import React, { useCallback, useRef, useState } from 'react';
import ModelContext, { CarModel } from '../ModelContext';

import ModelOverlay from '../ModelOverlay';

import { Container,OverLaysRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {

  const wrapperRef = useRef<HTMLDivElement>(null);


  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName != modelName));
  }, [])

  const getModelByModel = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByModel
    }}>
      <Container ref={wrapperRef}>
        <OverLaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          )
          )}
        </OverLaysRoot>

        {children}
      </Container>
    </ModelContext.Provider>
  );
};

export default ModelsWrapper;
