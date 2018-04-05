import { TSection } from '../Section';

import Intro from './Intro';
import JsonServer from './molecule_jsonServer';
import HttpServer from './molecule_httpServer';
import HttpRequest from './molecule_httpRequests';

const Sections: TSection[] = [
    Intro, JsonServer, HttpServer, HttpRequest
];

export default Sections;