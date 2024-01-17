//importing modules
import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { IUser } from '@user-app/shared';

//validation schema
export const UserSchemaValidate = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
});

//Postschema
const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

//creating a model
export const User = model<IUser>('Users', userSchema);
