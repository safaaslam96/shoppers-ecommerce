import { type SchemaTypeDefinition } from 'sanity';
import banner from '../schemas/banner'; // Adjust the path based on your project structure.
import products from '../schemas/products';
import category from '../schemas/category';

export const schemaTypes: SchemaTypeDefinition[] = [banner, products, category];
