export interface PlantUMLAttribute {
    type: string;
    name: string;
};

export interface PlantUMLRelation {
    name: string;
    type: string;
    source: string;
    target: string;
};

export interface PlantUMLClass {
    name: string;
    attributeModel: PlantUMLAttribute[];
};

export interface PlantUMLModel {
    classes: PlantUMLClass[];
    relations: PlantUMLRelation[];
};

export const ATTRIBUTE_UNKNOWN = 'UNKNOWN';
