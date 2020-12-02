import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModelManagerDocument = ModelManager & Document;

@Schema({ minimize: false})
export class ModelManager {

  @Prop({ required: true, unique: true })
  name: string;

  @Prop( { required: true })
  model?: string;
}

export const ModelManagerSchema = SchemaFactory.createForClass(ModelManager);
