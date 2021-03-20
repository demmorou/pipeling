import { container } from 'tsyringe';

import { AxiosProvider } from './implementations/AxiosProvider';
import { IHttpProvider } from './models/IHttpProvider';

container.registerSingleton<IHttpProvider>('HttpProvider', AxiosProvider);
