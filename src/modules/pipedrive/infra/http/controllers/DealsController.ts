import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SearchDealsService } from '~modules/pipedrive/services/SearchDealsService';

interface ISearchQuery {
  status: string;
  start: number;
}

export class DealsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { status, start } = (request.query as unknown) as ISearchQuery;

    const searchDeals = container.resolve(SearchDealsService);

    const deals = await searchDeals.execute({ status, start });

    return response.json(deals);
  }
}
