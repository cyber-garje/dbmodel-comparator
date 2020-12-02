import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config/database.yml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8')
  );
};

export interface DbEnvironment {
  development: dbConf;
}

export interface dbConf {
  user: string;
  password: string;
  host: string;
  database: string;
}
