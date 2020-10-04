import { useCallback, useContext, useEffect } from "react";
import ModelContext from "./ModelContext";

export default function useModel(modelName: string) {
    const { registerModel, unregisterModel, getModelByModel } = useContext(ModelContext);

    useEffect(() => () => unregisterModel(modelName)
        , [modelName, unregisterModel])

    const getModel = useCallback(() =>
        getModelByModel(modelName), [getModelByModel, modelName]
    )

    return { registerModel , getModel}; 
}