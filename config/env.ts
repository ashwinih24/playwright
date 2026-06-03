import dev from './dev.json';
import preProd from './pre-prod.json';
import stagecis from './stagecis.json';
import stagedave from './stagedave.json';
import qa from './qa.json';

const envName = process.env.TEST_ENV || 'dev';

const envMap = {
    dev,
    'pre-prod': preProd,
    stagecis,
    stagedave,
    qa,
};

const env = envMap[envName as keyof typeof envMap] ?? dev;

export default env;