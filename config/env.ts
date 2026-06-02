import stage from './stage.json';
import qa from './qa.json';
import preProd from './pre-prod.json';

const envName = process.env.TEST_ENV || 'stage';

const envMap = {
    stage,
    qa,
    'pre-prod': preProd,
};

const env = envMap[envName as keyof typeof envMap] ?? stage;

export default env;