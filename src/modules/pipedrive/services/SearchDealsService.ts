import { inject, injectable } from 'tsyringe';

import { IHttpProvider } from '~shared/container/providers/HttpProvider/models/IHttpProvider';

import { pipedriveConfig } from '~config/pipedrive';

import { IGetDealsResponseDTO } from '../dtos/IGetDealsResponseDTO';

interface IRequest {
  status: string;
  start: number;
}

@injectable()
class SearchDealsService {
  constructor(
    @inject('HttpProvider')
    private readonly httpProvider: IHttpProvider,
  ) {
    httpProvider.setup({
      baseURL: pipedriveConfig.baseURL,
      params: {
        api_token: pipedriveConfig.api_token,
      },
    });
  }

  public async execute({
    status,
    start,
  }: IRequest): Promise<IGetDealsResponseDTO> {
    const response = await this.httpProvider.get<IGetDealsResponseDTO>(
      `/deals/`,
      {
        params: {
          status,
          start,
        },
      },
    );

    return response.data;
  }
}

export { SearchDealsService };
